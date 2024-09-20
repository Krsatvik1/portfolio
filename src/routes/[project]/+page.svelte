<script>
  import { borderAll } from "$lib/commonClasses.js";
  import { onMount } from "svelte";
  import Title from "$lib/components/Title.svelte";
  import Body from "$lib/components/Body.svelte";
  import Button from "$lib/components/Button.svelte";
  let onClick = () => {
        window.location = x
    };
  let mob_index = 0;
  let wireframe_index = 0;
  let desk_index = 0;
  onMount(() => {
    const wireframe = document.querySelectorAll(".wireframe");
    const mob = document.querySelectorAll(".mob");
    const desk = document.querySelectorAll(".desk");

    function toggleHiddenClass(x, y) {
      console.log(y);
      x[y].classList.toggle("hidden");
      y = (y + 1) % x.length;
      x[y].classList.toggle("hidden");
    }
    setInterval(() => toggleHiddenClass(wireframe, wireframe_index), 5000);
    setInterval(() => toggleHiddenClass(mob, mob_index), 5000);
    setInterval(() => toggleHiddenClass(desk, desk_index), 5000);
  });

  import ExternalLink from "$lib/components/icons/external-link.svelte";
</script>
<svelte:head>
  <title>KUMAR SATVIK | Projects</title>
</svelte:head>
<div class="col-span-2"></div>
<div class="lg:col-span-4 col-span-2 grid grid-cols-2 lg:grid-cols-4">
  <div
    class="{borderAll} order-2 lg:order-1 lg:col-span-3 px-[5dvi] lg:px-[2dvi] flex-col justify-center items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex col-span-2 lg:h-[35dvi] h-[90dvi]"
  >
    <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
      UI UX / Web Dev / NDA
    </div>
    <div class="text-h1_sm lg:text-h1_lg font-['ringold-sans']">
      Digital Intake and Assessment Platform
    </div>
    <p class="text-base_sm lg:text-base_lg lg:max-w-[30dvi]">
      Optimize the intake process for a mental health clinic by understanding
      existing workflows and identifying key requirements for both patients and
      administrators. The project focused on designing a digital platform that
      balances user-friendliness, efficiency, and security, while remaining
      within resource and time constraints.
    </p>
  </div>
  <div
    class="{borderAll} col-span-2 order-1 lg:order-2 lg:h-[35dvi] h-[90dvi] lg:col-span-1"
  >
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
        class="object-cover h-full"
        src="$lib/images/high-fide/cover.jpg"
        alt="Cover"
      />
    </div>
  </div>
</div>

<Title
  label="Roles"
  text_size="h2"
  sm_col_span="2"
  lg_col_span="1"
  height="h-[15dvi] lg:h-[5dvi]"
  marginT={true}
/>
<div class="hidden lg:col-span-3 lg:block"></div>
<Body
  label="Conducted user research, including stakeholder interviews and process flow analysis, to identify key requirements and pain points for a new digital intake system."
  sm_col_span="2"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  heading="true"
  headingText="Researcher"
  height="h-[35dvi] lg:h-[15dvi]"
/>
<Body
  label="Translated research insights into wireframes, built a design system for the web application, and created comprehensive dev handover documentation."
  sm_col_span="2"
  lg_col_span="1"
  text_col="col-span-1 lg:col-span-1"
  heading="true"
  headingText="Designer"
  height="h-[35dvi] lg:h-[15dvi]"
/>
<Body
  label="Developed the web app using Svelte, implementing design systems, dynamic UI components, backend API integrations, Business logic to algorithm and ensuring security and hosting."
  sm_col_span="2"
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
  sm_col_span="2"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  marginT={true}
/>
<div
  class="{borderAll} text-base_sm lg:text-base_lg lg:col-span-3 p-[5dvi] lg:p-[2dvi] gap-[5dvi] lg:gap-[2.5dvi] col-span-2 lg:h-[30dvi] h-[150dvi] grid grid-cols-1 lg:grid-cols-3 content-stretch"
