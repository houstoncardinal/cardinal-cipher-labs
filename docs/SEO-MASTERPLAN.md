# Cardinal Consulting: search visibility masterplan

_Written 2026-11-21. Goal: be found for high-intent searches like "web design houston", "houston web design company", "houston seo company" and "app development houston", in Google, in the map pack and in AI answers. Today the site only shows for "cardinal consulting" and "hunain qureshi"._

---

## 1. Why only your name shows up

This isn't one bug. It's five things that add up. They're ordered by how much each one matters.

### 1. Google could barely read the site until three days ago

| Dates | What Google saw |
|---|---|
| Dec 2025 to Oct 28, 2026 | The site was a JavaScript-only app. Every URL returned the same empty page with the same title, so Google could only connect it to the brand name. |
| Oct 28 to Nov 18, 2026 | Pages were pre-rendered, but every canonical tag pointed at `visitcardinal.com` (no www), which redirects. Unknown URLs also returned the homepage instead of a 404 ("soft 404s"). Both send Google mixed signals. |
| Nov 18, 2026 onward | Fixed. Correct canonicals, real 404s, a full sitemap and 82 indexable pages. |

Google re-crawls a small, new site slowly. Most of your service, Houston and guide pages have probably not been indexed in their fixed form yet. This is the main reason, and it fixes itself as Google re-crawls. The steps in section 3 speed it up.

### 2. No local presence (map pack)

For "web design houston", most clicks go to the map pack and to directory lists like Clutch, Expertise and GoodFirms. Map-pack rankings come from a **Google Business Profile**, reviews and consistent business listings. Today:

- No Google Business Profile was found, and none is linked from the site (`mapsUrl` in `src/lib/seo-config.ts` is empty).
- There are no profiles on Clutch, DesignRush, UpCity, GoodFirms, Yelp, BBB or Expertise.
- The only listing found, on Nextdoor, has the **wrong phone number, (281) 901-4692, and links to cardinalhouston.com**.
- Your phone number, (281) 901-7016, appears nowhere on the web except your own site.

### 3. No authority (backlinks and mentions)

- `visitcardinal.com` was registered on **Oct 30, 2025**. It's about 13 months old.
- No third-party site links to it or mentions it.
- The previous domain, **cardinalhouston.com, has lapsed and is unregistered**. Any links and listings that pointed to it now lead nowhere. Anyone could register it.

### 4. The competition is long-established

Who ranks today:
- Firms founded between 1994 and 2016 (WebFX, Thrive, Clear Digital, Webwize, TopSpot, Jellyflea).
- Directory "top 10" lists (Clutch, GoodFirms, Techreviewer).

They show years in business, review counts and hundreds of links. A new domain with zero links can't outrank them for head terms yet. It *can* win the map pack, long-tail searches and AI answers sooner.

### 5. Your name is shared with other firms

"Cardinal Consulting" and "Cardinal Digital Marketing" are used by several firms, including **Red Cardinal Digital Marketing**, another Houston agency. Consistent name, address and phone on every listing is what lets Google tell you apart from them.

What is *not* the problem: on-page SEO.
- Titles, headings and canonicals are correct on every page.
- The main pages have 1,500 to 3,800 words of real content.
- Internal links are strong: `/houston-web-design` is linked from 77 pages with the anchor "Web Design Houston".
- Structured data is complete.

The site is ready. Google just needs to see it and trust it.

---

## 2. Fixed in the code (2026-11-21)

- **The browser now reuses the pre-rendered page instead of rebuilding it.**
  - Before, the app discarded the HTML and rebuilt every page after downloading 523 KB of JavaScript. That hurt the Core Web Vitals Google uses for ranking.
  - All 82 pages now hydrate cleanly. The fix included the animated stat counters, which were causing mismatches.
- **Real profiles in structured data.**
  - The Facebook page and Instagram account (@cardinalhouston) are now listed as `sameAs`.
  - Removed the non-existent Twitter account (@cardinalconsult) and the wrong Facebook and LinkedIn URLs.
- **Leads.** The forms now deliver to Netlify and the database in parallel, and campaign tags are captured correctly. Database setup is still pending; see `supabase/migrations/20261120000000_secure_admin_and_leads.sql`.

---

## 3. This week (you, 2–3 hours total)

