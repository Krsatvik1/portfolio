<script>
  import { borderAll } from "$lib/commonClasses.js";
  import { onMount } from "svelte";
  import Title from "$lib/components/Title.svelte";
  import Body from "$lib/components/Body.svelte";
  import Button from "$lib/components/Button.svelte";
  import onboarding from "$lib/images/invst/onboarding.webm";
  import auth from "$lib/images/invst/auth.webm";
  import discover from "$lib/images/invst/discover.webm";
  import portfolio from "$lib/images/invst/portfolio.webm";
  import reward from "$lib/images/invst/reward.webm";

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
        UI UX / MOBILE APP / CLASSROOM ASSIGNMENT
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

<Title
  label="Roles"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  height="h-[15dvi] lg:h-[5dvi]"
  marginT={true}
/>
<div class="hidden lg:col-span-3 lg:block"></div>
<Body
  label="I was involved in conducting user interviews and surveys to understand the target audience's needs and pain points. You also likely conducted competitive analysis, researching existing stock market platforms to identify opportunities for differentiation."
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

<div class="hidden lg:col-span-1 lg:block"></div>
<Title
  label="RESEARCH"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  marginT={true}
/>

<div
  class="{borderAll} text-base_sm lg:text-base_lg lg:col-span-3 p-[5dvi] lg:p-[2dvi] gap-[5dvi] lg:gap-[2.5dvi] col-span-4 lg:h-[30dvi] h-[150dvi] grid grid-cols-1 lg:grid-cols-3 content-stretch"
>
  <div class="flex flex-col">
    <div>
      <div
        class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]"
      >
        Process
      </div>
    </div>

    <ol
      class="list-disc list-inside text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0"
    >
      <li>Defining the Problem</li>
      <li>Interviews</li>
      <li>Surveys</li>
      <li>Analyzing</li>
      <li>Competitive Analysis</li>
      <li>Affinity Mapping</li>
    </ol>
  </div>
  <div class="flex flex-col justify-between">
    <div>
      <div
        class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]"
      >
        Young adults in India Perspective
      </div>
      <p>
        the target audience perspective emphasized the need for a user-friendly,
        educational, and engaging platform that addressed their specific needs
        and challenges. It highlighted the importance of providing guidance,
        building confidence, and creating a supportive learning environment to
        encourage participation in the stock market.
      </p>
    </div>
  </div>

  <div class="flex flex-col justify-between">
    <div
      class="justify-self-end text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0"
    >
      <p>Motivated by Financial Gains</p>
      <p>Frustrated by Complex Existing Solutions</p>
      <p>Seeking Educational Resources</p>
      <p>Drawn to Gamified and Engaging Learning</p>
      <p>Seeking Opportunities for Growth</p>
    </div>
  </div>