>
  <p>
    Our research focused on understanding the existing intake process at a
    mental health clinic and identifying key requirements for a new, digital
    system. We conducted in-depth interviews with the Director (a Clinical
    Psychologist) and the Clinical Intake Coordinator to gain a comprehensive
    understanding of their perspectives and challenges.
  </p>
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
<div class="grid col-span-2 lg:col-span-3 grid-cols-1 lg:grid-cols-3">
  <div>
    <Title
      label="Stakeholder interview"
      text_size="h2"
      sm_col_span="1"
      lg_col_span="1"
      height="h-[30dvi] lg:h-[10dvi]"
    />
    <Body
      label="To effectively design a digital intake system for a mental health clinic, we needed to deeply understand the existing process and its challenges from the perspective of both the admin team and the Director (a Clinical Psychologist). We conducted in-depth interviews using a structured approach to ensure we gathered comprehensive insights. Due to limitations, we were unable to directly interact with patients or conduct user testing."
      sm_col_span="1"
      lg_col_span="1"
      text_col="col-span-1 lg:col-span-1"
      height="h-[45dvi] lg:h-[25dvi]"
    />
    <Title
      label="Interview Scripts"
      text_size="h2"
      sm_col_span="1"
      lg_col_span="1"
      height="h-[30dvi] lg:h-[10dvi]"
    />
    <div
      class="{borderAll} px-[5dvi] lg:px-[2dvi] flex-col justify-center items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[20dvi] h-[45dvi] w-full"
    >
      <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
        Expecting Answers
      </div>
      <div
        class="text-base_sm lg:text-base_lg space-y-[1.6dvi] lg:space-y-[0.5dvi]"
      >
        <p>Clinic Background & Demographics</p>
        <p>Existing Intake Process</p>
        <p>Expectations for a New System</p>
        <p>Specific Concerns</p>
      </div>
    </div>
    <Title
      label="Analysis"
      text_size="h2"
      sm_col_span="1"
      lg_col_span="1"
      height="h-[30dvi] lg:h-[10dvi]"
    />
    <div
      class="{borderAll} px-[5dvi] lg:px-[2dvi] flex-col justify-center items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[15dvi] h-[45dvi] w-full"
    >
      <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
        Parameters
      </div>
      <div
        class="text-base_sm lg:text-base_lg gap-y-[2dvi] lg:gap-y-[0.6dvi] gap-x-[4dvi] lg:gap-x-[1dvi] flex flex-wrap"
      >
        <p>Goals</p>
        <p>Challenges</p>
        <p>Strengths</p>
        <p>Weakness</p>
        <p>Insignts</p>
        <p>Suggestions</p>
      </div>
    </div>
    <div
      class="{borderAll} p-[5dvi] lg:p-[2dvi] flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[75dvi] w-full"
    >
      <div
        class="text-base_sm lg:text-base_lg space-y-[1.6dvi] lg:space-y-[0.5dvi]"
      >
        <p>Digital Transformation is a Priority</p>
        <p>Focus on Client-Centricity</p>
        <p>Standardization and Automation</p>
        <p>Difficult Printed Questionnaire</p>
        <p>Lack of Standardized Assessments</p>
        <p>Limited Data Analysis</p>
        <p>Potential for Missed Opportunities</p>
        <p>Administrative Workload is a Major Issue</p>
        <p>Integration is Crucial</p>
        <p>Real-time Feedback is Essential</p>
        <p>Centralized Dashboard</p>
        <p>Fragmented Systems</p>
        <p>Automated Notifications</p>
      </div>
    </div>
  </div>
  <div>
    <Title
      label="User Persona Development"
      text_size="h2"
      sm_col_span="1"
      lg_col_span="1"
      height="h-[30dvi] lg:h-[10dvi]"
    />
    <Body
      label="To ensure the design of the new digital intake system met the unique needs of our target audience, we developed detailed user personas based on insights from our stakeholder interviews. We crafted two distinct personas representing the clinic's primary client demographics and one focusing on the clinical intake coordinator"
      sm_col_span="1"
      lg_col_span="1"
      text_col="col-span-1 lg:col-span-1"
      height="h-[45dvi] lg:h-[25dvi]"
    />
    <Body
      label="A busy professionals with limited time and a need for a streamlined, user-friendly experience. Her pain points included limited appointment availability, a time-consuming intake process, and a lack of clear information regarding costs and insurance coverage. She prioritizes ease of use on her phone."
      sm_col_span="1"
      lg_col_span="1"
      heading="true"
      headingText="Sarah, the Working Mom"
      text_col="col-span-1 lg:col-span-1"
      height="h-[45dvi] lg:h-[20dvi]"
    />
    <Body
      label="A young adult facing financial constraints and seeking affordable therapy options. He was also apprehensive about seeking mental health help due to stigma and desired a user-friendly platform with clear information about different therapy approaches."
      sm_col_span="1"
      lg_col_span="1"
      heading="true"
      headingText="John, the Recent Graduate"
      text_col="col-span-1 lg:col-span-1"
      height="h-[45dvi] lg:h-[20dvi]"
    />
    <Body
      label="A busy professional who manages the flow of new clients, juggling a heavy workload of manual tasks. She seeks a more automated system to streamline her responsibilities, reducing the time spent on repetitive data entry, report generation, and email communication. Emily desires a platform that provides real-time feedback on client progress, easing the burden of manually checking for completed questionnaires. She values a system that simplifies communication with both clients and therapists, particularly when multiple therapists are involved."
      sm_col_span="1"
      lg_col_span="1"
      heading="true"
      headingText="Emily, the Clinical Intake Coordinator"
      text_col="col-span-1 lg:col-span-1"
      height="h-[75dvi] lg:h-[30dvi]"
    />
  </div>
  <div>
    <Title
      label="Process Flow Mapping"
      text_size="h2"
      sm_col_span="1"
      lg_col_span="1"
      height="h-[30dvi] lg:h-[10dvi]"
    />
    <Body
      label="To ensure the design of the new digital intake system met the unique needs of our target audience, we developed detailed user personas based on insights from our stakeholder interviews. We crafted two distinct personas representing the clinic's primary client demographics and one focusing on the clinical intake coordinator"
      sm_col_span="1"
      lg_col_span="1"
      text_col="col-span-1 lg:col-span-1"
      height="h-[45dvi] lg:h-[25dvi]"
    />
    <Button onClick={()=>{onClick("https://www.figma.com/board/FHJ0wYopUzywsqUlc1cm9Q/Current-Intake-Process-flow?node-id=0-1&t=1Lqe68Xn1vATh2CC-1")}} label="Mapping " overide="mobi"
      ><svelte:component this={ExternalLink}/></Button
    >
    <Title
      label="Features/Functionalities"
      text_size="cap"
      height="h-[15dvi] lg:h-[5dvi]"
    />
    <div
      class="{borderAll} p-[5dvi] lg:p-[2dvi] flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[40dvi] h-[105dvi] w-full"
    >
      <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
        Functional Features
      </div>
      <div
        class="text-base_sm lg:text-base_lg space-y-[1.6dvi] lg:space-y-[0.5dvi]"
      >
        <p>Account creation</p>
        <p>Questionnaire submission</p>
        <p>Appointment scheduling</p>
        <p>Data reporting</p>
        <p>Therapist selection</p>
        <p>Billing integration</p>
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
        Non-Functional Features
      </div>
      <div
        class="text-base_sm lg:text-base_lg space-y-[1.6dvi] lg:space-y-[0.5dvi]"
      >
        <p>User-friendly</p>
        <p>Mobile-accessible</p>
        <p>Secure</p>
        <p>Accessible</p>
        <p>Advanced analytics</p>
        <p>Performance</p>
        <p>Scalability</p>
        <p>Error Handling</p>
        <p>Chunking of Form</p>
      </div>
    </div>
  </div>
