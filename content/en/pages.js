// English version (Kolya, 22.11.2026: full site in English). Facts mirror the Ukrainian pages.
// Audience: foreigners and foreign-owned businesses in Ukraine. Keys = path without leading "/".

import { FACTS_EN } from "@/lib/site";

const ALL_INCLUSIVE = "The quoted price covers everything: notary, state fees and documents. No extra payments.";
const exp = { value: FACTS_EN.experience, label: "of experience" };
const row = (name, href, price, text) => ({ name, href, price, text });

export const enCorePages = {
  "en/company-registration-ukraine": {
    meta: {
      title: "Company Registration in Ukraine (LLC) | Weksar",
      description: "LLC (TOV) and sole proprietor (FOP) registration in Ukraine: business activity codes, tax system, charter, state registration. LLC from UAH 2,500.",
    },
    breadcrumbs: [{ name: "Company registration", href: "/en/company-registration-ukraine" }],
    cta: "EN: Company registration",
    hero: {
      title: "Company Registration in Ukraine",
      lead: "We register Ukrainian limited liability companies (TOV) and sole proprietors (FOP) turnkey: business activity codes (KVED), tax system, charter, registration in the Unified State Register and tax registration.",
      facts: [{ value: "UAH 2,500", label: "LLC, from" }, { value: "UAH 1,000", label: "sole proprietor" }, exp],
    },
    sections: [
      {
        type: "split",
        left: {
          title: "What is included",
          items: [
            "Consultation: shareholders, share capital, director",
            "Business activity codes (KVED) chosen for your business, licenses and tenders",
            "Tax system: simplified (single tax) or general, VAT",
            "Your own charter or the model charter",
            "Founders' decision and applications",
            "State registration and an extract from the Unified State Register",
          ],
        },
        right: {
          title: "Foreign founders",
          intro: "If a founder or director is a foreigner, we also help with:",
          items: ["Ukrainian tax number (RNOKPP) for the founder", "Translation of passports and documents", "Notarization where required", "Information on the ultimate beneficial owner"],
          cta: "Discuss my case",
        },
      },
      {
        type: "steps",
        title: "How it works",
        tone: "mist",
        items: [
          { t: "Consultation", d: "We discuss your activity, shareholders, taxes and plans (licenses, tenders)." },
          { t: "Documents", d: "We prepare the charter or choose the model one, the founders' decision and applications." },
          { t: "Registration", d: "We file the documents with the state registrar and obtain the extract." },
          { t: "Taxes", d: "Registration as a single tax or VAT payer, advice on bank account and accounting." },
        ],
      },
      { type: "related", items: [{ name: "Sole proprietor registration", href: "/en/sole-proprietor-registration-ukraine", price: "UAH 1,000" }, { name: "Changes to an LLC", href: "/en/llc-changes-ukraine", price: "from UAH 4,000" }, { name: "Tax number for a foreigner", href: "/en/services-for-foreigners/tax-number", price: "UAH 2,000" }] },
    ],
    faq: [
      { q: "How much does LLC registration cost?", a: "From UAH 2,500. Sole proprietor registration — UAH 1,000." },
      { q: "Can a foreigner own a Ukrainian LLC?", a: "Yes. Foreign individuals and companies can be shareholders. A Ukrainian tax number and translated documents are usually required — we help with both." },
    ],
    lead: { title: "Tell us about your business" },
    schema: { name: "Company registration in Ukraine", serviceType: "State registration of a limited liability company", price: "2500" },
  },

  "en/llc-liquidation-ukraine": {
    meta: {
      title: "LLC Liquidation in Ukraine — from UAH 20,000 | Weksar",
      description: "Closing a Ukrainian LLC (TOV): voluntary liquidation, change of owner, liquidation with debts or bankruptcy, reorganization. From 2 days to 2.5 months.",
    },
    breadcrumbs: [{ name: "LLC liquidation", href: "/en/llc-liquidation-ukraine" }],
    cta: "EN: LLC liquidation",
    hero: {
      title: "LLC Liquidation in Ukraine",
      lead: "We close Ukrainian limited liability companies (TOV) by any lawful method and quote a price that covers everything.",
      facts: [{ value: "UAH 20,000", label: "price, from" }, { value: "from 2 days", label: "to 2.5 months" }, exp],
    },
    sections: [
      {
        type: "cards",
        eyebrow: "4 methods",
        title: "Ways to close an LLC",
        intro: ALL_INCLUSIVE,
        items: [
          { name: "Voluntary liquidation", text: "Liquidation by the shareholders' decision through a liquidation commission: creditors, tax audit, liquidation balance sheet, record of termination.", term: "2.5 months", price: "from UAH 20,000" },
          { name: "Change of owner", text: "The shares and the director's position pass to a new owner. The fastest way, but legally the company continues to exist.", term: "from 2 days", price: "from UAH 20,000", href: "/en/llc-liquidation-ukraine/change-of-owner" },
          { name: "With debts / bankruptcy", text: "When the company owes the tax authority, banks or counterparties: analysis and the right procedure, including bankruptcy.", term: "from 2 days to 2.5 months", price: "from UAH 25,000", href: "/en/llc-liquidation-ukraine/with-debts-bankruptcy" },
          { name: "Reorganization", text: "Termination by merger with or accession to another company; rights and obligations pass to the successor.", term: "2.5 months", price: "from UAH 25,000", href: "/en/llc-reorganization-ukraine" },
        ],
      },
      {
        type: "steps",
        title: "Voluntary liquidation step by step",
        items: [
          { t: "Shareholders' decision", d: "The shareholders decide to liquidate and appoint a liquidation commission." },
          { t: "State registrar", d: "The decision is filed; the register shows the company as being terminated." },
          { t: "Creditors' claims", d: "Creditors have at least 2 months to file their claims." },
          { t: "Tax audit and accounts", d: "Tax audit, settlements, closing bank accounts." },
          { t: "Liquidation balance sheet", d: "Approved by the shareholders; documents go to the archive." },
          { t: "Record of termination", d: "The registrar records the termination of the company." },
        ],
      },
      { type: "related", items: [{ name: "Closing a sole proprietorship", href: "/en/close-sole-proprietorship-ukraine", price: "UAH 3,500" }, { name: "Change of shareholders", href: "/en/llc-changes-ukraine/change-of-shareholders", price: "from UAH 4,000" }, { name: "Accounting for an LLC", href: "/en/accounting-services-ukraine/llc", price: "from UAH 6,000/month" }] },
    ],
    faq: [
      { q: "How much does LLC liquidation cost?", a: "Voluntary liquidation and change of owner — from UAH 20,000; liquidation with debts and reorganization — from UAH 25,000. The quoted price covers everything." },
      { q: "Do I need to be in Ukraine?", a: "We meet clients in person and accompany them to the notary. If you are abroad, tell us — we will explain which steps can be done by power of attorney." },
    ],
    lead: { title: "Tell us about your company" },
    schema: { name: "LLC liquidation in Ukraine", serviceType: "Liquidation of a limited liability company", price: "20000" },
  },

  "en/tender-support-ukraine": {
    meta: {
      title: "Tender Support in Ukraine: Prozorro Bids | Weksar",
      description: "Full tender support for small and mid-sized companies in Ukraine: assessment, bid preparation, Prozorro participation, contract support. Across Ukraine.",
    },
    breadcrumbs: [{ name: "Tender support", href: "/en/tender-support-ukraine" }],
    cta: "EN: Tender support",
    hero: {
      eyebrow: "Public procurement · Prozorro · all of Ukraine",
      title: "Tender Support in Ukraine",
      lead: "For young and mid-sized companies that can deliver but have not yet entered public procurement. We handle the full cycle — from assessing your capabilities to performing the procurement contract.",
      facts: [{ value: "4 stages", label: "from assessment to contract" }, exp, { value: "Ukraine", label: "procurement online" }],
    },
    sections: [
      { type: "highlight", label: "Case", text: "A company we prepared won its first tender worth UAH 3,000,000." },
      {
        type: "steps",
        title: "Full cycle — 4 stages",
        tone: "mist",
        items: [
          { t: "Capability assessment", d: "Documents, experience and resources; which procurements and buyers fit you." },
          { t: "Getting ready", d: "Qualified electronic signature, registration on an authorized platform, qualification documents." },
          { t: "Bidding", d: "Finding tenders, analysing tender documents, preparing and submitting the bid, bid security (bank guarantee)." },
          { t: "After winning", d: "Signing the procurement contract, performance support, contract amendments." },
        ],
      },
      {
        type: "prices",
        tone: "plain",
        title: "Formats and prices",
        items: [
          { name: "Capability assessment", price: "from UAH 3,000" },
          { name: "Bid preparation", href: "/en/tender-support-ukraine/bid-preparation", price: "from UAH 5,000" },
          { name: "Support for one procurement", price: "from UAH 8,000" },
          { name: "Ongoing support (subscription)", price: "from UAH 8,000/month" },
          { name: "Success fee", text: "Paid only after winning", price: "5% of the contract value" },
        ],
      },
      { type: "related", items: [{ name: "For contracting authorities", href: "/en/tender-support-ukraine/for-contracting-authorities", price: "from UAH 5,000" }, { name: "Contracts", href: "/en/contracts", price: "from UAH 2,000" }, { name: "Construction license", href: "/en/business-licenses-ukraine/construction", price: "UAH 15,000 + state fee" }] },
    ],
    faq: [
      { q: "Do you guarantee winning?", a: "No. The buyer chooses the winner under the evaluation criteria. We prepare a bid without formal errors and pick procurements where you have real chances." },
      { q: "Do you work with buyers?", a: "Yes, we also prepare tender documentation and support procurements for contracting authorities." },
    ],
    lead: { title: "Let's assess your company's capabilities" },
    schema: { name: "Tender support in Ukraine", serviceType: "Public procurement participation support", area: "ukraine" },
  },

  "en/business-licenses-ukraine": {
    meta: {
      title: "Business Licenses in Ukraine: Alcohol, Tobacco | Weksar",
      description: "Retail alcohol, cider and tobacco licenses and construction licenses (CC2, CC3) in Ukraine: documents, filing, renewal. From UAH 9,000 plus state fee.",
    },
    breadcrumbs: [{ name: "Licenses", href: "/en/business-licenses-ukraine" }],
    cta: "EN: Licenses",
    hero: {
      title: "Business Licenses in Ukraine",
      lead: "We obtain and renew licenses for retail sale of alcohol, cider and perry, tobacco products, and construction licenses for CC2 and CC3 consequence class objects.",
      facts: [{ value: "UAH 9,000", label: "from, + state fee" }, { value: "turnkey", label: "documents and filing" }, exp],
    },
    sections: [
      {
        type: "prices",
        title: "Licenses and prices",
        intro: "The state license fee is paid separately at the current rates.",
        items: [
          { name: "Retail sale of alcoholic beverages", href: "/en/business-licenses-ukraine/alcohol", price: "UAH 12,000" },
          { name: "Retail sale of cider and perry", href: "/en/business-licenses-ukraine/alcohol", price: "UAH 9,000" },
          { name: "Retail sale of tobacco products", href: "/en/business-licenses-ukraine/tobacco", price: "UAH 10,000" },
          { name: "License renewal (alcohol, tobacco)", text: "Per license", price: "UAH 2,000" },
          { name: "Construction license (CC2, CC3)", href: "/en/business-licenses-ukraine/construction", price: "UAH 15,000" },
          { name: "Amendments to a construction license", text: "Per license", href: "/en/business-licenses-ukraine/construction", price: "UAH 4,000" },
        ],
      },
    ],
    faq: [{ q: "Can a sole proprietor get an alcohol license?", a: "Yes, both sole proprietors and LLCs can obtain a retail alcohol license." }],
    lead: { title: "Which license do you need?" },
    schema: { name: "Business licenses in Ukraine", serviceType: "Business licensing", price: "9000" },
  },

  "en/prices": {
    meta: {
      title: "Prices for Legal and Accounting Services | Weksar",
      description: "Weksar prices: company registration, LLC liquidation, tender support, licenses, accounting and other legal services in Ukraine.",
    },
    breadcrumbs: [{ name: "Prices", href: "/en/prices" }],
    cta: "EN: Prices",
    hero: {
      title: "Prices",
      lead: "“From” prices are starting prices. We give the exact price after a short consultation, which is free when you order a service.",
      facts: [{ value: "UAH 1,000", label: "from" }, { value: "no extras", label: "for LLC liquidation" }, exp],
    },
    sections: [
      { type: "prices", tone: "plain", title: "Registration and changes", items: [
        row("LLC registration", "/en/company-registration-ukraine", "from UAH 2,500"),
        row("Sole proprietor registration", "/en/sole-proprietor-registration-ukraine", "UAH 1,000"),
        row("Changes to an LLC", "/en/llc-changes-ukraine", "from UAH 4,000", "director, shareholders, address, activity codes, charter, capital"),
        row("Sole proprietor changes", "/en/sole-proprietor-changes-ukraine", "UAH 1,000"),
      ] },
      { type: "prices", title: "Liquidation and closing", items: [
        row("Voluntary LLC liquidation", "/en/llc-liquidation-ukraine", "from UAH 20,000", "2.5 months"),
        row("Change of owner (“alternative liquidation”)", "/en/llc-liquidation-ukraine/change-of-owner", "from UAH 20,000", "from 2 days"),
        row("Liquidation with debts and bankruptcy", "/en/llc-liquidation-ukraine/with-debts-bankruptcy", "from UAH 25,000"),
        row("LLC reorganization", "/en/llc-reorganization-ukraine", "from UAH 25,000"),
        row("Closing a sole proprietorship", "/en/close-sole-proprietorship-ukraine", "UAH 3,500", "3 days"),
      ] },
      { type: "prices", tone: "plain", title: "Tender support", items: [
        row("Capability assessment", "/en/tender-support-ukraine", "from UAH 3,000"),
        row("Bid preparation", "/en/tender-support-ukraine/bid-preparation", "from UAH 5,000"),
        row("Support for one procurement", "/en/tender-support-ukraine", "from UAH 8,000"),
        row("Ongoing support (subscription)", "/en/tender-support-ukraine", "from UAH 8,000/month"),
        row("Success fee", "/en/tender-support-ukraine", "5% of the contract value"),
        row("Documentation for contracting authorities", "/en/tender-support-ukraine/for-contracting-authorities", "from UAH 5,000"),
      ] },
      { type: "prices", title: "Licenses", items: [
        row("Alcohol", "/en/business-licenses-ukraine/alcohol", "UAH 12,000", "+ state fee"),
        row("Cider and perry", "/en/business-licenses-ukraine/alcohol", "UAH 9,000", "+ state fee"),
        row("Tobacco products", "/en/business-licenses-ukraine/tobacco", "UAH 10,000", "+ state fee"),
        row("License renewal", "/en/business-licenses-ukraine", "UAH 2,000", "per license"),
        row("Construction license CC2 and CC3", "/en/business-licenses-ukraine/construction", "UAH 15,000", "+ state fee"),
        row("Amendments to a construction license", "/en/business-licenses-ukraine/construction", "UAH 4,000"),
      ] },
      { type: "prices", tone: "plain", title: "Accounting", items: [
        row("Accounting for a sole proprietor", "/en/accounting-services-ukraine/sole-proprietor", "from UAH 2,500/month"),
        row("Accounting for an LLC", "/en/accounting-services-ukraine/llc", "from UAH 6,000/month"),
        row("Tax reporting", "/en/accounting-services-ukraine/tax-reporting", "from UAH 1,000"),
        row("CFC reporting", "/en/accounting-services-ukraine/cfc-reporting", "from UAH 2,000"),
        row("Cash register (RRO/PRRO) registration", "/en/accounting-services-ukraine/cash-registers", "from UAH 2,500"),
        row("Sole proprietor audit", "/en/accounting-services-ukraine/sole-proprietor-audit", "UAH 3,000"),
      ] },
      { type: "prices", title: "Other services", items: [
        row("Legal consultation", "/en/legal-consultation", "UAH 2,000/hour"),
        row("Contracts", "/en/contracts", "from UAH 2,000"),
        row("Trademark registration", "/en/trademark-registration-ukraine", "UAH 4,000", "+ official fees"),
        row("Food facility registration", "/en/food-facility-registration-ukraine", "UAH 2,000"),
        row("Attorney in court", "/en/litigation-attorney-ukraine", "from UAH 3,000"),
        row("Attorney consultation", "/en/attorney-consultation", "from UAH 1,000"),
        row("Notarization", "/en/notarization-kyiv", "from UAH 300"),
        row("Notary registration services", "/en/notary-registration-services", "from UAH 1,500"),
        row("Certified translation", "/en/certified-translation-ukraine", "from UAH 400"),
        row("Interpreter", "/en/interpreter-ukraine", "from UAH 500"),
        row("“Own Business” grants", "/en/business-grants-ukraine", "UAH 10,000"),
        row("Tax number for a foreigner", "/en/services-for-foreigners/tax-number", "UAH 2,000"),
        row("Temporary residence permit", "/en/services-for-foreigners/temporary-residence-permit", "UAH 10,000"),
        row("Work permit", "/en/services-for-foreigners/work-permit", "UAH 10,000"),
      ] },
    ],
    lead: { title: "We'll calculate the exact price for you" },
  },

  "en/contacts": {
    meta: {
      title: "Contacts — Weksar, Legal Services in Kyiv",
      description: "Phone, Telegram, WhatsApp and Viber. We work across Ukraine and meet clients in person in Kyiv and the Kyiv region.",
    },
    breadcrumbs: [{ name: "Contacts", href: "/en/contacts" }],
    cta: "EN: Contacts",
    hero: {
      title: "Contacts",
      lead: "Call us or message us in your preferred messenger. We work across Ukraine; in Kyiv and the Kyiv region we meet clients in person and accompany them to the notary.",
      facts: [exp, { value: "Kyiv", label: "in-person meetings" }, { value: "Ukraine", label: "most services" }],
    },
    sections: [{ type: "contacts" }],
    lead: { title: "Or leave a request" },
  },
};

