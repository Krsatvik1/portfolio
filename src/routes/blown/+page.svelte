<script>
  import { borderAll } from "$lib/commonClasses.js";
  import Journey from "$lib/components/Journey.svelte";
  import Title from "$lib/components/Title.svelte";
  import Body from "$lib/components/Body.svelte";
  import IconBox from "$lib/components/IconBox.svelte";
  import brush from "$lib/components/icons/brush.svelte";
  import code from "$lib/components/icons/code.svelte";
  import research from "$lib/components/icons/research.svelte";
  import tie from "$lib/components/icons/tie.svelte";
  import route from "$lib/components/icons/route.svelte";
  import flow1 from "$lib/components/icons/flow1.svelte";
  import color from "$lib/components/icons/color.svelte";
  import font from "$lib/components/icons/font.svelte";
  import checkList from "$lib/components/icons/checkList.svelte";
  import learn from "$lib/components/icons/learn.svelte";
  import ExternalLink from "$lib/components/icons/external-link.svelte";
  import BlownStory from "./BlownStory.svelte";

  // Journey 1 from the research (docs/research in the Blown repo); its fifth stage was the interstitial, now gone
  const explorer = [
    {
      name: "The hero",
      doing: "Lands on the first screen and is asked to find the nearest salon.",
      thinking: "Which Blown is most convenient for my visit today?",
      built: "Share a location and the page moves on to the salons. Without it, scrolling stays manual.",
    },
    {
      name: "The salons",
      doing: "Scrolls the salon cards and reads what each one is known for.",
      thinking: "Indiranagar is closest to me.",
      built: "The closest salon, or the flagship, is the highlighted card.",
    },
    {
      name: "A salon",
      doing: "Opens a salon to see its artists and its menu.",
      thinking: "The menu is clear and premium.",
      built: "On a phone the salon opens full screen, with no page reload.",
    },
    {
      name: "Book",
      doing: "Picks Book or a WhatsApp chat from the bar that stays on screen.",
      thinking: "I'll chat to the specialist first, then secure my slot.",
      built: "Book and WhatsApp stay pinned at the bottom of the screen.",
    },
  ];

  // Blown's platinum is one colour stepped by opacity (globals.css in the Blown repo)
  const platinum = [80, 60, 40, 20, 12, 8];
  const stack = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Payload CMS", "Postgres", "GA4"];
</script>

<svelte:head>
  <title>KUMAR SATVIK | Blown</title>
  <meta
    name="description"
    content="Blown: a website and a phone-first CMS for four premium salons in Bengaluru. Designed and built solo by Kumar Satvik."
  />
  <meta property="og:title" content="Blown, by Kumar Satvik" />
  <meta
    property="og:description"
    content="A website and a phone-first CMS for four premium salons in Bengaluru. Designed and built solo."
  />
  <meta property="og:url" content="https://www.krsatvik.xyz/blown" />
</svelte:head>

<div class="col-span-4"></div>

<!-- header -->
<div class="lg:col-span-4 col-span-4 grid grid-cols-2 lg:grid-cols-4 bg-white bg-opacity-70">
  <div class="{borderAll} lg:col-span-4 col-span-2 grid grid-cols-2 lg:grid-cols-4 lg:h-[35dvi]">
    <div
      class="flex-col p-[5dvi] py-[10dvi] lg:p-[2dvi] justify-center gap-[4dvi] lg:gap-[1.5dvi] flex col-span-2 lg:col-span-3"
    >
      <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">Website / CMS / Analytics / Live</div>
      <div class="text-h1_sm lg:text-h1_lg font-['ringold-sans']">Blown: Four Salons, One Site</div>
      <p class="text-base_sm lg:text-base_lg lg:max-w-[32dvi]">
        Blown runs four premium salons in Bengaluru. They had moved their brand upmarket and needed a site to match.
        The brief: make a ₹2,599 haircut worth booking from a phone, and let a team with no web developer run the site
        themselves. I did it solo, from research to the last deploy.
      </p>
    </div>
    <div class="h-full flex flex-col justify-end col-span-2 lg:col-span-1">
      <Title label="Team" text_size="h2" sm_col_span="2" lg_col_span="1" height="h-[15dvi] lg:h-[5dvi]" marginT={true} />
      <Body label="Solo, end to end" sm_col_span="2" lg_col_span="1" text_col="col-span-1" height="h-[15dvi] lg:h-[5dvi]" />
      <a
        href="https://blown.co.in"
        target="_blank"
        rel="noopener"
        class="{borderAll} group flex items-center justify-between h-[15dvi] lg:h-[5dvi] p-[5dvi] lg:p-[2dvi] bg-white hover:bg-stone-900 hover:text-white transition-all duration-200"
      >
        <span class="text-cap_sm lg:text-cap_lg font-bold uppercase">blown.co.in</span>
        <span class="w-[6dvi] h-[6dvi] lg:w-[1.4dvi] lg:h-[1.4dvi] stroke-[0.1rem]"><ExternalLink /></span>
      </a>
    </div>
  </div>