</div>
<Title
  label="Design"
  text_size="h1"
  sm_col_span="2"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  marginT={true}
/>
<Body
  label="Through in-depth interviews, we meticulously mapped the clinic's intake process, identifying crucial insights and pain points. We then prioritized features based on client requirements and resources, crafting a new, streamlined process flow. Detailed wireframes visualized the platform's structure and interactions, followed by a comprehensive design system for a consistent visual experience. Finally, we created clear dev handover documentation to facilitate seamless collaboration with the development team."
  text_col="columns-1 lg:columns-2"
  height="h-[60dvi] lg:h-[15dvi]"
/>
<div class="hidden lg:block"></div>
<Title
  label="New Process Flow"
  text_size="h2"
  sm_col_span="2"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
/>
<div class="grid grid-cols-2 col-span-2">
  <Title
    label="IN SCOPE - Features/Functionalities"
    text_size="cap"
    height="h-[15dvi] lg:h-[5dvi]"
    lg_col_span="2"
  />
  <div
    class="{borderAll} col-span-2 lg:col-span-1 p-[5dvi] lg:p-[2dvi] flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[90dvi] w-full"
  >
    <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
      Functional Features
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
    class="{borderAll} col-span-2 lg:col-span-1 p-[5dvi] lg:p-[2dvi] flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
  >
    <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
      Non-Functional Features
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
  label="SUGGESTED Intake Process flow "
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="2"
/>
<div class="hidden lg:block lg:col-span-2"></div>
<div
  class="{borderAll} col-span-2 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/oZbtOhVcZEBEukirtagBko/Suggested-Intake-Process-flow?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>

<Title
  label="SUGGESTED Digital Diagnostic Tests Process flow "
  text_size="cap"
  height="h-[15dvi] lg:h-[5dvi]"
  lg_col_span="2"
