<script>
  import { borderAll } from "$lib/commonClasses.js";
  import { onMount } from "svelte";
  import Journey from "$lib/components/Journey.svelte";
  import Title from "$lib/components/Title.svelte";
  import Body from "$lib/components/Body.svelte";
  import Button from "$lib/components/Button.svelte";
  import onboarding from "$lib/images/invst/onboarding.webm";
  import auth from "$lib/images/invst/auth.webm";
  import discover from "$lib/images/invst/discover.webm";
  import portfolio from "$lib/images/invst/portfolio.webm";
  import reward from "$lib/images/invst/reward.webm";
  import IconBox from "$lib/components/IconBox.svelte";
  import brush from "$lib/components/icons/brush.svelte";
  import research from "$lib/components/icons/research.svelte";
  import help from "$lib/components/icons/help.svelte";
  import route from "$lib/components/icons/route.svelte";
  import font from "$lib/components/icons/font.svelte";
  import color from "$lib/components/icons/color.svelte";
  import learn from "$lib/components/icons/learn.svelte";

  import chat from "$lib/components/icons/chat.svelte";
  import megaphone from "$lib/components/icons/megaphone.svelte";
  import building from "$lib/components/icons/building.svelte";
  import alert2 from "$lib/components/icons/alert2.svelte";
  import door from "$lib/components/icons/door.svelte";
  import case1 from "$lib/components/icons/case1.svelte";
  import gift from "$lib/components/icons/gift.svelte";
  import map from "$lib/components/icons/map.svelte";
  import security from "$lib/components/icons/security.svelte";

  let mob_index = 0;
  let wireframe_index = 0;
  let desk_index = 0;
  onMount(() => {
    const wireframe = document.querySelectorAll(".wireframe");
    const mob = document.querySelectorAll(".mob");
    const desk = document.querySelectorAll(".desk");
  });

  import ExternalLink from "$lib/components/icons/external-link.svelte";
</script>

<svelte:head>
  <title>KUMAR SATVIK | INVST: TRADE SIMULATOR</title>
</svelte:head>
<div class="col-span-2"></div>
<div
  class="lg:col-span-4 col-span-2 grid grid-cols-2 lg:grid-cols-4 bg-white bg-opacity-70"
>
  <div
    class="{borderAll} order-2 lg:order-1 lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 col-span-2 lg:h-[35dvi] h-[150dvi]"
  >
    <div
      class="flex-col p-[5dvi] pb-0 lg:px-[2dvi] justify-center gap-[4dvi] lg:gap-[1.5dvi] flex col-span-2 lg:col-span-3"
    >
      <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
        MOBILE APP / UI Animation / CLASSROOM ASSIGNMENT
      </div>
      <div class="text-h1_sm lg:text-h1_lg font-['ringold-sans']">
        INVST: TRADE SIMULATOR
      </div>
      <p class="text-base_sm lg:text-base_lg lg:max-w-[30dvi]">
        A user-friendly app that simulates the stock market, designed for young
        adults in India (18-25) with limited financial knowledge. It builds
        confidence through interactive learning, virtual trading, and community
        features. The clear UI, bold typography, and balanced color palette
        engage users and promote learning.
      </p>
    </div>
    <div class="h-full flex flex-col justify-end col-span-2 lg:col-span-1">
      <Title
        label="Teamates"
        text_size="h2"
        sm_col_span="2"
        lg_col_span="1"
        height="h-[15dvi] lg:h-[5dvi]"
        marginT={true}
      />
      <Body
        label="Kushagra Banthia"
        sm_col_span="2"
        lg_col_span="1"
        text_col="col-span-1 lg:col-span-1"
        height="h-[15dvi] lg:h-[5dvi]"
      />
      <Body
        label="Akshat Agarwal"
        sm_col_span="2"
        lg_col_span="1"
        text_col="col-span-1 lg:col-span-1"
        height="h-[15dvi] lg:h-[5dvi]"
      />
      <Body
        label="Chinmay Nambiar"
        sm_col_span="2"
        lg_col_span="1"
        text_col="col-span-1 lg:col-span-1"
        height="h-[15dvi] lg:h-[5dvi]"
      />
    </div>
  </div>
  <div
    class="{borderAll} bg-white col-span-2 order-2 lg:order-2 lg:h-[40dvi] h-[45dvi] lg:col-span-4"
  >
    <div class="h-full overflow-hidden">
      <enhanced:img
        class="object-cover h-[calc(100%+2dvi)] object-center my-auto mx-auto"
        src="$lib/images/invst/cover.jpg"
        alt="Cover"
      />
    </div>
  </div>