</div>

<!-- the story: 01 Luxury, 02 Control, 03 Impact -->
<BlownStory />

<!-- roles -->
<div class="lg:mt-[5dvi] flex lg:hidden mt-[15dvi] w-fit col-span-4">
  <IconBox><svelte:component this={research} /></IconBox>
  <IconBox><svelte:component this={brush} /></IconBox>
  <IconBox><svelte:component this={code} /></IconBox>
</div>
<Title
  label="Roles"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[15dvi] lg:h-[5dvi]"
  overide="lg:mt-[5dvi]"
/>
<div class="lg:mt-[5dvi] lg:flex hidden">
  <IconBox><svelte:component this={research} /></IconBox>
  <IconBox><svelte:component this={brush} /></IconBox>
  <IconBox><svelte:component this={code} /></IconBox>
</div>
<Body
  overide="lg:col-start-1"
  label="Read the client's brief and old content, then mapped three journeys: a first-time visitor, a regular, and someone who only comes to shop."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1"
  heading="true"
  headingText="Researcher"
  height="h-auto lg:min-h-[10dvi]"
/>
<Body
  label="Explored five art directions for the home page, locked Cinematic Dark on the brand's platinum and black, and designed for the phone, where most visitors arrive."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1"
  heading="true"
  headingText="Designer"
  height="h-auto lg:min-h-[10dvi]"
/>
<Body
  label="Built it in Next.js with Payload CMS inside the app, tracked every booking tap, deployed it, and handed the team a written guide."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1"
  heading="true"
  headingText="Developer"
  height="h-auto lg:min-h-[10dvi]"
/>

<!-- client's problem -->
<div class="flex justify-end lg:col-start-1 mt-[15dvi] lg:mt-[5dvi] w-fit lg:w-auto">
  <IconBox><svelte:component this={tie} /></IconBox>
</div>
<div
  class="col-span-4 lg:col-span-1 h-[20dvi] lg:h-[10dvi] {borderAll} lg:mt-[5dvi] font-['ringold-sans'] text-h2_sm lg:text-h2_lg p-[5dvi] bg-white bg-opacity-70 lg:p-[2dvi] flex items-center"
>
  <p>Client’s Problem</p>
</div>
<div
  class="col-span-4 lg:col-span-2 h-auto lg:h-[10dvi] {borderAll} lg:mt-[5dvi] text-base_sm lg:text-base_lg p-[5dvi] lg:p-[2dvi] flex items-center bg-white bg-opacity-70"
>
  <p>
    Four salons, one brand, and three places to send people: the salons on the site, bookings on Fresha, products on
    Shopify. Most visitors arrive on a phone, the menu runs to dozens of services, and the offers change every month,
    with no one in-house to update the site.
  </p>
</div>

<!-- roadmap -->
<div class="lg:hidden mt-[30dvi]">
  <IconBox><svelte:component this={route} /></IconBox>