/>
<div class="hidden lg:block lg:col-span-2"></div>
<div
  class="{borderAll} col-span-2 lg:col-span-4 flex-col justify-start items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex lg:h-[30dvi] h-[60dvi] w-full"
>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="100%"
    height="100%"
    src="https://embed.figma.com/board/fGwINn1NjTuhEiHmYcW5d2/Suggested-Digital-Diagnostic-Tests-Process-flow?node-id=0-1&embed-host=share"
    allowfullscreen
  ></iframe>
</div>
<Title
  label="Wireframing"
  text_size="h2"
  sm_col_span="2"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
/>
<Body
  label="We created detailed wireframes to visualize the platform's structure and interactions, ensuring a user-friendly experience for both administrators and clients. The wireframes were designed to be responsive, accessible, and intuitive, with a focus on clear information hierarchy and seamless navigation."
  lg_col_span="2"
  sm_col_span="2"
  text_col="columns-1 lg:columns-1"
  height="h-[45dvi] lg:h-[10dvi]"
/>
<div class="hidden lg:col-span-1 lg:block"></div>
<div class="{borderAll} col-span-2 lg:col-span-4">
  <enhanced:img
    class=" wireframe w-full"
    src="$lib/images/wireframes/Dashboard-1.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="hidden wireframe w-full"
    src="$lib/images/wireframes/Dashboard-2.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="hidden wireframe w-full"
    src="$lib/images/wireframes/Dashboard-3.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="hidden wireframe w-full"
    src="$lib/images/wireframes/Frame_2324.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="hidden wireframe w-full"
    src="$lib/images/wireframes/Dashboard.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="hidden wireframe w-full"
    src="$lib/images/wireframes/Signup-2.jpg"
    alt="Wireframes"
  />
</div>
<Title
  label="Design System"
  text_size="h2"
  sm_col_span="2"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
/>
<Body
  label="We developed a comprehensive design system to ensure a consistent visual experience across the platform. The design system included typography, color palettes, iconography, and UI components, providing clear guidelines for developers to implement the design accurately and efficiently."
  lg_col_span="2"
  sm_col_span="2"
  text_col="columns-1 lg:columns-1"
  height="h-[45dvi] lg:h-[10dvi]"
/>
<div class="hidden lg:col-span-1 lg:block"></div>
<div class="{borderAll} col-span-2 lg:col-span-4">
  <enhanced:img
    class="w-full"
    src="$lib/images/design_system.png"
    alt="Wireframes"
  />
</div>
<Title
  label="Final Screens"
  text_size="h2"
  sm_col_span="2"
  lg_col_span="1"
  height="h-[30dvi] lg:h-[10dvi]"
/>
<Body
  label="The final screens of the digital intake and assessment platform were designed to be user-friendly, accessible, and visually engaging. The platform's interface was optimized for both desktop and mobile devices, ensuring a seamless user experience across different screen sizes and devices."
  lg_col_span="2"
  sm_col_span="2"
  text_col="columns-1 lg:columns-1"
  height="h-[45dvi] lg:h-[10dvi]"
/>
<div class="hidden lg:col-span-1 lg:block"></div>
<div class="{borderAll} col-span-2 lg:col-span-3">
  <enhanced:img
    class="desk w-full"
    src="$lib/images/high-fide/desk-1.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="desk hidden w-full"
    src="$lib/images/high-fide/desk-2.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="desk hidden w-full"
    src="$lib/images/high-fide/desk-3.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="desk hidden w-full"
    src="$lib/images/high-fide/desk-4.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="desk hidden w-full"
    src="$lib/images/high-fide/desk-5.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="desk hidden w-full"
    src="$lib/images/high-fide/desk-6.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="desk hidden w-full"
    src="$lib/images/high-fide/desk-7.jpg"
    alt="Wireframes"
  />
</div>
<div class="{borderAll} col-span-2 lg:col-span-1">
  <enhanced:img
    class="mob w-full"
    src="$lib/images/high-fide/mob-1.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="mob hidden w-full"
    src="$lib/images/high-fide/mob-2.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="mob hidden w-full"
    src="$lib/images/high-fide/mob-3.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="mob hidden w-full"
    src="$lib/images/high-fide/mob-4.jpg"
    alt="Wireframes"
  />
  <enhanced:img
    class="mob hidden w-full"
    src="$lib/images/high-fide/mob-5.jpg"
    alt="Wireframes"
  />
</div>

<Title
  label="Under Development"
  text_size="h1"
  sm_col_span="2"
  lg_col_span="3"
  height="h-[30dvi] lg:h-[10dvi]"
  marginT={true}
/>
