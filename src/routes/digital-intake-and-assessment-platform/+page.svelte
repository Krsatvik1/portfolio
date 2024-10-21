<script>
  import { borderAll } from "$lib/commonClasses.js";
  import { onMount } from "svelte";
  import Journey from "$lib/components/Journey.svelte";
  import Title from "$lib/components/Title.svelte";
  import Body from "$lib/components/Body.svelte";
  import Button from "$lib/components/Button.svelte";
  import IconBox from "$lib/components/IconBox.svelte";
  import brush from "$lib/components/icons/brush.svelte";
  import code from "$lib/components/icons/code.svelte";
  import research from "$lib/components/icons/research.svelte";
  import tie from "$lib/components/icons/tie.svelte";
  import alert1 from "$lib/components/icons/alert1.svelte";
  import resource from "$lib/components/icons/resource.svelte";
  import route from "$lib/components/icons/route.svelte";
  import sad from "$lib/components/icons/sad.svelte";
  import flow1 from "$lib/components/icons/flow1.svelte";
  import flow2 from "$lib/components/icons/flow2.svelte";
  import checkList from "$lib/components/icons/checkList.svelte";
  import font from "$lib/components/icons/font.svelte";
  import color from "$lib/components/icons/color.svelte";
  import puzzle from "$lib/components/icons/puzzle.svelte";
  import patient from "$lib/components/icons/patient.svelte";
  import manager from "$lib/components/icons/manager.svelte";
  import learn from "$lib/components/icons/learn.svelte";
  import ExternalLink from "$lib/components/icons/external-link.svelte";
</script>

<svelte:head>
  <title>KUMAR SATVIK | Digital Intake and Assessment Platform</title>
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
        UI UX / Web Dev / NDA
      </div>
      <div class="text-h1_sm lg:text-h1_lg font-['ringold-sans']">
        Digital Intake and Assessment Platform
      </div>
      <p class="text-base_sm lg:text-base_lg lg:max-w-[30dvi]">
        A mental health clinic's intake process needed an overhaul. We mapped
        their workflow, identified key features, and designed a user-friendly
        platform. Built with Svelte and Tailwind CSS, it automates tasks,
        improves data insights, and delivers a seamless experience for clients
        and administrators.
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
        label="Shrey Banthia"
        sm_col_span="2"
        lg_col_span="1"
        text_col="col-span-1 lg:col-span-1"
        height="h-[15dvi] lg:h-[5dvi]"
      />
    </div>
  </div>
  <div
    class="{borderAll} bg-white col-span-2 order-2 lg:order-2 lg:h-[40dvi] h-[90dvi] lg:col-span-4"
  >
    <div class="h-full overflow-hidden">
      <enhanced:img
        class="object-contain h-[calc(100%+2dvi)] object-center my-auto mx-auto"
        src="$lib/images/clinical/cover.jpg"
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
  <IconBox>
    <svelte:component this={code} />
  </IconBox>
</div>
<Title
  label="Roles"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  height="h-[15dvi] lg:h-[5dvi]"
  overide="mt-[15dvi] lg:mt-[5dvi]"
/>
<div class="lg:mt-[5dvi] lg:flex hidden">
  <IconBox>
    <svelte:component this={research} />
  </IconBox>
  <IconBox>
    <svelte:component this={brush} />
  </IconBox>
  <IconBox>
    <svelte:component this={code} />
  </IconBox>
</div>
<Body
  overide="lg:col-start-1"
  label="Conducted user research, including stakeholder interviews and process flow analysis, to identify key requirements and pain points for a new digital intake system."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  heading="true"
  headingText="Researcher"
  height="h-[35dvi] lg:h-[15dvi]"
/>
<Body
  label="Translated research insights into wireframes, built a design system for the web application, and created comprehensive dev handover documentation."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  heading="true"
  headingText="Designer"
  height="h-[35dvi] lg:h-[15dvi]"
