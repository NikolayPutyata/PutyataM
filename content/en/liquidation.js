// EN: liquidation subpages, reorganization, closing a sole proprietorship, sole proprietor registration.
import { FACTS_EN } from "@/lib/site";

const ALL_INCLUSIVE = "The quoted price covers everything: notary, state fees and documents. No extra payments.";
const exp = { value: FACTS_EN.experience, label: "of experience" };
const LIQ = { name: "LLC liquidation", href: "/en/llc-liquidation-ukraine" };

const REL = {
  liq: { name: "LLC liquidation", href: "/en/llc-liquidation-ukraine", price: "from UAH 20,000" },
  owner: { name: "Change of owner", href: "/en/llc-liquidation-ukraine/change-of-owner", price: "from UAH 20,000" },
  debts: { name: "Liquidation with debts", href: "/en/llc-liquidation-ukraine/with-debts-bankruptcy", price: "from UAH 25,000" },
  reorg: { name: "LLC reorganization", href: "/en/llc-reorganization-ukraine", price: "from UAH 25,000" },
  fop: { name: "Closing a sole proprietorship", href: "/en/close-sole-proprietorship-ukraine", price: "UAH 3,500" },
  shareholders: { name: "Change of shareholders", href: "/en/llc-changes-ukraine/change-of-shareholders", price: "from UAH 4,000" },
  regTov: { name: "LLC registration", href: "/en/company-registration-ukraine", price: "from UAH 2,500" },
  acc: { name: "Accounting for a sole proprietor", href: "/en/accounting-services-ukraine/sole-proprietor", price: "from UAH 2,500/month" },
};

