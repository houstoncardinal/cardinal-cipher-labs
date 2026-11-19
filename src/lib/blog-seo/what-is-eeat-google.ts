// What Google's E-E-A-T means, whether it affects rankings, and how to show it on a real business website.
import type { BlogArticle } from "../blog-data";

const SRC = {
  helpful: { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  sqrg: { label: "Google — Search Quality Rater Guidelines (version of September 11, 2025)", url: "https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf" },
  experience: { label: "Google Search Central Blog — Our latest update to the quality rater guidelines: E-A-T gets an extra E for Experience (2022)", url: "https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t" },
  aiContent: { label: "Google Search Central Blog — Google Search's guidance about AI-generated content (2023)", url: "https://developers.google.com/search/blog/2023/02/google-search-and-ai-content" },
  local: { label: "Google Business Profile Help — Tips to improve your local ranking on Google", url: "https://support.google.com/business/answer/7091" },
  pageExperience: { label: "Google Search Central — Understanding page experience in Google Search results", url: "https://developers.google.com/search/docs/appearance/page-experience" },
  articleData: { label: "Google Search Central — Article structured data: author markup best practices", url: "https://developers.google.com/search/docs/appearance/structured-data/article" },
};

const article: BlogArticle = {
  slug: "what-is-eeat-google",
  title: "What Is E-E-A-T? Google Can't Meet You, So Your Website Has to Vouch for You",
  seoTitle: "What Is E-E-A-T? Google's Trust Framework Explained",
  excerpt: "E-E-A-T is how Google describes content it wants to rank: made with real experience and expertise, by a source people trust. It isn't a ranking factor you can toggle, but here is exactly what it means and how to show it on your site.",
  seoDescription: "What E-E-A-T means, whether it's a Google ranking factor, what YMYL covers, and a practical checklist to show experience, expertise and trust on your site.",
  category: "SEO & Local Search",
  pillar: "seo",
  priority: 9,
  author: "Hunain Qureshi",
  date: "2026-11-18",
  readTime: "11 min read",
  featured: false,
  keywords: [
    "e-e-a-t",
    "eeat",
    "google eeat",
    "what is eeat",
    "experience expertise authoritativeness trustworthiness",
    "eeat seo",
    "ymyl",
    "search quality rater guidelines",
    "how to improve eeat",
    "e-e-a-t ranking factor",
  ],
  relatedService: "/services/seo-analytics",
  sources: [SRC.helpful, SRC.sqrg, SRC.experience, SRC.aiContent, SRC.local, SRC.pageExperience, SRC.articleData],
  cover: { kicker: "E-E-A-T: make your website vouch for you", motif: "shield" },
  about: [
    { name: "E-E-A-T", sameAs: "https://www.wikidata.org/wiki/Q121693513" },
    { name: "search engine optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" },
  ],
  takeaways: [
    "E-E-A-T stands for Experience, Expertise, Authoritativeness and Trust, and it comes from the guidelines Google's human search quality raters use.",
    "Google says E-E-A-T itself isn't a specific ranking factor; its systems use a mix of signals to find content that shows those qualities.",
    "Trust is the letter that matters most: Google's rater guidelines say untrustworthy pages have low E-E-A-T no matter how experienced, expert or authoritative they seem.",
    "Topics that can affect someone's health, financial stability or safety are called YMYL, and Google gives extra weight to strong E-E-A-T on them.",
    "Google can't meet you in person, so your website has to vouch for you: real authors, real experience, real sources and a real business behind the page.",
  ],
  faqs: [
    {
      question: "What does E-E-A-T stand for?",
      answer: "E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness. The concept comes from Google's Search Quality Rater Guidelines, which describe how human raters judge the quality of search results. Experience was added in December 2022, turning the older E-A-T into E-E-A-T. Google's rater guidelines call Trust the most important member of the family.",
    },
    {
      question: "Is E-E-A-T a Google ranking factor?",
      answer: "Not directly. Google's helpful content documentation says E-E-A-T itself isn't a specific ranking factor. Instead, Google's systems use a mix of factors that can identify content with good E-E-A-T, and they give those factors extra weight on topics that affect health, financial stability or safety. So you can't score points for E-E-A-T, but the qualities it describes are what Google's systems try to reward.",
    },
    {
      question: "Do Google's search quality raters affect my rankings?",
      answer: "No. Google says search raters have no control over how pages rank and that rater data is not used directly in its ranking algorithms. The rater guidelines state that no single rating can directly impact how a page appears in Google Search. Raters evaluate samples of results so Google can measure whether its ranking systems are working and improve them.",
    },
    {
      question: "What is YMYL in SEO?",
      answer: "YMYL stands for Your Money or Your Life. Google's rater guidelines use it for topics that could significantly impact people's health, financial stability or safety, or the welfare and well-being of society. The guidelines' examples include heart attack symptoms, how to invest money, what to do in an earthquake and who can vote. Pages on these topics are held to a higher standard of accuracy and trust, and Google says its systems weight E-E-A-T more heavily for them.",
    },
    {
      question: "How can I improve E-E-A-T on my website?",
      answer: "Put a named author with a linked bio on every article, show first-hand experience with original photos, data and specific details, cite reliable sources, and make it easy to see who runs the site through an About page, contact details and a real address. Keep business information accurate everywhere, earn genuine reviews and mentions, serve the site over HTTPS, and keep content up to date.",
    },
    {
      question: "Does AI-generated content hurt E-E-A-T?",
      answer: "Not automatically. Google has said it rewards high-quality content however it is produced, and that using AI doesn't give content any special gains: it is judged like any other content. What matters is whether the content is helpful, original and shows E-E-A-T. Using AI to mass-produce pages mainly to manipulate rankings breaks Google's spam policies. First-hand experience is the part AI can't supply for you.",
    },
  ],
  content: {
    sections: [
      {
        heading: "What is E-E-A-T?",
        body: `E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness. It is the framework Google uses to describe the kind of content it wants to show people: created by someone with real experience or expertise in the topic, from a source others recognize, on a site that can be trusted. Of the four, Google says trust is most important.

The phrase comes from Google's Search Quality Rater Guidelines, the handbook for the people who evaluate Google's search results for it. It also appears in Google's own guidance for site owners on creating helpful, reliable, people-first content, so it isn't an SEO industry invention. It is Google's language.

Here is the framing I use with clients. A customer who walks into your office can size you up in a minute: the diplomas on the wall, the work in your portfolio, the reviews they read on the way in, whether the place looks like a real business. Google can't do that. Google can't meet you, so your website has to vouch for you. E-E-A-T is a checklist of the things a skeptical stranger would look for before trusting you, written down so they can be shown on a page.

This guide explains where E-E-A-T comes from, whether it affects rankings (the honest answer is more nuanced than most SEO articles admit), what each letter looks like on a real business website, and how we apply it on our own blog.`,
        highlight: "Google can't meet you, so your website has to vouch for you. E-E-A-T is simply the list of things a skeptical stranger would check before trusting you.",
      },
      {
        heading: "Where E-E-A-T comes from: the Search Quality Rater Guidelines",
        body: `Google works with search quality raters around the world who look at real search results and judge how good they are. Their handbook, the Search Quality Rater Guidelines, is a public PDF of well over a hundred pages. As of November 2026, the current version is dated September 11, 2025.

The guidelines originally used E-A-T: expertise, authoritativeness and trustworthiness. In December 2022, Google added a second E for experience, asking whether content shows it was produced with first-hand experience, such as actual use of a product, having actually visited a place, or communicating what a person went through.

The most important thing to understand about raters is what they don't do. The guidelines state that no single rating can directly impact how a webpage appears in Google Search. Google's helpful content documentation puts it even more plainly: search raters have no control over how pages rank, and rater data is not used directly in ranking algorithms. Ratings are used to measure whether Google's systems are working and to give examples that help improve them.

So the rater guidelines are best read as a description of what Google is trying to reward, not as a list of switches. That is exactly why they are worth reading.`,
        visual: {
          kind: "timeline",
          title: "How E-E-A-T got here",
          caption: "Sources: Google Search Central Blog (2022, 2023) and the current Search Quality Rater Guidelines.",
          items: [
            { when: "Before Dec 2022", title: "E-A-T", body: "The rater guidelines judge expertise, authoritativeness and trustworthiness." },
            { when: "Dec 15, 2022", title: "Experience added", body: "Google adds a second E: does the content show first-hand experience with the topic?" },
            { when: "Feb 8, 2023", title: "AI content guidance", body: "Google says it rewards high-quality content that shows E-E-A-T, however it is produced." },
            { when: "Sep 11, 2025", title: "Current guidelines", body: "The latest published version of the rater guidelines, and the one in use as of November 2026." },
          ],
        },
      },
      {
        heading: "Is E-E-A-T a ranking factor?",
        body: `This is the most searched question about E-E-A-T, and Google has answered it directly. Its documentation on helpful content says E-E-A-T itself isn't a specific ranking factor. There is no E-E-A-T score in Google's systems and no single signal you can optimize to raise it.

The same document then explains why it still matters. Google's automated systems use a mix of many factors to identify content that seems to demonstrate experience, expertise, authoritativeness and trustworthiness. And on topics that could significantly affect people's health, financial stability or safety, the systems give even more weight to content that aligns with strong E-E-A-T.

Put those two statements together and the practical answer is clear. You can't add E-E-A-T to a page the way you add a title tag. You can make the qualities it describes visible and verifiable, which is what Google's systems are built to pick up. Some of those signals are on your page, like a named author or a cited study. Others live elsewhere, like reviews, news coverage and [backlinks from reputable sites](/blog/what-are-backlinks).

Be wary of anyone selling an "E-E-A-T optimization" package that amounts to adding an author box and some schema markup. Those help Google understand who is behind a page. They don't create experience or trust that isn't there.`,
      },
      {
        heading: "Why Trust is the most important letter",
        body: `The rater guidelines are unusually blunt here. They say Trust is the most important member of the E-E-A-T family because untrustworthy pages have low E-E-A-T no matter how experienced, expert or authoritative they may seem. Their example: a financial scam is untrustworthy even if the person running it is a highly experienced, expert scammer.

The guidelines define Trust as the extent to which a page is accurate, honest, safe and reliable, and they note that the amount of trust needed depends on the page. An online store needs secure payment and reliable customer service. A product review should be honest and written to help buyers, not just to sell. A medical or financial page must be accurate to prevent harm.

The other three letters support trust rather than compete with it. Experience asks whether the creator has first-hand or life experience: would you trust a review from someone who used the product, or someone who didn't? Expertise asks whether they have the knowledge or skill, like an electrician giving wiring advice. Authoritativeness asks whether the creator or site is a known go-to source; the guidelines note even a local business's own social profile can be the authority on what it has on sale today.`,
        visual: {
          kind: "triad",
          title: "Trust sits at the center",
          caption: "Adapted from Google's Search Quality Rater Guidelines (September 2025), which call Trust the most important member at the center of the E-E-A-T family.",
          center: "Trust",
          items: [
            { title: "Experience", body: "First-hand or life experience with the topic: you used it, did it or lived it." },
            { title: "Expertise", body: "The knowledge or skill the topic demands, from formal training or long practice." },
            { title: "Authoritativeness", body: "Being known as a go-to source for the topic, by people other than yourself." },
          ],
        },
      },
      {
        heading: "What is YMYL, and does it apply to your business?",
        body: `YMYL stands for Your Money or Your Life. The rater guidelines use it for topics that could significantly impact the health, financial stability or safety of people, or the welfare or well-being of society. Their examples include symptoms of a heart attack, how to invest money, what to do in an earthquake, who can vote, and the qualifications for a driver's license.

The guidelines group YMYL harm into four kinds: health or safety, financial security, government, civics and society, and a catch-all for anything else that could hurt people. The test is the topic itself, not whether someone could theoretically build a harmful page about it. A page about rainbows isn't YMYL just because a scammer could attach a virus to it.

Many ordinary small businesses publish YMYL content without realizing it. A dental practice writing about gum disease, a law firm explaining what to do after a car accident, a financial advisor discussing retirement accounts, a contractor writing about electrical safety: all of these sit in YMYL territory, and Google says its systems give extra weight to strong E-E-A-T on such topics.

The practical rule: if a mistake on your page could cost a reader their health, money or safety, write it like a professional who will be held accountable for it. Name the qualified author, cite primary sources, show when it was reviewed, and keep it current.`,
      },
      {
        heading: "What E-E-A-T looks like on a real website",
        body: `Google's helpful content guidance asks site owners to think about who created their content and how it was created. On the "who" question, it asks plainly whether it is self-evident who wrote the content, whether pages carry a byline where one might be expected, and whether bylines lead to more information about the author.

The rater guidelines tell raters to look in three places: what the site and its creators say about themselves (starting with the About page or author profile), what others say about them (independent reviews, references and news coverage), and what is visible on the page itself. That gives you a practical map. Each letter of E-E-A-T should be visible in at least one of those three places.

The table below translates each letter into specific things you can put on a business website. None of these are tricks. They are the same evidence a cautious customer would want before hiring you.`,
        visual: {
          kind: "compare",
          title: "Turning each letter into evidence on your site",
          caption: "Signals drawn from Google's helpful content guidance, page experience guidance and Search Quality Rater Guidelines. They help Google's systems and readers see E-E-A-T; they don't guarantee rankings.",
          columns: ["What it asks", "Show it with"],
          rows: [
            { label: "Experience", values: ["Have you actually done, used or lived this?", "Original photos of your own work, real project details, your own data, first-person lessons learned"] },
            { label: "Expertise", values: ["Do you have the knowledge or skill?", "Named authors with bios listing credentials, licenses and years in the field; accurate, specific content"] },
            { label: "Authoritativeness", values: ["Do others treat you as a go-to source?", "Press mentions, association memberships, links and citations from respected sites, speaking or awards"] },
            { label: "Trust", values: ["Is the page accurate, honest, safe and reliable?", "About and contact pages, a real address, cited sources, publish and update dates, genuine reviews, HTTPS, clear policies"] },
          ],
        },
      },
      {
        heading: "E-E-A-T for local businesses",
        body: `For a local business, a big part of E-E-A-T lives off your website, in your Google Business Profile, your reviews and the directories that list you. Google's own advice for local ranking reads like an E-E-A-T checklist: businesses with complete and accurate information are more likely to show up in local results, and more reviews and positive ratings can help a business's local ranking.

Take a hypothetical family-owned roofing company in Pasadena, Texas. Strong local E-E-A-T for that business might look like this: the same name, address and phone number on its website, Google Business Profile and directories; project pages with its own before-and-after photos from named neighborhoods; the owner's license number and years in business on the About page; and reviews that mention specific jobs, answered by the owner.

None of that requires a marketing budget. It requires being consistent and showing your real work instead of stock photos. Our [Google Business Profile guide](/blog/google-business-profile-guide-houston) covers the profile in detail, and our [Houston local SEO guide](/blog/houston-local-seo-guide) covers citations, reviews and the map pack.`,
      },
      {
        heading: "E-E-A-T and AI-generated content",
        body: `Google's position on AI content is about quality, not production method. In February 2023 it said its ranking systems aim to reward original, high-quality content that demonstrates E-E-A-T, however that content is produced, and that using AI doesn't give content any special gains. Using AI to generate content primarily to manipulate rankings is a spam policy violation.

The interesting tension is with the first E. AI tools can summarize what is already known, but they haven't installed a water heater, argued a case or treated a patient. First-hand experience is the one thing they can't supply, which makes it the most reliable way for human-made content to stand out. Google's helpful content guidance also asks whether you provide background on how automation or AI was used to create content.

We cover what Google's rules actually say, including the scaled content abuse policy, in our full guide to [AI-generated content and Google rankings](/blog/ai-generated-content-google-rankings-what-the-rules-say).`,
        highlight: "AI can write about a topic. It can't have been there. First-hand experience is the part of E-E-A-T no tool can fake for you.",
      },
      {
        heading: "How to improve E-E-A-T: a practical audit checklist",
        body: `Use this as a self-audit on your most important pages: your homepage, main service pages and any article on a YMYL topic. Score honestly. Everything on the left is within your control, and most of it costs time rather than money.

If you want a broader review that covers technical health and content as well as trust signals, our step-by-step guide on [how to do an SEO audit](/blog/how-to-do-an-seo-audit) includes these checks in context.`,
        visual: {
          kind: "flags",
          title: "E-E-A-T audit: green flags and red flags",
          caption: "Based on Google's helpful content guidance, page experience guidance and Search Quality Rater Guidelines.",
          green: [
            "Every article has a named author whose byline links to a real bio",
            "Original photos, data or examples from your own work",
            "Claims and statistics cite the original source",
            "About page, contact details and a real business address",
            "Publish dates, plus update dates when content changes",
            "Consistent business info and genuine reviews across the web",
            "The whole site is served securely over HTTPS",
          ],
          red: [
            "No author, or a generic 'Admin' byline",
            "Stock photos only, with nothing showing your own work",
            "Statistics with no source, or sources that don't say what you claim",
            "No way to tell who owns the site or how to reach them",
            "YMYL advice with no qualified author or review",
            "Reviews written by the business itself or paid influencers",
            "Outdated pages still presented as current",
          ],
        },
      },
      {
        heading: "How we apply E-E-A-T on our own blog",
        body: `It would be odd to write about E-E-A-T without showing our own work, so here is what we do on this site. None of it is exotic, and you can copy all of it.

On the structured data side, we follow Google's author markup advice: mark people as Person and organizations as Organization, and give Google a URL or sameAs link so it can tell which author you mean. We also use JSON-LD with Wikidata sameAs links to identify the topics an article covers, which is explained in our [schema markup guide](/blog/schema-markup-guide).

If you would like the same standards applied to your site, this is part of the on-page and content work in our [SEO services](/services/seo-analytics).`,
        bullets: [
          "Every article is bylined by me, Hunain Qureshi, with an author bio and a link to my [founder page](/about/hunain-qureshi), so readers can see who is accountable for it.",
          "Every article lists its sources at the end, and every statistic in the text traces back to one of them.",
          "Every article shows its publish date.",
          "Each article emits BlogPosting structured data that names the author as a Person.",
          "The site has an About page and our real street address: our headquarters at 2100 West Loop S Fwy in Houston. I founded Cardinal in 2020.",
          "We write from what we actually do. When I give advice from experience, I say so; when I give a hypothetical example, I label it.",
        ],
        highlight: "Markup doesn't create trust. It makes the trust you already have easier for machines to read.",
      },
    ],
    cta: "Curious how your website looks to a skeptical stranger, or to Google? Send us your address and we'll reply within 24 hours with a free summary of your E-E-A-T and SEO signals: what's working, what's missing, and what to fix first.",
  },
};

export default article;