</div>
<Body
  label="About five weeks from the first commit to a live, tracked site, then one change request in June."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1"
  height="h-auto lg:h-[10dvi]"
  align="content-center"
  overide="lg:mt-[10dvi]"
/>
<div class="lg:mt-[10dvi] col-span-4 lg:col-span-1">
  <div class="hidden lg:block">
    <IconBox><svelte:component this={route} /></IconBox>
  </div>
  <Title label="Roadmap" text_size="h2" sm_col_span="4" lg_col_span="1" height="h-[15dvi] lg:h-[5dvi]" />
</div>
<Journey label="Research" step="1" date="Mar 20 - Mar 27" overide="lg:col-start-1" />
<Journey label="Directions and Design System" step="2" date="Mar 28 - Mar 29" />
<Journey label="Build and CMS" step="3" date="Mar 30 - Apr 10" />
<Journey label="Tracking and SEO" step="4" date="Apr 21 - Apr 23" />
<Journey label="Change Request" step="5" date="Jun 2" />

<!-- research -->
<div class="col-start-1 mt-[30dvi] lg:mt-[10dvi]">
  <IconBox><svelte:component this={research} /></IconBox>
</div>
<Title
  label="Research"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="2"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 col-start-1"
/>
<div
  class="{borderAll} text-base_sm lg:text-base_lg lg:col-span-2 p-[5dvi] lg:p-[2dvi] col-span-4 lg:h-[10dvi] grid content-center bg-white bg-opacity-70"
>
  <div class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]">Process</div>
  <ol
    class="list-decimal list-inside text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0 lg:columns-2"
  >
    <li>Brief and existing content</li>
    <li>Three user journeys</li>
    <li>Information architecture</li>
    <li>Scroll behaviour study</li>
  </ol>
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex col-start-1 w-fit lg:w-auto">
  <IconBox><svelte:component this={flow1} /></IconBox>
</div>
<Title
  label="First-time Explorer"
  text_size="cap"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[15dvi] lg:h-[5dvi]"
  overide="lg:col-start-1"
/>
<Body
  label="Each journey maps what the visitor does and thinks at every stage, and what each screen has to earn. The home page is built around the first-time explorer."
  sm_col_span="4"
  lg_col_span="3"
  text_col="col-span-1"
  height="h-auto lg:h-[5dvi]"
  align="content-center"