</div>
<div class="lg:mt-[5dvi] flex lg:hidden mt-[15dvi] w-fit col-span-2">
  <IconBox>
    <svelte:component this={research} />
  </IconBox>
  <IconBox>
    <svelte:component this={brush} />
  </IconBox>
</div>
<Title
  label="Roles"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  height="h-[15dvi] lg:h-[5dvi]"
  overide="lg:mt-[5dvi]"
/>
<div class="lg:mt-[5dvi] lg:flex hidden">
  <IconBox>
    <svelte:component this={research} />
  </IconBox>
  <IconBox>
    <svelte:component this={brush} />
  </IconBox>
</div>
<Body
  overide="lg:col-start-1"
  label="I was involved in conducting user interviews and surveys to understand the target audience's needs and pain points. We conducted competitive analysis, researching existing stock market platforms to identify opportunities for differentiation."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  heading="true"
  headingText="Researcher"
  height="h-[35dvi] lg:h-[15dvi]"
/>
<Body
  label="My contributions included developing user personas based on research data, designing the app's user interface and user experience, and creating wireframes, prototypes, and high-fidelity mockups. "
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  heading="true"
  headingText="Designer"
  height="h-[35dvi] lg:h-[15dvi]"
/>
<div class="flex justify-end lg:col-start-1 mt-[15dvi] lg:mt-[5dvi] w-fit lg:w-auto">
  <IconBox>
    <svelte:component this={help} />
  </IconBox>
</div>

<div
  class="col-span-4 lg:col-span-1 h-[30dvi]  lg:h-[10dvi] {borderAll}  lg:mt-[5dvi] font-['ringold-sans'] text-h2_sm lg:text-h2_lg p-[5dvi] bg-white bg-opacity-70 lg:p-[2dvi] flex items-center"
>
  <p>Let’s Understand the Context</p>
</div>
<div
  class="col-span-4 lg:col-span-2 h-[30dvi] lg:h-[10dvi] {borderAll}  lg:mt-[5dvi] text-base_sm lg:text-base_lg p-[5dvi] lg:p-[2dvi] flex items-center bg-white bg-opacity-70"
>
  <p>
    Our INVST project emerged from a classroom assignment focused on identifying
    a real-world problem and developing a digital solution. We observed that
    young adults in India are increasingly interested in investing but often
    lack the knowledge and confidence to do so effectively.
  </p>
</div>

<div class=" lg:hidden mt-[30dvi]">
  <IconBox>
    <svelte:component this={route} />
  </IconBox>
</div>
<Body
  label="We conducted user research, interviews, and surveys to understand their needs and pain points, which guided our design process and shaped the app's features."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  height="h-[30dvi] lg:h-[10dvi]"
  align="content-center"
  overide=" lg:mt-[10dvi]"
/>
<div class=" lg:mt-[10dvi] col-span-4 lg:col-span-1">
  <div class="hidden lg:block">
    <IconBox>
      <svelte:component this={route} />
    </IconBox>
  </div>
  <Title
    label="Our RoadMap"
    text_size="h2"
    sm_col_span="4"
    lg_col_span="1"
    height="h-[15dvi] lg:h-[5dvi]"
  />
</div>
<Journey
  label="Problem Identification & Research"
  step="1"
  date="Sept 2nd - Sept 8th"
  overide="lg:col-start-1"
/>
<Journey label="Persona Development & User Flows" step="2" date="Sept 9th - Sept 15th" overide="" />
<Journey label="Design & Prototype" step="3" date="Sept 16th - Sept 22nd" overide="" />
<Journey label="Finalization & Presentation" step="4" date="Sept 23rd - Oct 19th" overide="" />


