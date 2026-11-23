// EN: tender subpages and license subpages.
import { FACTS_EN } from "@/lib/site";

const exp = { value: FACTS_EN.experience, label: "of experience" };
const TENDER = { name: "Tender support", href: "/en/tender-support-ukraine" };
const LIC = { name: "Licenses", href: "/en/business-licenses-ukraine" };
const STATE_FEE = "The state license fee is paid separately at the current rates — we will tell you the exact amount for your case.";

const R = {
  tender: { name: "Tender support", href: "/en/tender-support-ukraine", price: "from UAH 3,000" },
  bid: { name: "Bid preparation", href: "/en/tender-support-ukraine/bid-preparation", price: "from UAH 5,000" },
  buyers: { name: "For contracting authorities", href: "/en/tender-support-ukraine/for-contracting-authorities", price: "from UAH 5,000" },
  contracts: { name: "Contracts", href: "/en/contracts", price: "from UAH 2,000" },
  alcohol: { name: "Alcohol license", href: "/en/business-licenses-ukraine/alcohol", price: "UAH 12,000 + state fee" },
  tobacco: { name: "Tobacco license", href: "/en/business-licenses-ukraine/tobacco", price: "UAH 10,000 + state fee" },
  construction: { name: "Construction license", href: "/en/business-licenses-ukraine/construction", price: "UAH 15,000 + state fee" },
  regTov: { name: "LLC registration", href: "/en/company-registration-ukraine", price: "from UAH 2,500" },
  rro: { name: "Cash register registration", href: "/en/accounting-services-ukraine/cash-registers", price: "from UAH 2,500" },
};

const RETAIL_STEPS = [
  { t: "Consultation", d: "We check activity codes, the point of sale, the cash register and documents." },
  { t: "Documents", d: "We prepare the application and the document package for the tax authority." },
  { t: "Filing", d: "We file the documents and monitor the review." },
  { t: "License", d: "You get the license; we also handle renewals and amendments." },
];