/>
<Body
  label="Developed the web app using Svelte, implementing design systems, dynamic UI components, backend API integrations, Business logic to algorithm and ensuring security and hosting."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  heading="true"
  headingText="Developer"
  height="h-[35dvi] lg:h-[15dvi]"
/>
<div class="flex justify-end lg:col-start-1 mt-[15dvi] lg:mt-[5dvi] w-fit lg:w-auto">
  <IconBox>
    <svelte:component this={tie} />
  </IconBox>
</div>
<div
  class="col-span-4 lg:col-span-1 h-[15dvi] lg:h-[10dvi] {borderAll}  lg:mt-[5dvi] font-['ringold-sans'] text-h2_sm lg:text-h2_lg p-[5dvi] bg-white bg-opacity-70 lg:p-[2dvi] flex items-center"
>
  <p>Client’s Problem</p>
</div>
<div
  class="col-span-4 lg:col-span-2 h-[30dvi] lg:h-[10dvi] {borderAll}  lg:mt-[5dvi] text-base_sm lg:text-base_lg p-[5dvi] lg:p-[2dvi] flex items-center bg-white bg-opacity-70"
>
  <p>
    Our client’s existing intake process was cumbersome, riddled with manual
    tasks, and lacking a user-friendly online component. This negatively
    impacted both patients experience and administrative efficiency.
  </p>
</div>
<div class="grid col-span-4 lg:col-span-2 lg:grid-cols-2 mt-[15dvi] lg:mt-[5dvi]">
  <Title
    label="Limitations"
    text_size="h2"
    sm_col_span="2"
    lg_col_span="1"
    height="h-[15dvi] lg:h-[5dvi]"
  />
  <div class=" flex order-first lg:order-none">
    <IconBox>
      <svelte:component this={alert1} />
    </IconBox>
  </div>
  <Body
    label="Due to privacy constraints, we were unable to directly interact with patients or conduct user testing, To overcome this challenge, we relied heavily on stakeholder interviews with the Director and the Intake Coordinator to gain valuable insights into the client experience and administrative workflows."
    sm_col_span="2"
    lg_col_span="2"
    text_col="col-span-2 lg:col-span-1"
    height="h-auto lg:h-[10dvi]"
    align="content-center"
    overide="bg-white bg-opacity-70"
  />
</div>
<div class="grid col-span-4 lg:col-span-2 lg:grid-cols-2 mt-[15dvi] lg:mt-[5dvi]">
  <div class=" justify-end flex">
    <IconBox>
      <svelte:component this={resource} />
    </IconBox>
  </div>
  <Title
    label="Resources"
    text_size="h2"
    sm_col_span="2"
    lg_col_span="1"
    height="h-[15dvi] lg:h-[5dvi]"
  />

  <Body
    label="We had to carefully prioritize features and categorize them as 'in-scope' and 'out-of-scope' based on available resources and time for development and the client's overall project goals."
    sm_col_span="2"
    lg_col_span="1"
    text_col="col-span-2 lg:col-span-1"
    height="h-[30dvi] lg:h-[10dvi]"
    align="content-center"
    overide="lg:col-start-2"
  />
</div>
<div class=" lg:hidden mt-[30dvi]">
  <IconBox>
    <svelte:component this={route} />
  </IconBox>
</div>
<Body
  label="We mapped a new intake process, prioritizing automation for efficiency. Our design aimed for a user-friendly experience, incorporating the client's specific requests for a smoother journey."
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
  label="Research"
  step="1"
  date="Jul 1st - Jul 15th"
  overide="lg:col-start-1"
/>
<Journey label="Design Phase" step="2" date="Jul 16th - Aug 30th" overide="" />
<Journey label="Development" step="3" date="Aug 30th - Nov 20th" overide="" />
<Journey label="Testing" step="4" date="Nov 20th - Nov 30th" overide="" />
<Journey
  label="Deployment and Handover"
  step="5"
  date="Dec 1st - Dec 10th"
  overide=""