1. **Google Business Profile.** This is the biggest lever for local searches.
   1. Create or claim it at business.google.com:
      - Name: exactly "Cardinal Consulting".
      - Category: "Website designer"; also add "Internet marketing service" and "Software company".
      - Address: 2100 West Loop S Fwy, Houston, TX 77027.
      - Phone: (281) 901-7016.
      - Website: https://www.visitcardinal.com/houston-web-design. Pointing at the Houston page ties the map listing to "web design houston".
   2. If that address is a shared office or virtual office, read Google's guidelines first. If clients don't visit you there, use a **service-area** profile (address hidden). A suspended profile is worse than none.
   3. Add photos, your services with prices (they're on the site), hours, and a first post.
   4. Once it's verified, send me the share link. I'll add it as `mapsUrl` so the site and listing reinforce each other.
2. **Re-register cardinalhouston.com.** It costs about $12 a year. Add it in Netlify as a domain alias that 301-redirects to www.visitcardinal.com. That recovers any old links and listings, and stops someone else using your old name.
3. **Fix the Nextdoor listing.** Change the phone to (281) 901-7016 and the website to https://www.visitcardinal.com.
4. **Search Console.**
   - Submit `sitemap.xml` again.
   - Use URL Inspection, then "Request indexing", for these pages:
     - `/`
     - `/houston-web-design`
     - `/services/web-development`
     - `/services/seo-analytics`
     - `/services/mobile-apps`
     - `/start/website`
   - Check **Indexing → Pages** and send me the "Why pages aren't indexed" list.
5. **Connect Search Console to Windsor.ai.** Then I can read your real queries, impressions and positions, and target the searches where you already appear on pages 2–5.
6. **Bing Webmaster Tools.** Import the site from Search Console (one click), then submit the sitemap. Bing also feeds ChatGPT search and Copilot, and it indexes faster.

## 4. Weeks 1–4: local trust signals

**Reviews.** Ask every past client for a Google review. Aim for 10 in 30 days, then 2–4 a month. Reviews are the single biggest map-pack factor you control.
- Send a direct review link from the profile ("Ask for reviews").
- Never pay for reviews, offer anything in exchange, or write them yourself.

**Citations.** List the business with the *identical* name, address, phone and website on each of these. Listings feed the map pack and give AI assistants third-party facts to cite.

| Priority | Sites |
|---|---|
| Must have | Bing Places, Apple Business Connect, Yelp, BBB, LinkedIn company page, Facebook (fix the website link) |
| Agency directories | Clutch (ask 3–5 clients for verified Clutch reviews), DesignRush, GoodFirms, UpCity, Expertise.com, Sortlist |
| Houston | Greater Houston Partnership, Houston West Chamber, Uptown Houston / Galleria Chamber, Houston Business Journal's directory, Built In Houston |

Then add each live profile URL to `verifiedProfiles` in `src/lib/seo-config.ts`.

**LinkedIn.**
- Create the company page.
- Make sure Hunain's profile lists Cardinal Consulting and links to the site.
- Send me the exact profile URLs; the current config has guesses.

## 5. Months 1–3: authority (links people will actually give you)

1. **Client sites.** You've built CWX, Vargas Tax, United CCR, HiTech Logic, ClearLedger, APN Clinic, ABQ MRI, SVR Law, Houston Enterprise, All Houston Property, Hou Gen Pros and more. Ask each for a small "Website by Cardinal Consulting" credit in the footer. That's 10+ relevant, real links.
2. **Case studies with the client.** Ask clients to share or link the case study page about their project.
3. **Houston press and associations.** Chamber member spotlights, Houston Business Journal, Houston Chronicle small-business features, and meetups like Houston Tech Rodeo.
4. **Expert quotes.** Qwoted, Featured.com and Help a B2B Writer bring requests from journalists who want quotes on web, SEO and AI topics. The 10 guides on the site are proof of expertise to pitch from.
5. **Partners.** Exchange referral pages with complementary Houston firms you genuinely work with (photographers, accountants, IT providers). Keep it relevant: no link schemes.

## 6. Months 1–6: content aimed at buyers (driven by Search Console data)

The site already covers the core searches. Once Search Console data is connected:
- Improve the pages that already get impressions in positions 8–30. These are the fastest wins.
- Build only the gaps that real data shows demand for. Likely candidates, none of which has its own page yet:
  - "how much does an app cost"
  - "website redesign houston"
  - "small business website design houston"
  - "shopify developer houston"
  - "custom software development houston"
- Add a real case study, with the client's permission, to each Houston industry page (law, medical, real estate, e-commerce, restaurants). Proof is what makes those pages rank and convert.
- Avoid thin suburb pages ("web design katy", "web design sugar land"). Google treats them as doorway pages. The Houston page and the Business Profile's service area already cover those areas.

## 7. Leads now, while SEO builds: Google Ads

Organic rankings for head terms take months. To get leads now, run Google Ads to the landing pages built for it:
- `/start/website`
- `/start/seo`
- `/start/app`
- `/start/ai`
- `/start/marketing`

Use the "Copy ad link" button in admin → Services so every lead shows its campaign. Start with exact- and phrase-match buying terms ("web design company houston", "website designer near me", "hire seo company houston") and $30–60 a day.

## 8. What to expect (realistic)

| Milestone | Typical timing | Depends on |
|---|---|---|
| Fixed pages indexed in Google; non-brand impressions appear in Search Console | 1–4 weeks | Indexing requests and sitemap (section 3) |
| Map-pack appearances for "web designer near me" or "web design houston" near the office | 1–3 months | Verified Business Profile + 10+ reviews + citations |
| Page 1 for long-tail searches ("how much does a website cost in houston", industry pages) | 2–4 months | Indexing + a few links |
| Top 10 for "web design houston" / "houston web design" | 6–12+ months | Steady reviews, 20–50 quality links, consistent publishing |
| Cited in AI answers (ChatGPT, Perplexity, AI Overviews) | 1–6 months | Bing indexing, citations and directories, third-party mentions |

Anyone who promises page 1 for "web design houston" in weeks is selling something. What *is* fast is the map pack, Bing, long-tail searches and ads.

## 9. Technical backlog (lower priority)

- **Split the JavaScript bundle.** It's 1.7 MB (523 KB compressed) because every blog post and service page's text ships to every visitor. Loading content per page would cut it by more than half. It's worth doing, but it matters less than sections 3–5.
- **Public sign-ups.** Turn them off in Lovable Cloud and run the admin/leads migration (security; see the previous session's notes).
- **Rating figures in the config.** Keep the 4.9 / 203-rating numbers out of structured data, as they are today, unless they come from a real, verifiable review platform. Self-made review markup can trigger a Google manual action.
