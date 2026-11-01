// Hunain Qureshi's story, in his own words. Used by the founder page (/about/hunain-qureshi),
// the homepage spotlight, the About page, and blog author bios.

export const FOUNDER_PATH = "/about/hunain-qureshi";

export const founder = {
  name: "Hunain Qureshi",
  role: "Founder & CEO, Cardinal Consulting",
  /** Add a portrait at public/team/hunain-qureshi.jpg and set this to "/team/hunain-qureshi.jpg" */
  photo: "/team/hunain-qureshi.jpg" as string | undefined,
  tagline: "A kid from Abu Dhabi who chased fireflies, grew up with the internet, and never stopped building.",
  shortBio:
    "Hunain Qureshi grew up online. He was a professional Counter-Strike player at 13, built PCs and hosted game servers as a teenager, and taught himself design before founding Cardinal Consulting in Houston in 2020.",
  facts: [
    { label: "Born", value: "January 14, 1991" },
    { label: "Roots", value: "Abu Dhabi → New York → Houston" },
    { label: "Pro gamer", value: "Counter-Strike at 13" },
    { label: "Founded", value: "Cardinal Consulting, 2020" },
  ],
  quote: "I used to design buttons in Photoshop and wish they were clickable. Now I build the whole thing.",
};

export type Chapter = { id: string; marker: string; place: string; title: string; body: string; motif: "dream" | "fireflies" | "road" | "web" | "game" | "build" | "paint" | "click" };

export const chapters: Chapter[] = [
  {
    id: "abu-dhabi",
    marker: "The beginning",
    place: "Abu Dhabi",
    title: "A kid from Abu Dhabi with big dreams",
    motif: "dream",
    body: `My story starts in Abu Dhabi. We didn't have much growing up, but my parents always found a way to support us. Whatever we were missing in money, they made up for in sacrifice.

That's the first thing I ever learned about building something: you find a way.`,
  },
  {
    id: "new-york",
    marker: "Early years",
    place: "New York",
    title: "Four brothers in a closet",
    motif: "fireflies",
    body: `At one point we lived in a one-bedroom apartment in New York. Four of us brothers slept in side-by-side bunk beds in a room that was technically a closet. I still remember hiding whenever the landlord stopped by, I think so my parents wouldn't be fined for having too many people in the apartment.

It was an odd way to grow up, but even then my brain was vividly artistic. I remember watching fireflies at night and feeling pulled in by their color and light. I didn't have the words for it yet, but that was the first time I felt drawn to making things glow.`,
  },
  {
    id: "houston",
    marker: "Around 1995",
    place: "The road to Houston",
    title: "A white minivan to Houston",
    motif: "road",
    body: `When I was about four, we packed into a white minivan and drove to Houston to start a new life, where my mom's brother had already settled. We got an apartment, I met my cousins, and we all became close.

Houston became home.`,
  },
  {
    id: "internet",
    marker: "The dial-up years",
    place: "Born with the web",
    title: "An internet baby",
    motif: "web",
    body: `I was born on January 14, 1991, the same year the World Wide Web opened up to the world. I like to think we grew up together. I was a vibrant kid with a spiritual, creative streak and a mind that always felt switched on. I recorded my first song when I was four years old.

My life was the internet. I remember sitting at an old box computer, listening to AOL dial up, and signing on to explore pages, chat rooms, and games. Every page felt like a door, and I wanted to open all of them.`,
  },
  {
    id: "counter-strike",
    marker: "Age 13",
    place: "Counter-Strike",
    title: "A professional gamer at 13",
    motif: "game",
    body: `As I grew, I went deep into gaming. At 13 I became a professional Counter-Strike player, competing with and against some of the best teams in the world. I met amazing people in that world, and some of them are now very successful entrepreneurs.

It was a wild time to be online. Bitcoin's white paper came out on Halloween 2008, and the people around me were exactly the kind who paid attention to things like that.`,
  },
  {
    id: "builder",
    marker: "Teenage years",
    place: "Under the hood",
    title: "Not just playing the game",
    motif: "build",
    body: `I got deep into technology: building computers and upgrading every part I could so I could play better. Then playing wasn't enough. I started customizing the games themselves, and eventually hosting the servers they were played on.

My brain just didn't work the normal way. I needed to know how everything worked underneath, and then I needed to make it better.`,
  },
  {
    id: "creator",
    marker: "The creator",
    place: "Paint & Photoshop",
    title: "Fireworks in Microsoft Paint",
    motif: "paint",
    body: `Along the way I drifted into art. I used to paint fireworks and random scenes in old Microsoft Paint. That was the start of it. From there I moved into graphic design, because I was always a creator.

I remember designing flat buttons and boxes in Photoshop and wishing I could click them and have them actually go somewhere.`,
  },
  {
    id: "today",
    marker: "Today",
    place: "Cardinal Consulting",
    title: "Now they click",
    motif: "click",
    body: `Today I build what that kid was wishing for: advanced websites with 100+ pages, interactive elements, hover animations, 3D graphics, and bold use of color, plus video games of my own.

In 2020 I founded Cardinal Consulting in Houston to bring that same obsession to businesses. Every site we build carries a little of the closet bedroom, the fireflies, the dial-up tone, and the game servers that got me here.`,
  },
];

/** What the story means for clients. */
export const difference = [
  { title: "Raised on the internet", body: "I've been online since dial-up. I know how people actually browse, click, and decide, because I've been doing it my whole life." },
  { title: "A gamer's standard for speed", body: "Competitive gaming teaches you that milliseconds matter. We build fast sites and treat lag like a bug." },
  { title: "A builder, not a reseller", body: "I built PCs and hosted servers before I built websites. We engineer custom work instead of reselling templates." },
  { title: "An artist's eye", body: "Fireflies, fireworks, and Photoshop buttons made me obsessed with color, light, and motion. It's why our work feels alive." },
  { title: "My parents' work ethic", body: "They always found a way, and so do we: fixed prices in writing, honest advice, and a reply to every inquiry within 24 hours." },
];