/>
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
      <li>Stakeholder Interview</li>
      <li>User Persona Development</li>
      <li>Process Flow Mapping</li>
      <li>Scoping features</li>
    </ol>
  </div>
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] lg:hidden">
  <IconBox>
    <svelte:component this={sad} />
  </IconBox>
</div>
<Title
  label="Pain Points"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[15dvi] lg:h-[5dvi]"
  overide="mt-[15dv] lg:mt-[5dvi]"
/>
<div class="mt-[15dvi] lg:mt-[5dvi] hidden lg:block">
  <IconBox>
    <svelte:component this={sad} />
  </IconBox>
</div>
<div
  class="{borderAll} text-base_sm lg:text-base_lg lg:col-span-2 p-[5dvi] lg:p-[2dvi] gap-[5dvi] lg:gap-[2.5dvi] col-span-4 lg:h-[10dvi] h-[30dvi] grid grid-cols-1 lg:grid-cols-1 content-stretch lg:col-start-1 bg-white bg-opacity-70"
>
  <div class="flex flex-col w-full">
    <div>
      <div
        class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]"
      >
        Admin
      </div>
    </div>

    <ul
      class="list-disc list-inside text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0 lg:columns-2 w-full"
    >
      <li>Automating Tasks</li>
      <li>Centralized Platform</li>
      <li>Automated Notifications</li>
    </ul>
  </div>
</div>
<div
  class="{borderAll} text-base_sm lg:text-base_lg lg:col-span-2 p-[5dvi] lg:p-[2dvi] gap-[5dvi] lg:gap-[2.5dvi] col-span-4 lg:h-[10dvi]  grid grid-cols-1 lg:grid-cols-1 content-stretch bg-white bg-opacity-70"
>
  <div class="flex flex-col w-full">
    <div>
      <div
        class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]"
      >
        Patient
      </div>
    </div>

    <ul
      class="list-disc list-inside text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0 lg:columns-2 w-full"
    >
      <li>User-Friendly Design</li>
      <li>Mobile Accessibility</li>
      <li>Progress Tracking</li>
      <li>Notifications for updates</li>
    </ul>
  </div>
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex justify-end col-start-2 w-fit lg:w-auto">
  <IconBox>
    <svelte:component this={flow1} />
  </IconBox>
</div>
<Title
  label="Current Process Flow"
  text_size="cap"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[15dvi] lg:h-[5dvi]"
  overide="mt-[15dv] lg:mt-[5dvi]"
/>

<div class="grid col-span-4 lg:col-span-4 grid-cols-2 lg:grid-cols-4">
  <div
    class="{borderAll} col-span-2 lg:col-span-3 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
  >
    <iframe
      style="border: 1px solid rgba(0, 0, 0, 0.1);"
      width="100%"
      height="100%"
      src="https://embed.figma.com/board/iTAEAUEn7R3KgiRbD13Dez/Current-Intake-Process-flow?node-id=0-1&embed-host=share"
      allowfullscreen
    ></iframe>
  </div>
  <Body
    label="The clinic's intake process was a tangled web of manual forms, paper records, and disjointed systems, creating frustration for both clients and administrators. It was inefficient, time-consuming, and lacked a smooth flow."
    sm_col_span="2"
    lg_col_span="1"
    text_col="col-span-1 lg:col-span-1"
    heading="true"
    headingText="Intake"
    height="h-[45dvi] lg:h-[15dvi]"
  />
  <div
    class="{borderAll} col-span-2 lg:col-span-3 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
  >
    <iframe
      style="border: 1px solid rgba(0, 0, 0, 0.1);"
      width="100%"
      height="100%"
      src="https://embed.figma.com/board/J2ahj15KJpCVSj5rL0cT8A/Current-Digital-Diagnostic-Tests-Process-flow?node-id=0-1&embed-host=share"
      allowfullscreen
    ></iframe>
  </div>
  <Body
    label="Sending digital diagnostic tests was a logistical nightmare. The current system relied on a cumbersome combination of manual data entry, paper records, and email exchanges, leading to delays and inaccuracies. "
    sm_col_span="2"
    lg_col_span="1"
    text_col="col-span-1 lg:col-span-1"
    heading="true"
    headingText="Digital Diagnostic Tests"
    height="h-[45dvi] lg:h-[15dvi]"
  />
