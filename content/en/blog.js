// EN blog: translations of content/blog.js. `uk` = slug of the Ukrainian original (for hreflang and the language switch).
// Section format: { h2, p: [paragraphs], list: [items], steps: [{ t, d }] }.

export const EN_ARTICLES = [
  {
    slug: "how-to-liquidate-llc-ukraine",
    uk: "yak-likviduvaty-tov",
    title: "How to Liquidate an LLC in Ukraine: Step by Step",
    metaTitle: "How to Liquidate an LLC in Ukraine: Step by Step | Weksar",
    description: "Voluntary liquidation of a Ukrainian LLC: shareholders' decision, liquidation commission, creditors' claims, tax audit, balance sheet, termination record.",
    excerpt: "The stages of voluntary liquidation of a Ukrainian LLC, from the shareholders' decision to the record of termination: what the liquidation commission does, how long it takes and where mistakes happen.",
    date: "2026-11-22",
    topic: "Liquidation",
    service: { name: "Turnkey LLC liquidation", href: "/en/llc-liquidation-ukraine", price: "from UAH 20,000" },
    sections: [
      {
        p: [
          "Voluntary liquidation is the procedure after which a Ukrainian limited liability company (TOV) ceases to exist and a record of termination appears in the Unified State Register. It takes longer than other methods, but it closes the company for good.",
          "Below are the stages in the order they happen in practice.",
        ],
      },
      {
        h2: "1. Shareholders' decision",
        p: [
          "The general meeting of shareholders decides to liquidate the company. The decision appoints a liquidation commission or a liquidator and sets the procedure and deadline for creditors' claims.",
          "Check the charter first: what quorum is required, who signs the decision and whether signatures must be notarized.",
        ],
      },
      {
        h2: "2. Notice to the state registrar",
        p: [
          "The decision is filed with the state registrar, and the register shows that the company is being terminated. The tax authority and state funds are notified automatically, and the notice becomes public — from this moment creditors can file their claims.",
        ],
      },
      {
        h2: "3. Creditors' claims — at least 2 months",
        p: [
          "The Civil Code of Ukraine gives creditors at least 2 months to file claims from the publication of the liquidation notice. This period cannot be shortened, which is why voluntary liquidation is never faster.",
          "During this time the commission identifies the company's creditors and debtors, notifies creditors in writing, collects receivables and takes an inventory of assets.",
        ],
      },
      {
        h2: "4. Tax audit and settlements",
        p: [
          "During liquidation the tax authority usually carries out a documentary audit of the company. Its results are the most common cause of delays: additional taxes and penalties must be paid before liquidation is completed.",
          "In parallel, bank accounts are closed, creditors are paid in the order set by law, and employees are dismissed in line with labour law — notice of dismissal due to liquidation must be given at least 2 months in advance.",
        ],
      },
      {
        h2: "5. Liquidation balance sheet and archive",
        p: [
          "After the settlements the commission prepares the liquidation balance sheet, which the shareholders approve. Documents that must be kept long-term by law (in particular, personnel records) are transferred to an archive — the archive's certificate is needed to register the termination.",
        ],
      },
      {
        h2: "6. Record of termination",
        p: [
          "The head of the commission files the documents with the state registrar. The registrar checks that there are no obstacles (in particular, information about tax debts) and records the termination of the legal entity. The company is liquidated.",
        ],
      },
      {
        h2: "How long it takes",
        p: [
          "At least 2 months for creditors' claims. In practice, with the tax audit and settlements, voluntary liquidation takes about 2.5 months if the company has no debts or disputes.",
        ],
      },
      {
        h2: "Common mistakes",
        list: [
          "Not planning for the tax audit, whose results drag out the procedure",
          "Forgetting about employees and notice periods",
          "Not closing bank accounts or not transferring documents to the archive",
          "Choosing voluntary liquidation when the company has debts it cannot pay — a different procedure is needed then",
        ],
      },
      {
        h2: "If there is no time",
        p: [
          "When you need to exit a company quickly, consider the so-called alternative liquidation — a change of owner and director. It takes from 2 days but has its own risks. If the company has debts, an analysis comes first: sometimes the right procedure is bankruptcy.",
        ],
      },
    ],
    related: ["alternative-llc-liquidation-risks"],
  },

  {
    slug: "alternative-llc-liquidation-risks",
    uk: "alternatyvna-likvidatsiia-ryzyky",
    title: "“Alternative Liquidation” of an LLC: What It Is and the Risks",
    metaTitle: "Alternative LLC Liquidation in Ukraine: Risks | Weksar",
    description: "“Alternative liquidation” of a Ukrainian LLC via a change of owner and director: how it works, how long it takes and what risks remain for former owners.",
    excerpt: "“Alternative liquidation” is not a separate procedure but a change of owner and director. We explain how it works, why it is fast and what former shareholders may still be liable for after the sale.",
    date: "2026-11-22",
    topic: "Liquidation",
    service: { name: "LLC exit via change of owner", href: "/en/llc-liquidation-ukraine/change-of-owner", price: "from UAH 20,000" },
    sections: [
      {
        p: [
          "Ukrainian law has no such term as “alternative liquidation”. It is a common name for a situation where shareholders do not terminate the company but hand it over to someone else: they transfer their shares in the share capital and change the director. For the former owners the company is “closed”, but legally it continues to exist.",
        ],
      },
      {
        h2: "How it works",
        steps: [
          { t: "Company check", d: "Reporting, tax liabilities, accounts, contracts, court and enforcement proceedings." },
          { t: "Share transfer documents", d: "A share sale or gift agreement, a shareholders' decision and a transfer certificate. Signatures are notarized." },
          { t: "Change of director", d: "The new owner decides to dismiss the previous director and appoint a new one." },
          { t: "Registration of changes", d: "The state registrar enters the new shareholders, the ultimate beneficial owner and the director in the register." },
        ],
      },
      {
        h2: "Why it is fast",
        p: [
          "There is no 2-month wait for creditors' claims, no liquidation tax audit and no liquidation balance sheet. Only the change of shareholders and director is registered, so the procedure takes from 2 days.",
        ],
      },
      {
        h2: "Risks you should know about",
        p: ["The key point: a change of owner does not cancel liability for what happened before it."],
        list: [
          "The tax authority may audit the periods when the company was run by the previous owners and director",
          "If the company is later declared bankrupt, the law allows subsidiary liability of founders and managers found guilty of bringing it to bankruptcy",
          "Transferring a company to nominee persons to hide violations may constitute a criminal offence",
          "The new owner may use the company in a way that harms the former shareholders' reputation",
        ],
      },
      {
        h2: "When this method makes sense",
        list: [
          "The company has no hidden debts or problematic reporting",
          "There is a real buyer who needs this particular company",
          "Voluntary liquidation with a tax audit would take too long",
        ],
        p: ["If the company has debts or a questionable history, it is safer to choose voluntary liquidation or bankruptcy, even if it takes longer."],
      },
    ],
    related: ["how-to-liquidate-llc-ukraine"],
  },

  {
    slug: "how-to-bid-prozorro",
    uk: "yak-vziaty-uchast-u-tenderi",
    title: "How to Bid in a Prozorro Tender: A Step-by-Step Guide",
    metaTitle: "How to Bid in a Prozorro Tender: Step by Step | Weksar",
    description: "A step-by-step guide for companies new to public procurement in Ukraine: electronic signature, platform, finding tenders, documents, the bid, the contract.",
    excerpt: "What you need to submit your first tender bid in Prozorro: from assessing your capabilities and getting an electronic signature to the auction, winning and the procurement contract.",
    date: "2026-11-22",
    topic: "Tenders",
    service: { name: "Turnkey tender support", href: "/en/tender-support-ukraine", price: "from UAH 3,000" },
    sections: [
      {
        p: [
          "State and municipal buyers in Ukraine purchase goods, works and services through the Prozorro e-procurement system. Both LLCs and sole proprietors can take part, with no special licenses unless the subject of the procurement requires them.",
          "Here is the path from “let's try tenders” to a signed contract.",
        ],
      },
      {
        h2: "Step by step",
        steps: [
          { t: "Assess your capabilities", d: "Buyers set qualification criteria: equipment, staff, experience of a similar contract, financial capacity. Make sure you can prove them with documents." },
          { t: "Get a qualified electronic signature", d: "The bid is signed with a qualified electronic signature (KEP) of the director or an authorised person." },
          { t: "Register on a platform", d: "Bidders work through authorised e-platforms connected to Prozorro. The platform charges a fee for submitting a bid." },
          { t: "Find procurements", d: "Search by Common Procurement Vocabulary codes (DK 021:2015), region and buyer. Start with procurements where your chances are real." },
          { t: "Study the tender documents", d: "Bidder requirements, technical specification, draft contract, deadlines. Unclear requirements can be clarified by asking the buyer through the system." },
          { t: "Prepare the bid", d: "Qualification documents, the technical part and the price offer; if required, bid security (usually a bank guarantee)." },
          { t: "Submit before the deadline", d: "The system will not accept a bid after the deadline. If there are several bidders, an electronic auction is held where prices can be lowered." },
          { t: "Evaluation and contract", d: "The buyer checks the bid of the best bidder. If it finds discrepancies, the law gives 24 hours to correct them. The winner signs the procurement contract." },
        ],
      },
      {
        h2: "What it costs",
        p: [
          "The main costs are the electronic signature, the platform fee for submitting a bid, bid security (if the buyer requires it) and the time to prepare documents. After winning, the buyer may require a performance guarantee.",
        ],
      },
      {
        h2: "Where to start without experience",
        list: [
          "Start with small procurements in your niche — this builds experience of similar contracts",
          "Prepare a basic document package in advance so you do not have to collect it every time",
          "Read the draft contract before bidding: deadlines, penalties, payment terms",
          "Do not bid blindly — rejections for formal errors are common",
        ],
      },
    ],
    related: ["why-tender-bids-are-rejected"],
  },

  {
    slug: "why-tender-bids-are-rejected",
    uk: "chomu-vidkhyliaiut-tenderni-propozytsii",
    title: "Why Tender Bids Are Rejected and How to Avoid It",
    metaTitle: "Why Tender Bids Are Rejected in Prozorro | Weksar",
    description: "Why bids are rejected in Prozorro: qualification criteria, documents, technical specification, electronic signature, bid security. How to avoid it.",
    excerpt: "Tenders are often lost not on price but on formal errors. We look at the typical reasons bids are rejected and how to prepare so that they do not happen.",
    date: "2026-11-22",
    topic: "Tenders",
    service: { name: "Tender bid preparation", href: "/en/tender-support-ukraine/bid-preparation", price: "from UAH 5,000" },
    sections: [
      {
        p: [
          "A buyer must reject a bid that does not meet the requirements of the tender documents. For companies just entering public procurement this hurts most: the price was the best, but the contract went to someone else.",
        ],
      },
      {
        h2: "The most common reasons",
        steps: [
          { t: "Qualification criteria not met", d: "No proof of a similar contract, the required staff or equipment. How to avoid: read the criteria before deciding to bid and collect the evidence in advance." },
          { t: "A missing or incorrect document", d: "A certificate in the wrong form, unsigned, expired or with the wrong content. How to avoid: keep a register of requirements and check every document against it." },
          { t: "Technical specification", d: "The offered goods or services do not meet the buyer's technical requirements, or compliance is not proven. How to avoid: answer every item of the specification separately." },
          { t: "Electronic signature", d: "The bid is not signed, signed by the wrong person or with the wrong type of signature. How to avoid: check the signature and the signatory's authority before submitting." },
          { t: "Bid security", d: "A guarantee for the wrong amount, with a different validity period or terms that do not match the documents. How to avoid: agree the guarantee text with the bank according to the buyer's requirements." },
          { t: "Abnormally low price without justification", d: "If the price is found abnormally low, the bidder must justify it within the set deadline. How to avoid: have a price calculation ready in advance." },
        ],
      },
      {
        h2: "24 hours to correct",
        p: [
          "If the buyer finds discrepancies in the documents, the law gives the bidder 24 hours to correct them. But not everything can be corrected: the substance of the bid, the price or the technical characteristics cannot be changed. So do not rely on this mechanism instead of careful preparation.",
        ],
      },
      {
        h2: "Checklist before submitting",
        list: [
          "Every requirement of the documents is listed in a register and covered by a document",
          "Every item of the technical specification has an answer",
          "The electronic signature is applied by an authorised person",
          "The bid security matches the requirements for amount, validity and wording",
          "The price is calculated and justified",
          "The draft contract has been read and is acceptable",
        ],
      },
    ],
    related: ["how-to-bid-prozorro"],
  },
];

export const EN_ARTICLE_BY_SLUG = Object.fromEntries(EN_ARTICLES.map((a) => [a.slug, a]));