<div class="col-start-1 mt-[30dvi] lg:mt-[10dvi]">
  <IconBox>
    <svelte:component this={research} />
  </IconBox>
</div>
<Title
  label="RESEARCH"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="2"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 bg-white bg-opacity-70"
/>

<div
  class="{borderAll} text-base_sm lg:text-base_lg lg:col-span-2 p-[5dvi] lg:p-[2dvi] gap-[5dvi] lg:gap-[2.5dvi] col-span-4 lg:h-[10dvi] grid grid-cols-1 lg:grid-cols-1 content-stretch bg-white bg-opacity-70"
>
  <div class="flex flex-col w-full">
    <div>
      <div
        class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]"
      >
        Process
      </div>
    </div>

    <ol
      class="list-decimal list-inside text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0 lg:columns-2 w-full"
    >
      <li>Defining the Problem</li>
      <li>Interviews</li>
      <li>Surveys</li>
      <li>Analyzing</li>
      <li>Competitive Analysis</li>
      <li>Affinity Mapping</li>
    </ol>
  </div>
</div>
<div class="grid col-span-4 lg:col-span-4 grid-cols-2 lg:grid-cols-4 mt-[15dvi] lg:mt-[5dvi]">
  <div class="lg:col-start-1 col-span-2 grid grid-cols-2">
    <Title
      label="Interview Insights"
      text_size="cap"
      height="h-[15dvi] lg:h-[5dvi]"
      lg_col_span="1"
      sm_col_span="1"
    />
    <div class="flex justify-start w-fit lg:w-auto">
      <IconBox>
        <svelte:component this={chat} />
      </IconBox>
    </div>
    <div
      class="{borderAll} col-span-2 p-[5dvi] lg:p-[2dvi] flex flex-col gap-[4dvi] lg:gap-[1.5dvi] lg:h-[15dvi] h-[45dvi] text-cap_sm lg:text-cap_lg bg-white bg-opacity-70 justify-center"
    >
      <p>
        Lack of Knowledge & Entry Point
      </p>
      <p>
        Fear of Loss & Mistakes
      </p>
      <p>
        Desire for Simplified & Engaging Learning
      </p>
    </div>
  </div>
  <div class="col-span-2 grid grid-cols-2">
    <Title
      label="Survey Insights"
      text_size="cap"
      height="h-[15dvi] lg:h-[5dvi]"
      lg_col_span="1"
      sm_col_span="1"
    />
    <div class="flex justify-start w-fit lg:w-auto">
      <IconBox>
        <svelte:component this={megaphone} />
      </IconBox>
    </div>
    <div
      class="{borderAll} col-span-2 p-[5dvi] lg:p-[2dvi] grid grid-cols-4 gap-[4dvi] lg:gap-[1.5dvi] lg:h-[15dvi] content-center  text-base_sm lg:text-base_lg"
    >
      <div class="col-span-2 lg:col-span-1">
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">75%</p>
        <p>Age 18-19</p>
      </div>
      <div class="col-span-2 lg:col-span-1">
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">79%</p>
        <p>Allowance Dependence</p>
      </div>
      <div class="col-span-2 lg:col-span-1">
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">37%</p>
        <p>Learning to Manage Money</p>
      </div>
      <div class="col-span-2 lg:col-span-1">
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">44%</p>
        <p>Conscious Effort to Learn Finances</p>
      </div>
    </div>
  </div>
  <Title
    label="Competitive Analysis"
    text_size="cap"
    sm_col_span="1"
    lg_col_span="1"
    text_col="col-span-1 lg:col-span-1"
    height="h-[15dvi] lg:h-[5dvi]"
    overide="lg:col-start-3"
  />
  <div class="flex justify-start w-fit lg:w-auto">
    <IconBox>
      <svelte:component this={building} />
    </IconBox>
  </div>
  <div
    class="{borderAll} col-span-2 lg:col-span-3 p-[5dvi] lg:p-[2dvi] grid lg:grid-cols-3 gap-[4dvi] lg:gap-[1.5dvi] lg:h-[15dvi] content-center h-[75dvi] text-base_sm lg:text-base_lg bg-white bg-opacity-70"
  >
    <div>
      <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">MoneyBhai</p>
      <p>Limited Structured Learning Paths</p>
      <p>Less Youth-Focused Content</p>
    </div>
    <div>
      <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">Sensibull</p>
      <p>Advanced Focus</p>
      <p>Limited Educational Focus</p>
    </div>
    <div>
      <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">
        NSE Pathshala
      </p>
      <p>Potential Complexity</p>
      <p>Not Specifically Youth-Targeted</p>
    </div>
  </div>