</div>
<div
  class="mt-[15dvi] lg:mt-[5dvi] content-start grid lg:grid-cols-2 lg:col-span-2 lg:hidden col-span-4"
>
  <div class="">
    <IconBox>
      <svelte:component this={checkList} />
    </IconBox>
  </div>
  <Title
    label="In Scope"
    text_size="cap"
    sm_col_span="4"
    lg_col_span="1"
    height="h-[15dvi] lg:h-[5dvi]"
    overide="lg:col-start-1"
  />
  <Body
    label="I carefully prioritized features based on client requirements and available resources, categorizing them as 'in-scope' and 'out-of-scope.' This strategic approach led to the development of a new, streamlined process flow that incorporated key functionalities such as automated account creation, online questionnaire submission, and integrated report generator. "
    sm_col_span="2"
    lg_col_span="2"
    text_col
    height="h-[45dvi] lg:h-[10dvi]"
    overide="bg-white bg-opacity-70"
  />
</div>
<div
  class="{borderAll} col-span-4 lg:col-span-1 p-[5dvi] lg:p-[2dvi] flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[35dvi] h-[105dvi] w-full lg:mt-[5dvi] bg-white bg-opacity-70"
>
  <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
    Functional Features in Scope
  </div>
  <div
    class="text-base_sm lg:text-base_lg space-y-[1.6dvi] lg:space-y-[0.5dvi]"
  >
    <p>Account creation</p>
    <p>Questionnaire submission</p>
    <p>Client Intake Form</p>
    <p>Digital Diagnostic Tests</p>
    <p>Progress Tracking</p>
    <p>Feedback and Reporting</p>
    <p>Audio integration</p>
    <p>Client Management</p>
    <p>Reporting</p>
    <p>Client Intake</p>
    <p>User Roles and Permissions</p>
    <p>Questionnaire Management</p>
    <p>Test Management</p>
  </div>
</div>
<div
  class="{borderAll} p-[5dvi] lg:p-[2dvi] flex-col col-span-4 lg:col-span-1 justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[25dvi] h-[60dvi] w-full lg:mt-[5dvi] bg-white bg-opacity-70"
>
  <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
    Non-Functional Features in Scope
  </div>
  <div
    class="text-base_sm lg:text-base_lg space-y-[1.6dvi] lg:space-y-[0.5dvi]"
  >
    <p>User-friendly</p>
    <p>Mobile-accessible</p>
    <p>Secure</p>
    <p>Accessible</p>
    <p>Performance</p>
    <p>Error Handling</p>
    <p>Chunking of Form</p>
  </div>
</div>
<div
  class="mt-[15dvi] lg:mt-[5dvi] content-start lg:grid-cols-2 lg:col-span-2 hidden lg:grid"
>
  <div class="">
    <IconBox>
      <svelte:component this={checkList} />
    </IconBox>
  </div>
  <Title
    label="In Scope"
    text_size="cap"
    sm_col_span="2"
    lg_col_span="1"
    height="h-[15dvi] lg:h-[5dvi]"
    overide="lg:col-start-1"
  />
  <Body
    label="I carefully prioritized features based on client requirements and available resources, categorizing them as 'in-scope' and 'out-of-scope.' This strategic approach led to the development of a new, streamlined process flow that incorporated key functionalities such as automated account creation, online questionnaire submission, and integrated report generator. "
    sm_col_span="2"
    lg_col_span="2"
    text_col
    height="h-[45dvi] lg:h-[10dvi]"
    overide="bg-white bg-opacity-70"
  />
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex justify-end col-start-2 w-fit lg:w-auto">
  <IconBox>
    <svelte:component this={flow2} />
  </IconBox>