export const enPrivacyPage = {
  path: "en/privacy-policy",
  locale: "en",
  meta: {
    title: "Privacy Policy | Weksar",
    description: "How Weksar processes personal data received via weksar.com: what data, for what purpose, how long it is kept and what rights you have.",
  },
  breadcrumbs: [{ name: "Privacy policy", href: "/en/privacy-policy" }],
  title: "Privacy Policy",
  updated: "22.11.2026",
  intro: "This Policy explains how personal data of users of weksar.com (the Website) is processed in accordance with the Law of Ukraine “On Personal Data Protection”. The Ukrainian version of this Policy prevails.",
  sections: [
    { title: "1. Data controller", paragraphs: ["Individual entrepreneur [[ПОТРЕБУЄ ДАНИХ: ПІБ і РНОКПП ФОП]], operating under the name “Weksar Partnership”.", "Contact for data requests: +38 096 198 79 61, email [[ПОТРЕБУЄ ДАНИХ: email]]."] },
    { title: "2. Data we receive", list: ["your name and phone number from the request form;", "the text of your question, if you leave one;", "technical data: the page the request was sent from, campaign tags (UTM), referring website;", "website usage data collected by Google Analytics and Google Tag Manager (cookies, device type, approximate location)."] },
    { title: "3. Purpose", list: ["to contact you and provide a consultation;", "to conclude and perform a service agreement;", "to evaluate the Website and advertising;", "to comply with the law."] },
    { title: "4. Who receives the data", paragraphs: ["Request data is passed to Telegram to be handled by our staff. Website usage data is processed by Google. Other recipients — only where required by law or with your consent."] },
    { title: "5. Retention", paragraphs: ["Request data is kept no longer than needed for the purpose: [[ПОТРЕБУЄ ДАНИХ: строк зберігання заявок]]. Google Analytics data — up to 14 months."] },
    { title: "6. Your rights", list: ["to know what data is processed, by whom and why;", "to request correction or deletion;", "to withdraw consent;", "to complain to the Ukrainian Parliament Commissioner for Human Rights or to court."] },
  ],
};
