"use server";

import { site, type LeadType } from "@/lib/site";

export type LeadPayload = {
  type: LeadType;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  address?: string;
  marketingOptIn: boolean;
};

export type LeadResult = {
  ok: boolean;
  error?: string;
};

function requiredEnv(name: string) {
  return process.env[name]?.trim() || "";
}

async function submitToHubSpot(payload: LeadPayload): Promise<boolean> {
  const portalId = requiredEnv("HUBSPOT_PORTAL_ID");
  const formId = requiredEnv("HUBSPOT_FORM_ID");
  if (!portalId || !formId) return false;

  const fields = [
    { name: "email", value: payload.email },
    { name: "firstname", value: payload.name.split(" ")[0] || payload.name },
    {
      name: "lastname",
      value: payload.name.split(" ").slice(1).join(" ") || "Lead",
    },
    { name: "phone", value: payload.phone || "" },
    { name: "message", value: payload.message || "" },
    { name: "address", value: payload.address || "" },
    { name: "lead_type", value: payload.type },
  ];

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: `https://${site.domain}`,
          pageName: site.name,
        },
        legalConsentOptions: payload.marketingOptIn
          ? {
              consent: {
                consentToProcess: true,
                text: "I agree to receive marketing communications from Calvin Lyman Real Estate.",
                communications: [
                  {
                    value: true,
                    subscriptionTypeId: Number(
                      requiredEnv("HUBSPOT_SUBSCRIPTION_TYPE_ID") || "999",
                    ),
                    text: "Email marketing from Calvin Lyman Real Estate",
                  },
                ],
              },
            }
          : undefined,
      }),
    },
  );

  return res.ok;
}

async function sendLeadEmail(payload: LeadPayload): Promise<boolean> {
  const resendKey = requiredEnv("RESEND_API_KEY");
  const to = requiredEnv("LEAD_NOTIFY_EMAIL") || site.email;
  const from = requiredEnv("LEAD_FROM_EMAIL") || "leads@calvinlymanrealestate.com";

  if (!resendKey) return false;

  const subject = `[${payload.type}] New lead from ${payload.name}`;
  const text = [
    `Type: ${payload.type}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "—"}`,
    `Address: ${payload.address || "—"}`,
    `Marketing opt-in: ${payload.marketingOptIn ? "Yes" : "No"}`,
    "",
    payload.message || "",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
    }),
  });

  return res.ok;
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  if (!payload.name?.trim() || !payload.email?.trim()) {
    return { ok: false, error: "Name and email are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    const [hubspotOk, emailOk] = await Promise.all([
      submitToHubSpot(payload),
      sendLeadEmail(payload),
    ]);

    // In local/demo mode without credentials, accept the lead so UI flow can be tested.
    if (!hubspotOk && !emailOk) {
      const allowDemo = process.env.ALLOW_DEMO_LEADS === "true" || process.env.NODE_ENV !== "production";
      if (allowDemo) {
        console.info("[demo-lead]", payload);
        return { ok: true };
      }
      return {
        ok: false,
        error:
          "Lead delivery is not configured yet. Add HubSpot or Resend credentials.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Lead submission failed", error);
    return { ok: false, error: "Something went wrong. Please call or email directly." };
  }
}