</div>
<Title
  label="Suggested Process Flow"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide="lg:col-start-3 lg:mt-[5dvi]"
/>
<div
  class="{borderAll} col-span-4 lg:col-span-3 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/oZbtOhVcZEBEukirtagBko/Suggested-Intake-Process-flow?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>
<Body
  label="We untangled the intake process, weaving a new path for a smooth and efficient experience. The new flow utilizes automation for key tasks, streamlining data collection and management. This creates a more user-friendly journey, simplifying communication and access to vital mental health services."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  heading="true"
  headingText="Intake"
  height="h-[45dvi] lg:h-[20dvi]"
/>
<div
  class="{borderAll} col-span-4 lg:col-span-3 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/fGwINn1NjTuhEiHmYcW5d2/Suggested-Digital-Diagnostic-Tests-Process-flow?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>
<Body
  label="We streamlined the digital diagnostic process, eliminating the cumbersome manual tasks and email exchanges. The new system facilitates a smooth and accurate flow, using automated tools for data entry, record management, and test administration."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  heading="true"
  headingText="Digital Diagnostic Tests"
  height="h-[45dvi] lg:h-[15dvi]"
/>
<div class="mt-[30dvi] lg:mt-[15dvi] flex w-fit lg:w-full lg:hidden">
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
  overide="lg:col-start-1 bg-white bg-opacity-70 lg:mt-[10dvi]"
/>
<div class="mt-[30dvi] lg:mt-[15dvi] lg:flex hidden">
  <IconBox>
    <svelte:component this={brush} />
  </IconBox>
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
<div
  class="{borderAll} bg-white bg-opacity-70 h-[60dvi] lg:h-[20dvi] col-span-4"
>
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/type.svg"
    alt="Type System"
  />
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex col-start-1 w-fit lg:w-full">
  <IconBox>
    <svelte:component this={color} />
  </IconBox>
</div>
<div
  class="p-[5dvi] lg:p-[2dvi] col-span-4 lg:col-span-1 bg-[#00A886] lg:col-start-1 {borderAll} h-[60dvi] lg:h-[20dvi]"
>
  <p class="text-cap_sm lg:text-cap_lg font-bold text-white">#00A886</p>
</div>
<div class="col-span-4 lg:col-span-1">
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#7ACABA] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#7ACABA</p>
  </div>
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#02755E] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-white">#02755E</p>
  </div>
</div>
<div class="grid grid-cols-2 col-span-4 lg:col-span-2">
  <div
    class="p-[5dvi] col-span-2 flex justify-between lg:p-[2dvi] bg-[linear-gradient(90deg,#00A886_0%,#ECEDF2_100%)] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-white">#00A886</p>
    <p class="text-cap_sm lg:text-cap_lg font-bold text-black">#ECEDF2</p>
  </div>
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#015645] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-white">#015645</p>
  </div>
  <div
    class="p-[5dvi] lg:p-[2dvi] bg-[#000000] {borderAll} h-[30dvi] lg:h-[10dvi]"
  >
    <p class="text-cap_sm lg:text-cap_lg font-bold text-white">#000000</p>
  </div>
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex col-start-1 w-fit lg:w-full">
  <IconBox>
    <svelte:component this={puzzle} />
  </IconBox>
</div>
<div
  class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[180dvi] lg:h-[30dvi] col-span-4 lg:col-span-2 bg-white bg-opacity-70 lg:col-start-1 "
>
  <p class="text-cap_sm lg:text-cap_lg mb-[4dvi] lg:mb-[1.5dvi] font-bold">
    Patient / Questionnaire Cards
  </p>
  <div
    class="flex lg:flex-row flex-col gap-[4dvi] justify-center lg:gap-[1.5dvi]"
  >
    <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-1.svg"
          alt="Type System"
        />
      </div>
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-2.svg"
          alt="Type System"
        />
      </div>
      <p class="text-base_sm lg:text-base_lg text-center">Desktop Card</p>
    </div>
    <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-4.svg"
          alt="Type System"
        />
      </div>
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-5.svg"
          alt="Type System"
        />
      </div>
      <p class="text-base_sm lg:text-base_lg text-center">Desktop Card</p>
    </div>
  </div>