</div>
<div class="flex lg:hidden justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi]">
  <IconBox>
    <svelte:component this={alert2} />
  </IconBox>
</div>
<Title
  label="Problem Statment"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1  lg:mt-[5dvi]"
/>
<Body
  label="Young Indian adults (18-25) want to invest but lack knowledge and confidence. Existing solutions are complex and intimidating, creating a need for a user-friendly, gamified, and educational platform."
  sm_col_span="4"
  lg_col_span="2"
  text_col="col-span-2 lg:col-span-1"
  height="h-[30dvi] lg:h-[10dvi]"
  align="content-center"
  overide="lg:mt-[5dvi]"
/>
<div class=" justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] hidden lg:flex">
  <IconBox>
    <svelte:component this={alert2} />
  </IconBox>
</div>
<div class="flex justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi]">
  <IconBox>
    <svelte:component this={brush} />
  </IconBox>
</div>
<Title
  label="Design"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="2"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 bg-white bg-opacity-70"
/>
<Body
  label="Our solution, INVST, is a user-friendly, gamified, and culturally-sensitive stock market simulation app designed specifically for young adults in India (18-25) with limited financial literacy. It aims to empower them to overcome their fear of the market and gain the confidence to invest for their future through interactive learning modules, virtual trading, and a supportive community."
  sm_col_span="4"
  lg_col_span="2"
  text_col="col-span-2 lg:col-span-1"
  height="h-[45dvi] lg:h-[10dvi]"
  align="content-center"
/>
<Title
  label="User Flows / Wireframes"
  text_size="h2"
  height="h-[30dvi] lg:h-[5dvi]"
  lg_col_span="2"
  sm_col_span="4"
  overide="lg:col-start-1 mt-[15dvi] lg:mt-[5dvi]"
/>
<div class="lg:hidden justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] ">
  <IconBox>
    <svelte:component this={door} />
  </IconBox>
</div>
<Title
  label="Onboarding"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide="lg:col-start-1 lg:mt-[5dvi]"
/>
<div class="{borderAll} h-[15dvi] lg:h-[5dvi] lg:mt-[5dvi] flex px-[5dvi] lg:px-[2dvi] text-base_sm lg:text-base_lg items-center col-span-4 lg:col-span-1">
  <p>Welcome the user and set the stage for their investment journey.</p>
</div>
<div class="lg:flex justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] hidden">
  <IconBox>
    <svelte:component this={door} />
  </IconBox>
</div>
<div
  class="{borderAll} col-span-4 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/pmh1QBbHlHdnHjtav0vVYg/Onboarding?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>
<div class="lg:hidden justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] ">
  <IconBox>
    <svelte:component this={case1} />
  </IconBox>
</div>
<Title
  label="Portfolio / Watchlist"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide="lg:col-start-1 lg:mt-[5dvi]"
/>
<div class="{borderAll} h-[15dvi] lg:h-[5dvi] lg:mt-[5dvi] flex px-[5dvi] lg:px-[2dvi] text-base_sm lg:text-base_lg items-center col-span-4 lg:col-span-1">
  <p>A central hub for users to track their virtual investments and manage their watchlist.</p>
</div>
<div class="lg:flex justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] hidden">
  <IconBox>
    <svelte:component this={case1} />
  </IconBox>