</div>
<div class="grid col-span-4 lg:col-span-4 grid-cols-2 lg:grid-cols-4">
  <div
    class="{borderAll} text-cap_sm lg:text-cap_lg font-bold lg:col-span-2 p-[5dvi] lg:p-[2dvi] gap-[5dvi] lg:gap-[2.5dvi] col-span-2 lg:h-[10dvi] h-[30dvi] content-stretch"
  >
    "Young Indian adults (18-25) want to invest but lack knowledge and
    confidence. Existing solutions are complex and intimidating, creating a need
    for a user-friendly, gamified, and educational platform."
  </div>
  <div class="lg:col-start-1 col-span-2 grid grid-cols-2">
    <Title
      label="Interview Insights"
      text_size="cap"
      height="h-[15dvi] lg:h-[5dvi]"
      lg_col_span="1"
      sm_col_span="1"
    />
    <div
      class="{borderAll} col-span-2 p-[5dvi] lg:p-[2dvi] flex flex-col gap-[4dvi] lg:gap-[1.5dvi] lg:h-[15dvi] h-[45dvi] text-base_sm lg:text-base_lg"
    >
      <p>
        "I'm really interested in investing, but I don't know where to start.
        All the platforms I've seen are too complicated."
      </p>
      <p>
        "I'm afraid of making mistakes and losing money. I don't want to invest
        until I feel more confident."
      </p>
      <p>
        "I wish there were more resources that explained things in a simpler
        way, maybe with some games or interactive tools."
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
    <div
      class="{borderAll} col-span-2 p-[5dvi] lg:p-[2dvi] grid grid-cols-4 gap-[4dvi] lg:gap-[1.5dvi] lg:h-[15dvi] content-center h-[30dvi] text-base_sm lg:text-base_lg"
    >
      <div>
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">75%</p>
        <p>Age 18-19</p>
      </div>
      <div>
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">79%</p>
        <p>Allowance Dependence</p>
      </div>
      <div>
        <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans']">37%</p>
        <p>Learning to Manage Money</p>
      </div>
      <div>
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
    overide="lg:hidden"
  />
  <div
    class="{borderAll} col-span-2 lg:col-span-3 p-[5dvi] lg:p-[2dvi] grid lg:grid-cols-3 gap-[4dvi] lg:gap-[1.5dvi] lg:h-[15dvi] content-center h-[75dvi] text-base_sm lg:text-base_lg"
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
  <Title
    label="Competitive Analysis"
    text_size="cap"
    sm_col_span="1"
    lg_col_span="1"
    text_col="col-span-1 lg:col-span-1"
    height="h-[15dvi] lg:h-[5dvi]"
    overide="hidden lg:block"
  />
</div>

<Title
  label="Design"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  marginT={true}
/>
<Title
  label="User Flows / Wireframes"
  text_size="h2"
  height="h-[30dvi] lg:h-[5dvi]"
  lg_col_span="2"
  sm_col_span="4"
  overide="lg:col-start-1"
/>
<Title
  label="Onboarding"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide=""
/>
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

<div class="lg:col-span-4 grid lg:grid-cols-4 col-span-4">
  <div class="lg:col-span-2 grid lg:grid-cols-2">
    <Title
      label="Portfolio / Watchlist"
      text_size="cap"
      height="h-[15dvi] lg:h-[5dvi]"
      lg_col_span="1"
      sm_col_span="4"
      overide=""
    />
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
  </div>
  <div class="lg:col-span-2 grid lg:grid-cols-2">
    <Title
      label="Rewards"
      text_size="cap"
      height="h-[15dvi] lg:h-[5dvi]"
      lg_col_span="1"
      sm_col_span="4"
      overide=""
    />
    <div
      class="{borderAll} col-span-4 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
    >
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1);"
        width="100%"
        height="100%"
        src="https://embed.figma.com/board/EDENrf4UQ9VatoZs8JyiRF/Reward?node-id=0-1&embed-host=share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>
<Title
  label="Discovery"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide=""
/>
<div
  class="{borderAll} col-span-4 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[40dvi] h-[120dvi] w-full"
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
  overide="lg:col-start-1"
  marginT={true}
/>

<div
  class="{borderAll} lg:col-start-1 h-[60dvi] lg:h-[20dvi] col-span-4 lg:col-span-2"
>
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/invst/type.svg"
    alt="Type System"
  />
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

<Title
  label="Onboarding"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1"
  marginT={true}
/>
<div class="col-span-3 hidden lg:block"></div>
<div
  class="col-span-4 lg:col-span-3 flex flex-row flex-wrap gap-[2dvi] lg:gap-[1.5dvi] {borderAll} p-[5dvi] lg:p-[2dvi] h-[240dvi] lg:h-[30dvi]"
>
  <div>
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-1.svg"
      alt="Type System"
    />
  </div>
  <div>
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-2.svg"
      alt="Type System"
    />
  </div>
  <div>
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-3.svg"
      alt="Type System"
    />
  </div>
  <div>
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-4.svg"
      alt="Type System"
    />
  </div>
  <div>
    <enhanced:img
      class="object-contain h-full mx-auto"
      src="$lib/images/invst/comp-5.svg"
      alt="Type System"
    />
  </div>