/>
{#each explorer as st, i}
  <div class="{borderAll} col-span-4 lg:col-span-1 bg-white bg-opacity-70 flex flex-col justify-between {i === 0 ? 'lg:col-start-1' : ''}">
    <div class="p-[5dvi] lg:p-[2dvi] space-y-[2dvi] lg:space-y-[0.8dvi]">
      <p class="text-cap_sm lg:text-cap_lg font-bold uppercase">{st.name}</p>
      <p class="text-base_sm lg:text-base_lg">{st.doing}</p>
      <p class="text-base_sm lg:text-base_lg text-stone-500">“{st.thinking}”</p>
      <p class="text-base_sm lg:text-base_lg"><b>Design:</b> {st.built}</p>
    </div>
    <div class="self-end">
      <IconBox>
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans'] leading-[1] mt-[1.6dvi] lg:mt-[0.4dvi] text-center">{i + 1}</p>
      </IconBox>
    </div>
  </div>
{/each}
<Body
  label="Knows what they want. Book Now sits beside the main path and goes straight to Fresha or WhatsApp, so a regular never has to browse."
  sm_col_span="4"
  lg_col_span="2"
  text_col="col-span-1"
  heading="true"
  headingText="Returning loyalist"
  height="h-auto lg:min-h-[8dvi]"
  align="content-center"
  overide="lg:col-start-1 mt-[15dvi] lg:mt-[5dvi]"
/>
<Body
  label="Only wants to restock. A Restock pill stays on every screen and opens the shop, so a product never waits behind a booking."
  sm_col_span="4"
  lg_col_span="2"
  text_col="col-span-1"
  heading="true"
  headingText="Retail-only shopper"
  height="h-auto lg:min-h-[8dvi]"
  align="content-center"
  overide="lg:mt-[5dvi]"
/>

<!-- design -->
<div class="mt-[30dvi] lg:mt-[15dvi] flex w-fit lg:w-full lg:hidden">
  <IconBox><svelte:component this={brush} /></IconBox>
</div>
<Title
  label="Design"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="2"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 lg:mt-[10dvi]"
/>
<div class="mt-[30dvi] lg:mt-[15dvi] lg:flex hidden">
  <IconBox><svelte:component this={brush} /></IconBox>
</div>
<div class="lg:col-span-4 hidden lg:block"></div>
<Title
  label="Design System"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[20dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 mt-[15dvi] lg:mt-[5dvi]"
/>
<Body
  label="Blown's brief was platinum on black. The system keeps to one typeface, Inter in three weights, and one colour stepped by opacity, so menus, prices and photos all sit in the same dark."
  sm_col_span="4"
  lg_col_span="2"
  text_col="col-span-1"
  height="h-auto lg:h-[10dvi]"
  align="content-center"
  overide="lg:mt-[5dvi]"
/>
<div class="mt-[15dvi] lg:mt-[5dvi] flex col-start-1 w-fit lg:w-full">
  <IconBox><svelte:component this={font} /></IconBox>
</div>
<div
  class="{borderAll} col-span-4 bg-[#080808] text-[#e5e4e2] p-[5dvi] lg:p-[2dvi] grid lg:grid-cols-4 gap-[6dvi] lg:gap-[2dvi] content-center h-auto lg:h-[20dvi]"
  style="font-family: 'inter-variable', 'Inter', sans-serif"
>
  <p class="specimen lg:col-span-3" style="font-weight: 200">
    The Blown Experience.
  </p>
  <div class="space-y-[3dvi] lg:space-y-[1dvi] self-end">
    <p class="text-base_sm lg:text-base_lg"><span style="font-weight: 200">Inter 200</span>, display</p>
    <p class="text-base_sm lg:text-base_lg"><span style="font-weight: 300">Inter 300</span>, body</p>
    <p class="text-base_sm lg:text-base_lg"><span style="font-weight: 500">Inter 500</span>, labels</p>
  </div>
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex col-start-1 w-fit lg:w-full">
  <IconBox><svelte:component this={color} /></IconBox>
</div>
<div class="p-[5dvi] lg:p-[2dvi] col-span-4 lg:col-span-1 bg-[#050505] lg:col-start-1 {borderAll} h-[60dvi] lg:h-[20dvi]">
  <p class="text-cap_sm lg:text-cap_lg font-bold text-[#e5e4e2]">#050505</p>
</div>
<div class="col-span-4 lg:col-span-1">
  <div class="p-[5dvi] lg:p-[2dvi] bg-[#080808] {borderAll} h-[30dvi] lg:h-[10dvi]">
    <p class="text-cap_sm lg:text-cap_lg font-bold text-[#e5e4e2]">#080808</p>
  </div>
  <div class="p-[5dvi] lg:p-[2dvi] bg-[#0a0a0a] {borderAll} h-[30dvi] lg:h-[10dvi]">
    <p class="text-cap_sm lg:text-cap_lg font-bold text-[#e5e4e2]">#0A0A0A</p>
  </div>
</div>
<div class="grid grid-cols-6 col-span-4 lg:col-span-2">
  <div class="p-[5dvi] col-span-6 lg:p-[2dvi] bg-[#e5e4e2] {borderAll} h-[30dvi] lg:h-[10dvi]">
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#E5E4E2 platinum</p>
  </div>
  {#each platinum as a}
    <div class="{borderAll} bg-[#050505] h-[30dvi] lg:h-[10dvi] flex flex-col">
      <div class="flex-1" style="background: rgba(229, 228, 226, {a / 100})"></div>
      <p class="p-[1.5dvi] lg:p-[0.6dvi] text-cap_sm lg:text-cap_lg font-bold text-[#e5e4e2]">{a}</p>
    </div>
  {/each}
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex col-start-1 w-fit lg:w-full">
  <IconBox><svelte:component this={checkList} /></IconBox>
</div>
<div class="{borderAll} col-span-4 lg:col-span-1 lg:col-start-1 bg-black lg:h-[35dvi] flex justify-center">
  <img
    class="w-full h-auto lg:w-auto lg:h-full block"
    src="/blown/services-phone.jpg"
    alt="The services menu on a phone, with Book and WhatsApp pinned under it"
    loading="lazy"
  />
</div>
<div class="col-span-4 lg:col-span-3 grid grid-cols-4 lg:grid-cols-3 lg:grid-rows-[10dvi_1fr] content-start">
  <Title label="The Menu" text_size="h2" sm_col_span="4" lg_col_span="1" height="h-[20dvi] lg:h-full" />
  <Body
    label="The menu runs to more than twenty categories, priced by hair length. On a phone it filters in place, and Book and WhatsApp stay pinned under it. 1,580 visitors used the filters, 8,199 times."
    sm_col_span="4"
    lg_col_span="2"
    text_col="col-span-1"
    height="h-auto lg:h-full"
    align="content-center"
  />
  <Body
    label="Book is on the first screen, and Book and WhatsApp are on every salon, the menu, the sidebar and the footer, with Call in the footer. Over six months that came to 2,761 Book taps, 536 WhatsApp and 69 calls."
    sm_col_span="4"
    lg_col_span="2"
    text_col="col-span-1"
    heading="true"
    headingText="Book on every surface"
    height="h-auto lg:h-[15dvi]"
    align="content-center"
  />
</div>

<!-- developing -->
<div class="mt-[30dvi] lg:mt-[15dvi] self-end lg:hidden">
  <IconBox><svelte:component this={code} /></IconBox>
</div>
<Title
  label="Developing"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:mt-[10dvi] bg-white bg-opacity-70"
/>
<div class="mt-[15dvi] lg:mt-[15dvi] lg:flex self-end hidden">
  <IconBox><svelte:component this={code} /></IconBox>
</div>
<Body
  label="The CMS lives inside the site. From a phone, the team edits salons, hours, menus, artists, the monthly edit, hero media, SEO and the legal pages, with a guide written for them. Every Book, WhatsApp and Call tap is tracked with the salon, artist or product it came from."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1"
  height="h-auto lg:h-[15dvi]"
  overide="lg:col-start-1"
/>
<div
  class="{borderAll} col-span-4 lg:col-span-3 stack grid grid-cols-2 lg:grid-cols-4 content-center lg:text-h2_lg p-[5dvi] font-['ringold-sans'] lg:px-[2dvi] gap-x-[4dvi] gap-y-[2dvi] lg:gap-x-[1.5dvi] lg:gap-y-[0.5dvi] lg:h-[15dvi] h-auto bg-white bg-opacity-70"
>
  {#each stack as s}<p>{s}</p>{/each}
</div>

<!-- learned -->
<div class="mt-[30dvi] lg:mt-[10dvi] flex justify-end w-fit lg:w-full">
  <IconBox><svelte:component this={learn} /></IconBox>
</div>
<Body
  label="GA was never told which taps count as a booking, so its own funnel reads every booking as a drop-off. Every number here comes from the raw taps instead. Next: tell GA that Book, WhatsApp and Call are the goals, and pull Fresha's bookings, so taps can be read as bookings."
  sm_col_span="4"
  lg_col_span="2"
  align="content-center"
  text_col="col-span-1"
  heading="true"
  headingText="What I'd do next"
  height="h-auto lg:h-[10dvi]"
  overide="lg:mt-[10dvi]"
/>

<style>
  .specimen {
    font-size: 11dvi;
    line-height: 10.5dvi;
    letter-spacing: -0.02em;
  }
  @media (max-width: 1023px) {
    .stack {
      font-size: 6.5dvi;
      line-height: 6.5dvi;
    }
  }
  @media (min-width: 1024px) {
    .specimen {
      font-size: 5.5dvi;
      line-height: 5.5dvi;
    }
  }
</style>