</div>
<div
  class="{borderAll} col-span-4 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/hIrcIeT8r7jM06GJZv4K2K/Portfolio_Watchlist?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>
<div class="lg:hidden justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] ">
  <IconBox>
    <svelte:component this={gift} />
  </IconBox>
</div>
<Title
  label="Rewards"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide="lg:col-start-1 lg:mt-[5dvi]"
/>
<div class="{borderAll} h-[15dvi] lg:h-[5dvi] lg:mt-[5dvi] flex px-[5dvi] lg:px-[2dvi] text-base_sm lg:text-base_lg items-center col-span-4 lg:col-span-1">
  <p>Motivate users to engage with the platform, complete modules, and achieve milestones.</p>
</div>
<div class="lg:flex justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] hidden">
  <IconBox>
    <svelte:component this={gift} />
  </IconBox>
</div>
<div
  class="{borderAll} col-span-4 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/hIrcIeT8r7jM06GJZv4K2K/Portfolio_Watchlist?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>
<div class="lg:hidden justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] ">
  <IconBox>
    <svelte:component this={map} />
  </IconBox>
</div>
<Title
  label="Discovery"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide="lg:col-start-1 lg:mt-[5dvi]"
/>
<div class="{borderAll} h-[15dvi] lg:h-[5dvi] lg:mt-[5dvi] flex px-[5dvi] lg:px-[2dvi] text-base_sm lg:text-base_lg items-center col-span-4 lg:col-span-1">
  <p>A curated exploration of the stock market to expand knowledge and build confidence.</p>
</div>
<div class="lg:flex justify-start w-fit lg:w-auto mt-[15dvi] lg:mt-[5dvi] hidden">
  <IconBox>
    <svelte:component this={map} />
  </IconBox>
</div>
<div
  class="{borderAll} col-span-4 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/5nnV6QoGjOaRD48lVgL9N7/Discovery?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>


<Title
  label="Design System"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 mt-[15dvi] lg:mt-[5dvi]"
/>
<Body
  label="To create a calming and welcoming experience for our psychologically sensitive clients, we crafted a design system that prioritized soft gradients, serene color palettes, and a clean, readable typeface. This approach ensured a visual language that fostered a sense of comfort and ease during the intake process."
  sm_col_span="4"
  lg_col_span="2"
  text_col="col-span-2 lg:col-span-1"
  height="h-auto lg:h-[10dvi]"
  align="content-center"
  overide="bg-white bg-opacity-70 lg:mt-[5dvi]"
/>
<div class="mt-[15dvi] lg:mt-[5dvi] flex col-start-1 w-fit lg:w-full">
  <IconBox>
    <svelte:component this={font} />
  </IconBox>
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] lg:flex hidden col-start-3 w-fit lg:w-full ">
  <IconBox>
    <svelte:component this={color} />
  </IconBox>
</div>
<div
  class="{borderAll} lg:col-start-1 h-[60dvi] lg:h-[20dvi] col-span-4 lg:col-span-2"
>
  <enhanced:img
    class="object-contain h-full mx-auto bg-white bg-opacity-70"
    src="$lib/images/invst/type.svg"
    alt="Type System"
  />
</div>
<div class="mt-[15dvi] lg:mt-[5dvi]  lg:hidden col-start-1 w-fit lg:w-full ">
  <IconBox>
    <svelte:component this={color} />
  </IconBox>
</div>
<div
  class="p-[5dvi] lg:p-[2dvi] col-span-4 lg:col-span-1 bg-[#1c1c1c] {borderAll} h-[60dvi] lg:h-[20dvi]"
>
  <p class="text-cap_sm lg:text-cap_lg font-bold text-white">#1c1c1c</p>
</div>
<div
  class="p-[5dvi] lg:p-[2dvi] col-span-4 lg:col-span-1 bg-[#ffffff] {borderAll} h-[60dvi] lg:h-[20dvi]"
>
  <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#ffffff</p>
</div>
<div class="col-span-4 lg:col-span-2">
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#fff239] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#fff239</p>
  </div>
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#a774ff] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#a774ff</p>
  </div>
