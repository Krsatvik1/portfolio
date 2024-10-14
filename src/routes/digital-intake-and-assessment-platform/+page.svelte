<script>
  import { borderAll } from "$lib/commonClasses.js";
  import { onMount } from "svelte";
  import Title from "$lib/components/Title.svelte";
  import Body from "$lib/components/Body.svelte";
  import Button from "$lib/components/Button.svelte";

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
        Optimize the intake process for a mental health clinic by understanding
        existing workflows and identifying key requirements for both patients
        and administrators. The project focused on designing a digital platform
        that balances user-friendliness, efficiency, and security, while
        remaining within resource and time constraints.
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
  headingText="Engineer"
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
      <li>Stakeholder Interview</li>
      <li>User Persona Development</li>
      <li>Process Flow Mapping</li>
      <li>Scoping features</li>
    </ol>
  </div>
  <div class="flex flex-col justify-between">
    <div>
      <div
        class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]"
      >
        Admin Perspective
      </div>
      <p>
        The administrative process heavily relied on manual data entry, creating
        reports, and sending emails, resulting in a significant workload for the
        admin team. This manual process was time-consuming, prone to errors, and
        lacked a seamless integration between different systems (website,
        Filemaker, Google Calendar).
      </p>
    </div>

    <div
      class="justify-self-end text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0"
    >
      <p>Automating Tasks</p>
      <p>Centralized Platform</p>
      <p>Automated Notifications</p>
    </div>
  </div>

  <div class="flex flex-col justify-between">
    <div>
      <div
        class="uppercase text-cap_sm lg:text-cap_lg font-bold mb-[2dvi] lg:mb-[0.5dvi]"
      >
        Patient Perspective
      </div>
      <p>
        Clients expressed frustration with the existing online questionnaire
        platform (Gravity Forms), particularly those less tech-savvy. The
        platform lacked a user-friendly interface, progress tracking, and
        automated feedback mechanisms, leading to client frustration and a
        negative intake experience.
      </p>
    </div>

    <div
      class="justify-self-end text-base_sm lg:text-base_lg font-bold space-y-[1dvi] lg:space-y-[0.5dvi] mt-[2dvi] lg:mt-0"
    >
      <p>User-Friendly Design</p>
      <p>Progress Tracking</p>
      <p>Assigment Notifications</p>
      <p>Mobile Accessibility</p>
    </div>
  </div>
</div>
<div class="grid col-span-4 lg:col-span-4 grid-cols-2 lg:grid-cols-4">
  <div
    class="{borderAll} text-cap_sm lg:text-cap_lg font-bold lg:col-span-2 p-[5dvi] lg:p-[2dvi] gap-[5dvi] lg:gap-[2.5dvi] col-span-2 lg:h-[10dvi] h-[30dvi] content-stretch"
  >
    "After analyzing the stakeholder interviews, it became clear: this project
    was about designing a new process flow that streamlined their intake process
    while remaining within their resource constraints."
  </div>
  <Title
    label="Current Process Flow"
    text_size="cap"
    height="h-[15dvi] lg:h-[5dvi]"
    lg_col_span="1"
    sm_col_span="1"
    marginT={true}
  />
  <div
    class="{borderAll} col-span-2 lg:col-span-3 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
  >
    <iframe
      style="border: 1px solid rgba(0, 0, 0, 0.1);"
      width="100%"
      height="100%"
      src="https://embed.figma.com/board/FHJ0wYopUzywsqUlc1cm9Q/Current-Intake-Process-flow?node-id=1-44&embed-host=share"
      allowfullscreen
    ></iframe>
  </div>
  <Body
    label=""
    sm_col_span="2"
    lg_col_span="1"
    text_col="col-span-1 lg:col-span-1"
    heading="true"
    headingText="Intake"
    height="h-[15dvi] lg:h-[5dvi]"
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
    label=""
    sm_col_span="2"
    lg_col_span="1"
    text_col="col-span-1 lg:col-span-1"
    heading="true"
    headingText="Digital Diagnostic Tests"
    height="h-[15dvi] lg:h-[5dvi]"
  />
  <div
    class="{borderAll} p-[5dvi] lg:p-[2dvi] flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[35dvi] h-[105dvi] w-full"
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
    class="{borderAll} p-[5dvi] lg:p-[2dvi] flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[25dvi] h-[60dvi] w-full"
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
</div>
<Title
  label="Suggested Process Flow"
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="1"
  sm_col_span="4"
  overide="lg:col-start-3"
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
  label=""
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  heading="true"
  headingText="Intake"
  height="h-[15dvi] lg:h-[5dvi]"
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
  label=""
  sm_col_span="4"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  heading="true"
  headingText="Digital Diagnostic Tests"
  height="h-[15dvi] lg:h-[5dvi]"
/>
<Title
  label="Design"
  text_size="h1"
  sm_col_span="2"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  marginT={true}
/>

<Title
  label="Design System"
  text_size="h2"
  sm_col_span="2"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1"
  marginT={true}
/>

<div class="{borderAll} h-[60dvi] lg:h-[20dvi] col-span-4">
  <enhanced:img
    class="object-contain h-full mx-auto"
    src="$lib/images/clinical/type.svg"
    alt="Type System"
  />
</div>
<div
  class="p-[5dvi] lg:p-[2dvi] col-span-4 lg:col-span-1 bg-[#00A886] {borderAll} h-[60dvi] lg:h-[20dvi]"
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

<div
  class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[180dvi] lg:h-[30dvi] col-span-4 lg:col-span-2"
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
    class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[135dvi] lg:h-[20dvi] col-span-2"
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
    class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[45dvi] lg:h-[10dvi] col-span-2"
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
  class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[60dvi] lg:h-[15dvi] col-span-4 lg:col-span-2"
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
  class="{borderAll} p-[5dvi] lg:p-[2dvi] h-[180dvi] lg:h-[30dvi] col-span-4 lg:col-span-2"
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
<Title
  label="Patient Screens"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1"
  marginT={true}
/>
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
<Title
  label="Admin Screens"
  text_size="h2"
  sm_col_span="4"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
  overide="lg:col-start-1"
  marginT={true}
/>
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
<Title
  label="Developing"
  text_size="h1"
  sm_col_span="4"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  marginT={true}
/>
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