</div>
<div class="col-span-4 lg:col-span-2">
  <div
    class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[135dvi] lg:h-[20dvi] col-span-2 bg-white bg-opacity-70"
  >
    <p class="text-cap_sm lg:text-cap_lg mb-[4dvi] lg:mb-[1.5dvi] font-bold">
      Admin / Follow-up info Cards
    </p>
    <div
      class="flex lg:flex-row flex-col gap-[4dvi] justify-center lg:gap-[1.5dvi]"
    >
      <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/clinical/comp-3.svg"
            alt="Type System"
          />
        </div>
        <p class="text-base_sm lg:text-base_lg text-center">
          Awaiting Follow-ups
        </p>
      </div>
      <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/clinical/comp-6.svg"
            alt="Type System"
          />
        </div>
        <p class="text-base_sm lg:text-base_lg text-center">
          Follow-ups done today
        </p>
      </div>
    </div>
  </div>
  <div
    class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[45dvi] lg:h-[10dvi] col-span-2 bg-white bg-opacity-70"
  >
    <p class="text-cap_sm lg:text-cap_lg mb-[4dvi] lg:mb-[1.5dvi] font-bold">
      Patient / Audio Playback controller
    </p>
    <div
      class="flex lg:flex-row flex-col gap-[4dvi] justify-center lg:gap-[1.5dvi]"
    >
      <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/clinical/comp-7.svg"
            alt="Type System"
          />
        </div>
        <p class="text-base_sm lg:text-base_lg text-center">Desktop</p>
      </div>
      <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
        <div>
          <enhanced:img
            class="object-contain h-full mx-auto"
            src="$lib/images/clinical/comp-8.svg"
            alt="Type System"
          />
        </div>
        <p class="text-base_sm lg:text-base_lg text-center">Mobile</p>
      </div>
    </div>
  </div>
</div>
<div
  class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[60dvi] lg:h-[15dvi] col-span-4 lg:col-span-2 bg-white bg-opacity-70"
>
  <p class="text-cap_sm lg:text-cap_lg mb-[4dvi] lg:mb-[1.5dvi] font-bold">
    Input Group
  </p>
  <div
    class="flex lg:flex-row flex-col gap-[4dvi] justify-center lg:gap-[1.5dvi]"
  >
    <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-9.svg"
          alt="Type System"
        />
      </div>
      <p class="text-base_sm lg:text-base_lg text-center">Desktop</p>
    </div>
    <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-10.svg"
          alt="Type System"
        />
      </div>
      <p class="text-base_sm lg:text-base_lg text-center">Mobile</p>
    </div>
  </div>
</div>
<div
  class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[180dvi] lg:h-[30dvi] col-span-4 lg:col-span-2 bg-white bg-opacity-70"
>
  <p class="text-cap_sm lg:text-cap_lg mb-[4dvi] lg:mb-[1.5dvi] font-bold">
    Modal
  </p>
  <div
    class="flex lg:flex-row flex-col gap-[4dvi] justify-center lg:gap-[1.5dvi]"
  >
    <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-11.svg"
          alt="Type System"
        />
      </div>
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-12.svg"
          alt="Type System"
        />
      </div>
      <p class="text-base_sm lg:text-base_lg text-center">Desktop</p>
    </div>
    <div clas="flex flex-col gap-[4dvi] lg:gap-[1.5dvi]">
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-13.svg"
          alt="Type System"
        />
      </div>
      <div>
        <enhanced:img
          class="object-contain h-full mx-auto"
          src="$lib/images/clinical/comp-14.svg"
          alt="Type System"
        />
      </div>
      <p class="text-base_sm lg:text-base_lg text-center">Mobile</p>
    </div>
  </div>
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex self-end w-fit lg:w-full lg:hidden">
  <IconBox>
    <svelte:component this={patient} />
  </IconBox>
