// EN: LLC changes cluster, sole proprietor changes, accounting cluster.
import { FACTS_EN } from "@/lib/site";

const exp = { value: FACTS_EN.experience, label: "of experience" };
const CH = { name: "LLC changes", href: "/en/llc-changes-ukraine" };
const ACC = { name: "Accounting", href: "/en/accounting-services-ukraine" };

const CHANGES = [
  { slug: "change-of-director", title: "Change of Director of a Ukrainian LLC | Weksar", desc: "Change of director of a Ukrainian LLC: shareholders' decision, documents, registration, advice on bank and signature. From UAH 4,000.", name: "Change of director", text: "Dismissal and appointment, bank, signing rights.", serviceType: "Registration of a change of director",
    lead: "Dismissal of the previous director and appointment of a new one: shareholders' decision, documents, registration and advice on the bank, signature and accesses.",
    included: ["Shareholders' decision on dismissal and appointment", "Applications for the state registrar", "Registration and register extract", "Advice on the bank, electronic signature and tax accounts"],
    risks: ["Dismissal procedure under the charter", "Employment documents of the former director", "Signing rights in the bank", "The new director's powers in the charter"] },
  { slug: "change-of-shareholders", title: "Change of Shareholders of a Ukrainian LLC | Weksar", desc: "Shareholder exit or entry, sale or gift of a share in a Ukrainian LLC: agreements, notary, registration, beneficial owner. From UAH 4,000.", name: "Change of shareholders", text: "Exit, entry, sale or gift of a share.", serviceType: "Registration of a change of shareholders",
    lead: "A shareholder's exit, a new shareholder's entry, sale or gift of a share: we prepare agreements and decisions, accompany you to the notary and register the changes.",
    included: ["Share sale or gift agreement", "Shareholders' decision", "Notarization of signatures", "Registration and register extract", "Ultimate beneficial owner update"],
    risks: ["Pre-emptive rights of other shareholders", "Settlement with an exiting shareholder", "Tax consequences of a share sale", "Restrictions in the charter"] },
  { slug: "registered-address", title: "Change of LLC Registered Address in Ukraine | Weksar", desc: "New registered address of a Ukrainian LLC: decision, registration, advice on tax office, licenses and contracts. From UAH 4,000.", name: "Registered address", text: "New registered address and tax office.", serviceType: "Registration of a change of registered address",
    lead: "We register the new registered address of the LLC and explain the consequences: tax office, licenses, contracts and company documents.",
    included: ["Shareholders' decision", "Applications for the state registrar", "Registration and register extract", "Advice on tax office, licenses and counterparties"],
    risks: ["Change of the tax office", "Licenses and permits tied to the address", "Documents for the premises", "Updated details in contracts and invoices"] },
  { slug: "activity-codes", title: "Changing LLC Activity Codes (KVED) | Weksar", desc: "Adding and changing activity codes (KVED) of a Ukrainian LLC, main activity, single tax and license checks. From UAH 4,000.", name: "Activity codes (KVED)", text: "New activities, main activity code.", serviceType: "Registration of a change of activity codes",
    lead: "We choose codes for your actual activity, change the main code and register the changes — considering licenses, tenders and the tax system.",
    included: ["Choosing activity codes", "Changing the main activity", "Registration and register extract", "Check of single tax restrictions"],
    risks: ["Codes incompatible with the single tax", "Licensed activities", "Buyers' code requirements in tenders", "Consistency with the charter"] },
  { slug: "charter", title: "LLC Charter Amendments in Ukraine | Weksar", desc: "New charter or switch to the model charter for a Ukrainian LLC: review, shareholders' decision, registration. From UAH 4,000.", name: "Charter amendments", text: "New charter or the model charter.", serviceType: "Registration of charter amendments",
    lead: "We prepare a new version of the charter or switch the LLC to the model charter approved by the Cabinet of Ministers, and register the changes.",
    included: ["Review of the current charter", "New charter or switch to the model charter", "Shareholders' decision", "Registration"],
    risks: ["Provisions contradicting the LLC law", "Decision-making and quorum", "Shareholder exit and profit distribution", "Director's powers"] },
  { slug: "share-capital", title: "LLC Share Capital Increase or Decrease | Weksar", desc: "Increasing or decreasing the share capital of a Ukrainian LLC: decision, contributions, notice to creditors, registration. From UAH 4,000.", name: "Share capital", text: "Increase or decrease.", serviceType: "Registration of a change of share capital",
    lead: "We increase or decrease the share capital: shareholders' decision, contributions, notice to creditors, registration.",
    included: ["Shareholders' decision", "Documents on contributions", "Notice to creditors (on decrease)", "Registration"],
    risks: ["Deadlines for additional contributions", "Creditors' rights on decrease", "Tax consequences", "Changes in shareholders' stakes"] },
];