</div>
<div class="col-span-4 lg:col-span-1">
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#39ee6c] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#39ee6c</p>
  </div>
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#ff6969] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#ff6969</p>
  </div>
</div>
<div class="col-span-4 lg:col-span-1">
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#5096ff] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#5096ff</p>
  </div>
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#ff9447] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#ff9447</p>
  </div>
</div>
<div class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:col-span-2 grid grid-cols-2  items-end content-end">
  <div class=" flex w-fit lg:w-full justify-end lg:col-start-2">
    <IconBox>
      <svelte:component this={door} />
    </IconBox>
  </div>
  <Title
  label="Onboarding"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1"
/>
<Body
  label="Welcome users to a world of possibilities! Engage them with energetic visuals that make learning about investing exciting and accessible."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  height="h-[30dvi] lg:h-[10dvi]"
/>
</div>
<div class="{borderAll} lg:mt-[5dvi] col-span-4 lg:col-span-2 h-[120dvi] lg:h-[40dvi]">
  <div class="h-full mx-auto overflow-hidden">
    <video
      autoplay
      muted
      loop
      class="mx-auto h-full overflow-hidden border-white border-2"
    >
      <source src={onboarding} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



<div
  class="col-span-4 lg:col-span-4 flex flex-row flex-wrap gap-[2dvi] lg:gap-[1.5dvi] justify-evenly {borderAll} p-[5dvi] lg:p-[2dvi]  lg:h-[35dvi]"
>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-1.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-2.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-3.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-4.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-5.svg"
      alt="Type System"
    />
  </div>
</div>


<div class="col-span-4 lg:col-span-2 grid grid-cols-2 items-end content-end mt-[15dvi] lg:mt-[5dvi]">
  <div class=" flex w-fit lg:w-full lg:col-start-2 justify-end">
    <IconBox>
      <svelte:component this={case1} />
    </IconBox>
  </div>
  <Title
  label="Portfolio / watch list"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1"
/>
<Body
  label="This is where users can confidently track their virtual investments and watchlist, building a sense of control and familiarity before transitioning to real-world trading."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  height="h-[30dvi] lg:h-[10dvi]"
/>
</div>
<div class="{borderAll} lg:mt-[5dvi] col-span-4 lg:col-span-2 h-[120dvi] lg:h-[40dvi]">
  <div class="h-full mx-auto overflow-hidden">
    <video
      autoplay
      muted
      loop
      class="mx-auto h-full overflow-hidden border-white border-2"
    >
      <source src={portfolio} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



<div
  class="col-span-4 lg:col-span-4 flex flex-row flex-wrap gap-[2dvi] lg:gap-[1.5dvi] justify-evenly {borderAll} p-[5dvi] lg:p-[2dvi]  lg:h-[40dvi]"
>
  <div class="lg:h-full lg:flex-initial flex-grow">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-6.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-7.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-8.svg"
      alt="Type System"
    />
  </div>
</div>

<div class="col-span-4 lg:col-span-2 grid grid-cols-2 items-end content-end">
  <div class=" flex w-fit lg:w-full lg:col-start-2 justify-end">
    <IconBox>
      <svelte:component this={map} />
    </IconBox>
  </div>
  <Title
  label="Discovery"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1"
/>
<Body
  label="Dive into the world of investing! Explore curated modules that break down key concepts, guiding users through the fundamentals of the market with confidence."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  height="h-[30dvi] lg:h-[10dvi]"
/>
</div>
<div class="{borderAll} lg:mt-[5dvi] col-span-4 lg:col-span-2 h-[120dvi] lg:h-[40dvi]">
  <div class="h-full mx-auto overflow-hidden">
    <video
      autoplay
      muted
      loop
      class="mx-auto h-full overflow-hidden border-white border-2"
    >
      <source src={discover} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



<div
  class="col-span-4 lg:col-span-4 flex flex-row flex-wrap gap-[2dvi] lg:gap-[1.5dvi] justify-evenly {borderAll} p-[5dvi] lg:p-[2dvi]  lg:h-[40dvi]"
>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-11.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-12.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-13.svg"
      alt="Type System"
    />
  </div>