</div>
<Title
  label="Patient Screens"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 lg:mt-[5dvi]"

/>
<div class="mt-[15dvi] lg:mt-[5dvi] hidden lg:flex self-end">
  <IconBox>
    <svelte:component this={patient} />
  </IconBox>
</div>
<div class="col-span-3 hidden lg:block"></div>
<div class="col-span-4 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/mockup-1.jpg"
    alt="Type System"
  />
</div>

<div class="col-span-4 lg:col-span-2 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/mockup-2.jpg"
    alt="Type System"
  />
</div>
<div class="col-span-4 lg:col-span-2 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/mockup-3.jpg"
    alt="Type System"
  />
</div>
<div class="col-span-4 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/mockup-4.jpg"
    alt="Type System"
  />
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] flex self-end w-fit lg:w-full lg:hidden">
  <IconBox>
    <svelte:component this={manager} />
  </IconBox>
</div>
<Title
  label="Admin Screens"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1 lg:mt-[5dvi]"

/>
<div class="mt-[15dvi] lg:mt-[5dvi] hidden lg:flex self-end">
  <IconBox>
    <svelte:component this={manager} />
  </IconBox>
</div>
<div class="col-span-3 hidden lg:block"></div>
<div class="col-span-4 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/mockup-5.jpg"
    alt="Type System"
  />
</div>

<div class="col-span-4 lg:col-span-2 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/mockup-6.jpg"
    alt="Type System"
  />
</div>
<div class="col-span-4 lg:col-span-2 {borderAll}">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/mockup-7.jpg"
    alt="Type System"
  />
</div>
<div class="mt-[15dvi] lg:mt-[5dvi] self-end lg:hidden">
  <IconBox>
    <svelte:component this={code} />
  </IconBox>
</div>
<Title
  label="Developing"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:mt-[10dvi] bg-white bg-opacity-70"
/>
<div class="mt-[15dvi] lg:mt-[5dvi] lg:flex self-end hidden">
  <IconBox>
    <svelte:component this={code} />
  </IconBox>
</div>
<Body
  label="Currently developing the digital intake platform. The process involves building Svelte components, converting the design system to Tailwind CSS, managing states, integrating with backend APIs and databases, and ensuring secure hosting."
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-2 lg:col-span-1"
  height="h-[35dvi] lg:h-[15dvi]"
  overide="lg:col-start-1"
/>
<div
  class="{borderAll} col-span-4 lg:col-span-3 flex flex-wrap text-h2_sm lg:text-h2_lg p-[5dvi] font-['ringold-sans'] lg:px-[2dvi] gap-[4dvi] lg:gap-[1.5dvi] lg:h-[15dvi] h-[105dvi]"
>
  <p>HTML</p>
  <p>CSS</p>
  <p>JavaScript</p>
  <p>Tailwindcss</p>
  <p>Sveltekit</p>
  <p>Mongodb</p>
  <p>AWS</p>
  <p>Claude-3.5</p>
  <p>Claude-DEv(Cline)</p>
</div>
<div class="mt-[30dvi] lg:mt-[10dvi] flex justify-end w-fit lg:w-full">
  <IconBox>
    <svelte:component this={learn} />
  </IconBox>
</div>
<Body
  label="This project was a testament to the importance of conducting thorough user research, prioritizing key features, and focusing on user experience. By strategically mapping out the process, we identified opportunities to streamline workflows, improve client communication, and deliver a solution that addressed both administrative and client-centric needs."
  sm_col_span="4"
  lg_col_span="2"
  align="content-center"
  
  text_col="col-span-2 lg:col-span-1"
  height="h-auto lg:h-[10dvi]"
  overide="lg:mt-[10dvi]"
/>