const STEPS = [
  { t: "Consultation", d: "What exactly changes and which other documents or notices it affects." },
  { t: "Documents", d: "Shareholders' decisions, applications, a new charter if needed." },
  { t: "Notary", d: "We accompany you to the notary when signatures must be notarized." },
  { t: "Registration", d: "We file with the state registrar and obtain the register extract." },
];

const ACC_SERVICES = [
  { slug: "sole-proprietor", title: "Accounting for a Sole Proprietor (FOP) | Weksar", desc: "Bookkeeping for a Ukrainian sole proprietor: income records, taxes, social contributions, tax returns, advice. From UAH 2,500 per month.", name: "Accounting for a sole proprietor", price: "from UAH 2,500/month", text: "Bookkeeping, tax returns, social contributions, advice.", lead: "We keep income records, calculate taxes and social contributions, file reports and watch the deadlines.",
    items: ["Income and expense records", "Taxes and social contributions", "Tax returns on time", "Income limit and activity code control", "Tax advice"] },
  { slug: "llc", title: "Accounting for an LLC in Ukraine | Weksar", desc: "Full accounting for a Ukrainian LLC: financial and tax records, reporting, payroll, VAT, tax authority. From UAH 6,000 per month.", name: "Accounting for an LLC", price: "from UAH 6,000/month", text: "Bookkeeping, reporting, payroll, VAT.", lead: "Full financial and tax accounting for an LLC: primary documents, reporting, payroll, VAT and correspondence with the tax authority.",
    items: ["Financial and tax accounting", "Tax, financial and payroll reporting", "Payroll", "VAT invoices and returns", "Correspondence with the tax authority"] },
  { slug: "tax-reporting", title: "Tax Reporting for FOPs and LLCs in Ukraine | Weksar", desc: "One-off or regular tax reporting for Ukrainian sole proprietors and LLCs: returns, payroll, VAT, financial statements. From UAH 1,000.", name: "Tax reporting", price: "from UAH 1,000", text: "One-off reports for sole proprietors and LLCs.", lead: "One-off or regular filing of reports for sole proprietors and LLCs, on time and checked before submission.",
    items: ["Sole proprietor tax return — UAH 2,000", "Social contribution report — UAH 1,000", "Combined payroll report — UAH 3,000", "VAT return — UAH 2,000", "LLC financial statements — UAH 4,000", "Nil reporting — UAH 1,000"] },
  { slug: "cfc-reporting", title: "CFC Reporting in Ukraine — from UAH 2,000 | Weksar", desc: "Controlled foreign company (CFC) notice and report under the Tax Code of Ukraine: partial or full reporting. From UAH 2,000.", name: "CFC reporting", price: "from UAH 2,000", text: "Notice and report on controlled foreign companies.", lead: "We prepare and file the notice on acquiring or losing control over a foreign company and the controlled foreign company (CFC) report under the Tax Code of Ukraine.",
    items: ["CFC notice — UAH 2,000", "Partial CFC reporting — UAH 4,000", "Full CFC reporting with financial statements and tax calculation — UAH 8,000"] },
  { slug: "cash-registers", title: "Cash Register (RRO/PRRO) Registration | Weksar", desc: "Registration of a cash register or software cash register (PRRO) in Ukraine, Nova Poshta integration. From UAH 2,500.", name: "Cash register registration", price: "from UAH 2,500", text: "RRO/PRRO registration, Nova Poshta integration.", lead: "We register a cash register or software cash register (PRRO), put it into operation and set up fiscalization, including cash on delivery via Nova Poshta.",
    items: ["RRO/PRRO registration — UAH 2,500", "With Nova Poshta integration — UAH 3,500"] },
  { slug: "sole-proprietor-audit", title: "Sole Proprietor (FOP) Tax Audit — UAH 3,000 | Weksar", desc: "Check of a Ukrainian sole proprietor's tax system, reporting, taxes and contributions before a tax audit. UAH 3,000.", name: "Sole proprietor audit", price: "UAH 3,000", text: "Check of records and taxes before a tax audit.", lead: "We check the tax position of a sole proprietor — tax system, reporting, taxes and contributions — and find errors before the tax office does.",
    items: ["Tax system check", "Reporting and deadlines", "Taxes and social contributions paid", "Overpayments and debts", "Activity codes vs. actual activity", "Recommendations"] },
];