</div>
<div
  class="col-span-4 lg:col-span-4 flex flex-row flex-wrap gap-[2dvi] lg:gap-[1.5dvi] justify-evenly {borderAll} p-[5dvi] lg:p-[2dvi] h-full lg:h-[40dvi]"
>
<div class="lg:h-full">
  <enhanced:img
    class="object-contain h-full mx-auto bg-black"
    src="$lib/images/invst/comp-16.svg"
    alt="Type System"
  />
</div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-14.svg"
      alt="Type System"
    />
  </div>
  <div class="lg:h-full">
    <enhanced:img
      class="object-contain h-full mx-auto bg-black"
      src="$lib/images/invst/comp-15.svg"
      alt="Type System"
    />
  </div>
  
</div>
<div class="col-span-4 lg:col-span-2 grid grid-cols-2">
  <div class="{borderAll} mt-[15dvi] lg:mt-[5dvi] col-span-4 lg:col-span-2 h-[120dvi] lg:h-[40dvi]">
    <div class="h-full mx-auto overflow-hidden">
      <video
        autoplay
        muted
        loop
        class="mx-auto h-full overflow-hidden border-white border-2"
      >
        <source src={auth} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <Title
    label="Auth"
    text_size="h2"
    sm_col_span="4"
    lg_col_span="1"
    height="h-[15dvi] lg:h-[5dvi]"
    overide="lg:col-start-1"
  />
  <div class=" flex w-fit lg:w-full lg:col-start-2 justify-start">
    <IconBox>
      <svelte:component this={security} />
    </IconBox>
  </div>
</div>
<div class="col-span-4 lg:col-span-2 grid grid-cols-2">
  <div class="{borderAll} mt-[15dvi] lg:mt-[5dvi] col-span-4 lg:col-span-2 h-[120dvi] lg:h-[40dvi]">
    <div class="h-full mx-auto overflow-hidden">
      <video
        autoplay
        muted
        loop
        class="mx-auto h-full overflow-hidden border-white border-2"
      >
        <source src={reward} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <Title
    label="Reward"
    text_size="h2"
    sm_col_span="4"
    lg_col_span="1"
    height="h-[15dvi] lg:h-[5dvi]"
    overide="lg:col-start-1"
  />
  <div class=" flex w-fit lg:w-full lg:col-start-2 justify-start">
    <IconBox>
      <svelte:component this={gift} />
    </IconBox>
  </div>
</div>




<div class="col-span-4 lg:col-span-2 mt-[15dvi] lg:mt-[5dvi] {borderAll} h-">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/invst/mockup-1.jpg"
    alt="Type System"
  />
</div>
<div class="col-span-4 lg:col-span-2 mt-[15dvi] lg:mt-[5dvi] {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/invst/mockup-2.jpg"
    alt="Type System"
  />
</div>
<div class="col-span-4 lg:col-span-4 mt-[15dvi] lg:mt-[5dvi] {borderAll}">
  <iframe title="prototype" class="h-[800px] lg:h-[1100px] w-full" src="https://embed.figma.com/proto/nglRc5zHddZYOyaHvhZ4MA/UX_Course_Sem5?page-id=388%3A1716&node-id=388-2746&node-type=frame&viewport=739%2C786%2C0.2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=388%3A2746&embed-host=share" allowfullscreen></iframe>
</div>

<div class="mt-[30dvi] lg:mt-[10dvi] flex justify-end w-fit lg:w-full">
  <IconBox>
    <svelte:component this={learn} />
  </IconBox>
</div>
<Body
  label="This project taught us the power of user-centered design. By listening to the anxieties and aspirations of young Indian investors, we realized that building confidence and knowledge was key to unlocking their potential. INVST became more than just an app— it became a gateway to financial empowerment, proving that learning can be both engaging and effective."
  sm_col_span="4"
  lg_col_span="2"
  align="content-center"
  
  text_col="col-span-2 lg:col-span-1"
  height="h-auto lg:h-[10dvi]"
  overide="lg:mt-[10dvi]"
/>