export const enLiquidationPages = {
  "en/llc-liquidation-ukraine/change-of-owner": {
    meta: {
      title: "LLC Exit via Change of Owner — from 2 Days | Weksar",
      description: "The fastest way out of a Ukrainian LLC: transfer of shares and a new director, from 2 days. We check the company and explain the risks first.",
    },
    breadcrumbs: [LIQ, { name: "Change of owner", href: "/en/llc-liquidation-ukraine/change-of-owner" }],
    cta: "EN: Change of owner",
    hero: {
      title: "“Alternative liquidation” through a change of owner",
      lead: "The fastest way to leave a company: your shares pass to a new owner, a new director is appointed and the changes are registered. From 2 days.",
      facts: [{ value: "UAH 20,000", label: "price, from" }, { value: "from 2 days", label: "timeline" }, { value: "turnkey", label: "no extras" }],
    },
    sections: [
      {
        type: "prose",
        title: "What it is legally",
        paragraphs: [
          "“Alternative liquidation” is not a procedure in Ukrainian law. It is a common name for a change of shareholders and director: the shares are transferred under an agreement with notarized signatures, the new owner appoints a director, and the changes are entered in the Unified State Register.",
          "The company is not terminated — it continues to exist with a new owner. This suits you when you need to exit the business quickly rather than remove the company from the register.",
        ],
      },
      {
        type: "split",
        left: { title: "When it fits", items: ["You need to exit quickly", "There is a buyer for the company", "Voluntary liquidation with a tax audit would take too long"], note: ALL_INCLUSIVE },
        right: { title: "Risks we are honest about", intro: "A change of owner does not release former shareholders and the director from liability for what happened before it. So we:", items: ["check the company before the deal", "do not take deals meant to hide violations", "suggest another method if the risks are high"], cta: "Assess my case" },
      },
      { type: "related", items: [REL.debts, REL.shareholders, REL.reorg] },
    ],
    faq: [{ q: "Why is it faster than liquidation?", a: "The company is not terminated, so there is no 2-month creditor period and no liquidation tax audit — only the change of owner and director is registered." }],
    lead: { title: "Tell us about your company" },
    schema: { name: "LLC change of owner", serviceType: "Change of shareholders and director", price: "20000" },
  },

  "en/llc-liquidation-ukraine/with-debts-bankruptcy": {
    meta: {
      title: "LLC Liquidation with Debts and Bankruptcy | Weksar",
      description: "Closing a Ukrainian LLC with debts to the tax authority, banks or counterparties: analysis, choosing the procedure, bankruptcy support.",
    },
    breadcrumbs: [LIQ, { name: "With debts and bankruptcy", href: "/en/llc-liquidation-ukraine/with-debts-bankruptcy" }],
    cta: "EN: Liquidation with debts",
    hero: {
      title: "LLC Liquidation with Debts and Bankruptcy",
      lead: "Debts do not make closing a company impossible, but they change the procedure. We analyse whom and how much the company owes and choose a lawful way — from repayment to bankruptcy.",
      facts: [{ value: "UAH 25,000", label: "price, from" }, { value: "from 2 days", label: "to 2.5 months" }, { value: "turnkey", label: "no extras" }],
    },
    sections: [
      {
        type: "cards",
        title: "Possible solutions",
        columns: 3,
        items: [
          { name: "Repayment and voluntary liquidation", text: "If assets are sufficient, debts are repaid during liquidation." },
          { name: "Change of owner", text: "Shares and the director's position pass to another person — only after assessing liability risks." },
          { name: "Bankruptcy", text: "A procedure under the Bankruptcy Procedures Code when the company cannot pay its creditors." },
        ],
      },
      {
        type: "split",
        left: { title: "What is included", items: ["Analysis of debts, assets and documents", "Choice of procedure with consequences explained", "All documents prepared", "Accompanying you to the notary and state bodies"], note: ALL_INCLUSIVE },
        right: { title: "Liability of founders and directors", intro: "The law provides cases where founders and managers are personally liable, in particular for bringing a company to bankruptcy. So we:", items: ["assess the risks before starting", "choose a lawful procedure, not a “scheme”", "explain which obligations remain"], cta: "Assess my case" },
      },
      { type: "related", items: [REL.owner, REL.reorg, REL.fop] },
    ],
    faq: [{ q: "How much does it cost?", a: "From UAH 25,000; the exact price after analysis covers everything." }],
    lead: { title: "Tell us about the company's debts" },
    schema: { name: "LLC liquidation with debts", serviceType: "Liquidation and bankruptcy of a legal entity", price: "25000" },
  },

  "en/llc-reorganization-ukraine": {
    meta: {
      title: "LLC Reorganization in Ukraine: Merger, Accession | Weksar",
      description: "Reorganization of a Ukrainian LLC by accession, merger, division, spin-off or transformation: decisions, transfer act, registration. From UAH 25,000.",
    },
    breadcrumbs: [LIQ, { name: "Reorganization", href: "/en/llc-reorganization-ukraine" }],
    cta: "EN: Reorganization",
    hero: {
      title: "LLC Reorganization",
      lead: "Accession, merger, division, spin-off or transformation. We prepare the decisions and the transfer act and see the procedure through to registration.",
      facts: [{ value: "UAH 25,000", label: "price, from" }, { value: "2.5 months", label: "timeline" }, { value: "turnkey", label: "no extras" }],
    },
    sections: [
      {
        type: "cards",
        title: "Types of reorganization",
        columns: 3,
        items: [
          { name: "Accession", text: "The LLC joins another company and is terminated; the receiving company becomes the successor." },
          { name: "Merger", text: "Two or more companies are terminated and a new one is formed." },
          { name: "Division", text: "The company is terminated and its rights and obligations are split among new companies." },
          { name: "Spin-off", text: "A new company is separated out; the original one continues to operate." },
          { name: "Transformation", text: "A change of legal form, for example from an LLC to a joint-stock company." },
        ],
      },
      {
        type: "prose",
        tone: "mist",
        title: "When it is better than liquidation",
        paragraphs: ["If owners have several companies and one is no longer needed, it is often simpler to merge it into another: contracts, assets and obligations pass to the successor without interrupting the business."],
      },
      { type: "related", items: [REL.liq, REL.debts, REL.shareholders] },
    ],
    faq: [{ q: "How long does it take?", a: "About 2.5 months: creditors have at least 2 months to file claims." }],
    lead: { title: "Tell us about your companies" },
    schema: { name: "LLC reorganization", serviceType: "Reorganization of a legal entity", price: "25000" },
  },

  "en/close-sole-proprietorship-ukraine": {
    meta: {
      title: "Closing a Sole Proprietorship (FOP) — UAH 3,500 | Weksar",
      description: "Closing a Ukrainian sole proprietorship (FOP) turnkey in 3 days: termination in the register, final reporting, reconciliation with the tax office.",
    },
    breadcrumbs: [{ name: "Closing a sole proprietorship", href: "/en/close-sole-proprietorship-ukraine" }],
    cta: "EN: Closing FOP",
    hero: {
      title: "Closing a Sole Proprietorship (FOP)",
      lead: "We terminate the business activity of a Ukrainian sole proprietor turnkey: application, final reporting, reconciliation with the tax office. For all single tax groups and the general system.",
      facts: [{ value: "UAH 3,500", label: "price" }, { value: "3 days", label: "timeline" }, exp],
    },
    sections: [
      {
        type: "split",
        left: { title: "What is included", items: ["Application for termination of business activity", "Final reporting", "Reconciliation with the tax office", "Advice on bank accounts and cash registers", "Control until the termination record"] },
        right: { title: "When it is more complicated", items: ["Tax or social contribution debts", "Employees", "VAT registration", "Registered cash registers (RRO/PRRO)"], cta: "Discuss my case" },
      },
      { type: "related", items: [REL.liq, REL.acc, { name: "Sole proprietor registration", href: "/en/sole-proprietor-registration-ukraine", price: "UAH 1,000" }] },
    ],
    faq: [{ q: "Can I close a sole proprietorship with debts?", a: "Yes, but the debts remain: the individual is liable for business obligations with personal property. We will explain how to settle them." }],
    lead: { title: "We will close your sole proprietorship in 3 days" },
    schema: { name: "Closing a sole proprietorship", serviceType: "Termination of a sole proprietor's business activity", price: "3500" },
  },

  "en/sole-proprietor-registration-ukraine": {
    meta: {
      title: "Sole Proprietor (FOP) Registration — UAH 1,000 | Weksar",
      description: "Registering a Ukrainian sole proprietor (FOP) turnkey: activity codes, single tax group, registration and advice on reporting. UAH 1,000.",
    },
    breadcrumbs: [{ name: "Sole proprietor registration", href: "/en/sole-proprietor-registration-ukraine" }],
    cta: "EN: FOP registration",
    hero: {
      title: "Sole Proprietor (FOP) Registration",
      lead: "We register a Ukrainian sole proprietor turnkey: activity codes, single tax group, registration and an explanation of upcoming reports and payments.",
      facts: [{ value: "UAH 1,000", label: "price" }, { value: "groups 1–3", label: "or general system" }, exp],
    },
    sections: [
      {
        type: "cards",
        title: "Single tax groups",
        columns: 3,
        items: [
          { name: "Group 1", text: "Retail at markets and household services to individuals, no employees." },
          { name: "Group 2", text: "Services and sales to individuals and single tax payers, restaurants." },
          { name: "Group 3", text: "Almost any permitted activity, including work with companies." },
        ],
      },
      { type: "related", items: [REL.regTov, REL.acc, REL.fop] },
    ],
    faq: [{ q: "Can a foreigner register as a sole proprietor?", a: "Foreigners with the right to reside in Ukraine can; we will check your status and documents." }],
    lead: { title: "We will register your sole proprietorship" },
    schema: { name: "Sole proprietor registration", serviceType: "State registration of a sole proprietor", price: "1000" },
  },
};