export const enTenderLicensePages = {
  "en/tender-support-ukraine/bid-preparation": {
    meta: {
      title: "Tender Bid Preparation in Prozorro | Weksar",
      description: "Preparing and submitting a tender bid in Prozorro: analysis of tender documents, qualification documents, error check. From UAH 5,000.",
    },
    breadcrumbs: [TENDER, { name: "Bid preparation", href: "/en/tender-support-ukraine/bid-preparation" }],
    cta: "EN: Bid preparation",
    hero: {
      eyebrow: "Public procurement · all of Ukraine",
      title: "Tender Bid Preparation",
      lead: "We prepare and submit your bid so that it is not rejected for formal errors: document analysis, qualification documents, technical part, signatures, submission.",
      facts: [{ value: "UAH 5,000", label: "price, from" }, { value: "Prozorro", label: "e-procurement" }, exp],
    },
    sections: [
      {
        type: "steps",
        title: "What we do",
        items: [
          { t: "Document analysis", d: "Tender documents, qualification criteria and technical specification; we flag the risks." },
          { t: "Documents", d: "Qualification documents, certificates, technical part." },
          { t: "Check", d: "We verify the bid against the buyer's requirements, the electronic signature and the bid security." },
          { t: "Submission", d: "We submit via an authorized platform and follow the procedure." },
        ],
      },
      { type: "related", items: [R.tender, R.buyers, R.contracts] },
    ],
    faq: [{ q: "How much does bid preparation cost?", a: "From UAH 5,000, depending on the procedure and the volume of documents." }],
    lead: { title: "Send us a link to the tender" },
    schema: { name: "Tender bid preparation", serviceType: "Preparation of a tender bid", area: "ukraine", price: "5000" },
  },

  "en/tender-support-ukraine/for-contracting-authorities": {
    meta: {
      title: "Procurement Support for Contracting Authorities | Weksar",
      description: "Tender documentation and procurement support for contracting authorities in Ukraine: notice, answers to bidders, evaluation, contract.",
    },
    breadcrumbs: [TENDER, { name: "For contracting authorities", href: "/en/tender-support-ukraine/for-contracting-authorities" }],
    cta: "EN: For contracting authorities",
    hero: {
      eyebrow: "Public procurement · all of Ukraine",
      title: "Procurement Support for Contracting Authorities",
      lead: "We prepare tender documentation and support procurements on the buyer's side so that the procedure complies with the law.",
      facts: [{ value: "UAH 5,000", label: "documentation, from" }, { value: "UAH 8,000", label: "support, from" }, exp],
    },
    sections: [
      {
        type: "prices",
        title: "Services and prices",
        items: [
          { name: "Tender documentation for a simplified procurement", price: "from UAH 5,000" },
          { name: "Tender documentation for open tenders", price: "from UAH 8,000" },
          { name: "Procurement procedure support", text: "From the notice to the contract", price: "from UAH 8,000" },
        ],
      },
      { type: "related", items: [R.tender, R.bid, R.contracts] },
    ],
    lead: { title: "Tell us about your procurement" },
    schema: { name: "Procurement support for contracting authorities", serviceType: "Tender documentation and procurement support", area: "ukraine", price: "5000" },
  },

  "en/business-licenses-ukraine/alcohol": {
    meta: {
      title: "Alcohol License in Ukraine for FOPs and LLCs | Weksar",
      description: "Retail alcohol license for sole proprietors and LLCs in Ukraine: UAH 12,000 + state fee; cider and perry — UAH 9,000 + state fee. Renewal UAH 2,000.",
    },
    breadcrumbs: [LIC, { name: "Alcohol", href: "/en/business-licenses-ukraine/alcohol" }],
    cta: "EN: Alcohol license",
    hero: {
      title: "Retail Alcohol License",
      lead: "For shops, cafes and restaurants — sole proprietors and LLCs. We check activity codes, the cash register and the point of sale, prepare documents and obtain the license.",
      facts: [{ value: "UAH 12,000", label: "+ state fee" }, { value: "UAH 9,000", label: "cider and perry" }, { value: "UAH 2,000", label: "renewal" }],
    },
    sections: [
      {
        type: "prices",
        title: "Prices",
        intro: STATE_FEE,
        items: [
          { name: "Retail sale of alcoholic beverages", price: "UAH 12,000" },
          { name: "Retail sale of cider and perry", price: "UAH 9,000" },
          { name: "License renewal", text: "Per license", price: "UAH 2,000" },
        ],
      },
      { type: "steps", title: "How it works", tone: "plain", items: RETAIL_STEPS },
      { type: "related", items: [R.tobacco, R.rro, R.regTov] },
    ],
    lead: { title: "Tell us about your shop or venue" },
    schema: { name: "Retail alcohol license", serviceType: "Obtaining a license", price: "12000" },
  },

  "en/business-licenses-ukraine/tobacco": {
    meta: {
      title: "Tobacco License in Ukraine for FOPs and LLCs | Weksar",
      description: "Retail tobacco license in Ukraine: documents, cash register, filing with the tax authority. UAH 10,000 + state fee; renewal UAH 2,000.",
    },
    breadcrumbs: [LIC, { name: "Tobacco", href: "/en/business-licenses-ukraine/tobacco" }],
    cta: "EN: Tobacco license",
    hero: {
      title: "Retail Tobacco License",
      lead: "For shops and kiosks — sole proprietors and LLCs. We check activity codes, the cash register and the point of sale, prepare documents and obtain the license.",
      facts: [{ value: "UAH 10,000", label: "+ state fee" }, { value: "UAH 2,000", label: "renewal" }, exp],
    },
    sections: [
      {
        type: "prices",
        title: "Prices",
        intro: STATE_FEE,
        items: [
          { name: "Retail sale of tobacco products", price: "UAH 10,000" },
          { name: "License renewal", text: "Per license", price: "UAH 2,000" },
        ],
      },
      { type: "steps", title: "How it works", tone: "plain", items: RETAIL_STEPS },
      { type: "related", items: [R.alcohol, R.rro, R.regTov] },
    ],
    lead: { title: "Tell us about your point of sale" },
    schema: { name: "Retail tobacco license", serviceType: "Obtaining a license", price: "10000" },
  },

  "en/business-licenses-ukraine/construction": {
    meta: {
      title: "Construction License CC2 and CC3 in Ukraine | Weksar",
      description: "Construction license for CC2 and CC3 consequence class objects: documents, staff requirements, filing, amendments. UAH 15,000 + state fee.",
    },
    breadcrumbs: [LIC, { name: "Construction", href: "/en/business-licenses-ukraine/construction" }],
    cta: "EN: Construction license",
    hero: {
      title: "Construction License (CC2, CC3)",
      lead: "We obtain construction licenses for medium (CC2) and significant (CC3) consequence class objects and amend existing licenses — for example, to add types of work.",
      facts: [{ value: "UAH 15,000", label: "+ state fee" }, { value: "UAH 4,000", label: "amendments" }, exp],
    },
    sections: [
      {
        type: "prices",
        title: "Services",
        intro: STATE_FEE,
        items: [
          { name: "Obtaining a CC2/CC3 license", price: "UAH 15,000" },
          { name: "Amendments to a license", text: "New types of work, data changes — per license", price: "UAH 4,000" },
        ],
      },
      {
        type: "split",
        left: { title: "What is included", items: ["Advice on the consequence class and types of work", "Check against licensing conditions: staff, equipment, documents", "Preparing and filing documents", "Support until the license is issued"] },
        right: { title: "What we check first", items: ["Staff qualifications and experience", "Equipment and facilities", "Documents proving compliance with licensing conditions"], cta: "Check my company" },
      },
      { type: "related", items: [R.regTov, R.tender, R.alcohol] },
    ],
    lead: { title: "Tell us about your construction company" },
    schema: { name: "Construction license", serviceType: "Obtaining a construction license", price: "15000" },
  },
};