export const enChangesAccountingPages = {
  "en/llc-changes-ukraine": {
    meta: {
      title: "Changes to a Ukrainian LLC — from UAH 4,000 | Weksar",
      description: "Change of director, shareholders, address, activity codes, charter, share capital and beneficial owner of a Ukrainian LLC. From UAH 4,000.",
    },
    breadcrumbs: [CH],
    cta: "EN: LLC changes",
    hero: { eyebrow: FACTS_EN.area, title: "Corporate Changes for Ukrainian LLCs", lead: "We prepare shareholders' decisions and documents, accompany you to the notary and register the changes in the Unified State Register.", facts: [{ value: "UAH 4,000", label: "price, from" }, { value: "in person", label: "notary support" }, exp] },
    sections: [
      { type: "cards", title: "Changes we register", columns: 3, items: CHANGES.map((c) => ({ name: c.name, text: c.text, price: "from UAH 4,000", href: `/en/llc-changes-ukraine/${c.slug}` })) },
      { type: "steps", title: "How it works", tone: "mist", items: STEPS },
    ],
    faq: [{ q: "Is a notary required?", a: "For some changes signatures must be notarized. We accompany you to the notary in person." }],
    lead: { title: "Tell us what needs to change" },
    schema: { name: "Changes to an LLC", serviceType: "Registration of changes to a legal entity", price: "4000" },
  },

  ...Object.fromEntries(
    CHANGES.map((c) => [
      `en/llc-changes-ukraine/${c.slug}`,
      {
        meta: { title: c.title, description: c.desc },
        breadcrumbs: [CH, { name: c.name, href: `/en/llc-changes-ukraine/${c.slug}` }],
        cta: `EN: ${c.name}`,
        hero: { eyebrow: FACTS_EN.area, title: c.name, lead: c.lead, facts: [{ value: "UAH 4,000", label: "price, from" }, { value: "in person", label: "notary support" }, exp] },
        sections: [
          { type: "split", left: { title: "What is included", items: c.included }, right: { title: "What to consider", items: c.risks, cta: "Discuss my case" } },
          { type: "steps", title: "How it works", tone: "mist", items: STEPS },
          { type: "related", items: CHANGES.filter((o) => o.slug !== c.slug).slice(0, 3).map((o) => ({ name: o.name, href: `/en/llc-changes-ukraine/${o.slug}`, price: "from UAH 4,000" })) },
        ],
        lead: { title: "Tell us what needs to change" },
        schema: { name: c.name, serviceType: c.serviceType, price: "4000" },
      },
    ])
  ),

  "en/sole-proprietor-changes-ukraine": {
    meta: { title: "Changes to a Sole Proprietor (FOP) — UAH 1,000 | Weksar", description: "Adding and changing activity codes, address and other details of a Ukrainian sole proprietor; switching single tax groups. UAH 1,000." },
    breadcrumbs: [{ name: "Sole proprietor changes", href: "/en/sole-proprietor-changes-ukraine" }],
    cta: "EN: FOP changes",
    hero: { eyebrow: FACTS_EN.area, title: "Changes to a Sole Proprietor (FOP)", lead: "We add and change activity codes, address and other details of a sole proprietor and help switch to another single tax group.", facts: [{ value: "UAH 1,000", label: "price" }, { value: "codes", label: "address, tax group" }, exp] },
    sections: [
      { type: "split", left: { title: "What is included", items: ["Choosing activity codes and checking group limits", "Application for register changes", "Single tax group change if needed", "Advice on reporting after the changes"] }, right: { title: "Mistakes we avoid", items: ["Codes not allowed for your group", "Missed deadlines for group changes", "Address change without considering the tax office"], cta: "Discuss my case" } },
      { type: "related", items: [{ name: "Sole proprietor registration", href: "/en/sole-proprietor-registration-ukraine", price: "UAH 1,000" }, { name: "Closing a sole proprietorship", href: "/en/close-sole-proprietorship-ukraine", price: "UAH 3,500" }, { name: "Accounting for a sole proprietor", href: "/en/accounting-services-ukraine/sole-proprietor", price: "from UAH 2,500/month" }] },
    ],
    lead: { title: "What needs to change?" },
    schema: { name: "Changes to a sole proprietor", serviceType: "Registration of changes to a sole proprietor", price: "1000" },
  },

  "en/accounting-services-ukraine": {
    meta: { title: "Accounting Services in Ukraine — from UAH 1,000 | Weksar", description: "Bookkeeping for sole proprietors and LLCs, tax reporting, CFC reporting, cash registers, sole proprietor audit in Kyiv. From UAH 1,000." },
    breadcrumbs: [ACC],
    cta: "EN: Accounting",
    hero: { eyebrow: FACTS_EN.area, title: "Accounting Services in Ukraine", lead: "Bookkeeping for sole proprietors and LLCs, tax reporting, cash registers, controlled foreign company reporting and audits.", facts: [{ value: "UAH 1,000", label: "price, from" }, { value: "FOP & LLC", label: "any tax system" }, exp] },
    sections: [{ type: "cards", title: "Services", columns: 3, items: ACC_SERVICES.map((s) => ({ name: s.name, text: s.text, price: s.price, href: `/en/accounting-services-ukraine/${s.slug}` })) }],
    lead: { title: "Tell us about your business" },
    schema: { name: "Accounting services", serviceType: "Accounting and tax reporting", price: "1000" },
  },

  ...Object.fromEntries(
    ACC_SERVICES.map((s) => [
      `en/accounting-services-ukraine/${s.slug}`,
      {
        meta: { title: s.title, description: s.desc },
        breadcrumbs: [ACC, { name: s.name, href: `/en/accounting-services-ukraine/${s.slug}` }],
        cta: `EN: ${s.name}`,
        hero: { eyebrow: FACTS_EN.area, title: s.name, lead: s.lead, facts: [{ value: s.price.replace("from ", "").replace("/month", ""), label: s.price.startsWith("from") ? (s.price.endsWith("/month") ? "per month, from" : "price, from") : "price" }, { value: "FOP & LLC", label: "any tax system" }, exp] },
        sections: [
          { type: "split", left: { title: "What is included", items: s.items }, right: { title: "Why it matters", items: ["Reports filed on time", "No missed limits or wrong codes", "Answers ready for the tax authority"], cta: "Discuss my case" } },
          { type: "related", items: ACC_SERVICES.filter((o) => o.slug !== s.slug).slice(0, 3).map((o) => ({ name: o.name, href: `/en/accounting-services-ukraine/${o.slug}`, price: o.price })) },
        ],
        lead: { title: "Tell us about your business" },
        schema: { name: s.name, serviceType: s.name, price: s.price.replace(/[^0-9]/g, "") },
      },
    ])
  ),
};