</div>
<div class="{borderAll} col-span-4 lg:col-span-1 h-[90dvi] lg:h-[30dvi]">
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
<div class="col-span-4 lg:col-span-1">
  <Title
    label="Auth"
    text_size="h2"
    sm_col_span="4"
    lg_col_span="1"
    height="h-[30dvi] lg:h-[10dvi]"
    overide="lg:col-start-1"
  />
  <div class="{borderAll} h-[90dvi] lg:h-[30dvi]">
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
</div>
<div class="col-span-4 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3">
  <Title
    label="Portfolio / watch list"
    text_size="h2"
    sm_col_span="2"
    lg_col_span="1"
    height="h-[30dvi] lg:h-[10dvi]"
    overide="lg:col-start-1"
  />
  <div
    class="col-span-2 lg:col-span-3 lg:col-start-1 grid grid-cols-2 lg:grid-cols-3"
  >
    <div
      class="col-span-2 flex lg:flex-row flex-col {borderAll} h-[180dvi] lg:h-[30dvi] p-[5dvi] lg:p-[2dvi] space-x-[4dvi] lg:space-x-[1.5dvi] space-y-[4dvi] lg:space-y-[1.5dvi]"
    >
      <div class="justify-between flex flex-col overflow-hidden">
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-6.svg"
            alt="Type System"
          />
        </div>
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-7.svg"
            alt="Type System"
          />
        </div>
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-8.svg"
            alt="Type System"
          />
        </div>
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-9.svg"
            alt="Type System"
          />
        </div>
      </div>
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/invst/comp-10.svg"
          alt="Type System"
        />
      </div>
    </div>
    <div class="{borderAll} col-span-2 lg:col-span-1 h-[90dvi] lg:h-[30dvi]">
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
  </div>
</div>
<div class="col-span-4 grid-cols-1 lg:col-span-3 grid lg:grid-cols-3">
  <Title
    label="Discover"
    text_size="h2"
    sm_col_span="4"
    lg_col_span="1"
    height="h-[30dvi] lg:h-[10dvi]"
    overide="lg:col-start-1"
  />
  <div class="lg:col-span-3 lg:col-start-1 grid lg:grid-cols-3">
    <div
      class="col-span-2 flex flex-col {borderAll} h-[60dvi] lg:h-[30dvi] p-[5dvi] lg:p-[2dvi] space-y-[4dvi] lg:space-y-[1.5dvi]"
    >
      <div class="flex space-x-[4dvi] lg:space-x-[1.5dvi]">
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-11.svg"
            alt="Type System"
          />
        </div>
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-12.svg"
            alt="Type System"
          />
        </div>
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-13.svg"
            alt="Type System"
          />
        </div>
      </div>
      <div class="flex space-x-[4dvi] lg:space-x-[1.5dvi]">
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-14.svg"
            alt="Type System"
          />
        </div>
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-15.svg"
            alt="Type System"
          />
        </div>
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/invst/comp-16.svg"
            alt="Type System"
          />
        </div>
      </div>
    </div>
    <div class="{borderAll} col-span-2 lg:col-span-1 h-[90dvi] lg:h-[30dvi]">
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
  </div>
</div>
<div class="col-span-4 lg:col-span-1">
  <Title
    label="Reward"
    text_size="h2"
    sm_col_span="4"
    lg_col_span="1"
    height="h-[30dvi] lg:h-[10dvi]"
    overide="lg:col-start-1"
  />
  <div class="{borderAll} h-[90dvi] lg:h-[30dvi]">
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
</div>
<div class="col-span-4 lg:col-span-2 {borderAll} h-">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/invst/mockup-1.jpg"
    alt="Type System"
  />
</div>
<div class="col-span-4 lg:col-span-2 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/invst/mockup-2.jpg"
    alt="Type System"
  />
</div>
