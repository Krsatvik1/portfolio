<script>
  import WorkItem from "./WorkItem.svelte";
  import Title from "$lib/components/Title.svelte";
  import IconBox from "$lib/components/IconBox.svelte";
  import brush from "$lib/components/icons/brush.svelte";
  import code from "$lib/components/icons/code.svelte";
  import research from "$lib/components/icons/research.svelte";
  import manager from "$lib/components/icons/manager.svelte";
  import Eye from "$lib/components/icons/eye.svelte";
  import Web from "$lib/components/icons/web.svelte";
  import WebCode from "$lib/components/icons/webCode.svelte";
  import ai from "$lib/components/icons/ai.svelte";
  import learn from "$lib/components/icons/learn.svelte";
  import { borderAll } from "$lib/commonClasses.js";
  import britinfotech from "$lib/images/britinfotech/cover.webm";
  import massiveworks from "$lib/images/massiveworks/cover.webm";
  import parth from "$lib/images/parth/cover.webm";
  import adConept from "$lib/images/adconcept/cover.webm";
  import vr from "$lib/images/vr/cover.webm";

  function createMouseInteraction() {
    let sectionRef = null;
    let animateRef = null;
    let isMouseOver = false;
    let animationFrameId = null;

    function mapValue(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
    }

    function handleMouseMove(event) {
      if (!isMouseOver || !sectionRef || !animateRef) return;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const rect = sectionRef.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const limitX = mapValue(x, 0, animateRef.offsetWidth, -20, 20);
        const limitY = mapValue(y, 0, animateRef.offsetHeight, -20, 20);

        animateRef.style.transform = `translate(${limitX}px, ${limitY}px)`;
        animateRef.style.opacity = "1";
        animateRef.style.border = "1px solid #000000";
      });
    }

    function handleMouseOut() {
      isMouseOver = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (animateRef) {
        animateRef.style.opacity = "1";
        animateRef.style.transform = "translate(0px, 0px)";
        animateRef.style.transition = "transform 0.1s, opacity 0.5s";
      }
    }

    return {
      bind: (section, animate) => {
        sectionRef = section;
        animateRef = animate;
      },
      mouseover: () => {
        isMouseOver = true;
      },
      mouseout: handleMouseOut,
      mousemove: handleMouseMove,
    };
  }

  const digitalIntakeInteraction = createMouseInteraction();
  const invstTradeInteraction = createMouseInteraction();
  const britInfotechInteraction = createMouseInteraction();
  const massiveWorksInteraction = createMouseInteraction();
  const parthInteraction = createMouseInteraction();
  const creativeCodingInteraction = createMouseInteraction();
  const zineInteraction = createMouseInteraction();
  const adConceptInteraction = createMouseInteraction();
  const vrInteraction = createMouseInteraction();

  let digitalIntakeSectionRef;
  let digitalIntakeAnimateRef;
  let invstTradeSectionRef;
  let invstTradeAnimateRef;
  let britInfotechSectionRef;
  let britInfotechAnimateRef;
  let massiveWorksSectionRef;
  let massiveWorksAnimateRef;
  let parthSectionRef;
  let parthAnimateRef;
  let creativeCodingSectionRef;
  let creativeCodingAnimateRef;
  let zineSectionRef;
  let zineAnimateRef;
  let adConceptSectionRef;
  let adConceptAnimateRef;
  let vrSectionRef;
  let vrAnimateRef;
</script>

<svelte:head>
  <title>KUMAR SATVIK</title>
</svelte:head>

<Title
  label="Product Design / Development"
  text_size="h1"
  height="h-[45dvi] lg:h-[15dvi]"
  overide="mt-[30dvi] lg:mt-[10dvi] lg:col-span-4 col-span-4"
/>

<a
  href="/digital-intake-and-assessment-platform"
  bind:this={digitalIntakeSectionRef}
  on:mouseover={() => {
    digitalIntakeInteraction.mouseover();
    digitalIntakeInteraction.bind(
      digitalIntakeSectionRef,
      digitalIntakeAnimateRef
    );
  }}
  on:mouseout={digitalIntakeInteraction.mouseout}
  on:mousemove={digitalIntakeInteraction.mousemove}
  on:focus={digitalIntakeInteraction.mouseover}
  on:blur={digitalIntakeInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="{borderAll} lg:h-[40dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
        class="object-contain mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
        src="$lib/images/clinical/cover.jpg"
        alt="Type System"
      />
    </div>
  </div>
  <div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[35dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-0 duration-500 w-full absolute bottom-0 left-0"
      ></div>

      <div
        bind:this={digitalIntakeAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2024
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          DIGITAL INTAKE AND ASSESSMENT PLATFORM
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          UI UX / WEBAPP / NDA
        </div>
      </div>
    </div>
    <div class="flex w-fit">
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
  </div>
</a>
<a
  href="/invst-trade-simulator"
  bind:this={invstTradeSectionRef}
  on:mouseover={() => {
    invstTradeInteraction.mouseover();
    invstTradeInteraction.bind(invstTradeSectionRef, invstTradeAnimateRef);
  }}
  on:mouseout={invstTradeInteraction.mouseout}
  on:mousemove={invstTradeInteraction.mousemove}
  on:focus={invstTradeInteraction.mouseover}
  on:blur={invstTradeInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="order-2 lg:order-1">
    <div class="flex w-full justify-end">
      <IconBox>
        <svelte:component this={research} />
      </IconBox>
      <IconBox>
        <svelte:component this={brush} />
      </IconBox>
    </div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[25dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-0 duration-500 w-full absolute bottom-0 left-0"
      ></div>
      <div
        bind:this={invstTradeAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2023
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          INVST: TRADE SIMULATOR
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          MOBILE APP / UI Animation / CLASSROOM ASSIGNMENT
        </div>
      </div>
    </div>
  </div>
  <div class="{borderAll} lg:h-[30dvi] h-[75dvi] order-2 lg:order-2">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
        class="object-cover mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
        src="$lib/images/invst/cover.jpg"
        alt="Type System"
      />
    </div>
  </div>
</a>

<Title
  label="Web Development"
  text_size="h1"
  height="h-[45dvi] lg:h-[15dvi]"
  overide="mt-[30dvi] lg:mt-[10dvi] lg:col-span-4 col-span-4"
/>
<a
  href="https://britinfotech.com/"
  bind:this={britInfotechSectionRef}
  on:mouseover={() => {
    britInfotechInteraction.mouseover();
    britInfotechInteraction.bind(
      britInfotechSectionRef,
      britInfotechAnimateRef
    );
  }}
  on:mouseout={britInfotechInteraction.mouseout}
  on:mousemove={britInfotechInteraction.mousemove}
  on:focus={britInfotechInteraction.mouseover}
  on:blur={britInfotechInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="{borderAll} lg:h-[25dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden">
      <video
        class="object-cover object-left-top origin-top-left mx-auto transition-all duration-200 w-full"
        playsinline
        muted
        loop
        autoplay
        preload="auto"
      >
        <source src={britinfotech} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[20dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-0 duration-500 w-full absolute bottom-0 left-0"
      ></div>
      <div
        bind:this={britInfotechAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2023
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Britinfotech
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          UI Animation / Project Management / Web Development / Live
        </div>
      </div>
    </div>
    <div class="flex w-fit">
      <IconBox>
        <svelte:component this={manager} />
      </IconBox>
      <IconBox>
        <svelte:component this={code} />
      </IconBox>
    </div>
  </div>
</a>
<a
  href="https://massiveworks.krsatvik.xyz/"
  bind:this={massiveWorksSectionRef}
  on:mouseover={() => {
    massiveWorksInteraction.mouseover();
    massiveWorksInteraction.bind(
      massiveWorksSectionRef,
      massiveWorksAnimateRef
    );
  }}
  on:mouseout={massiveWorksInteraction.mouseout}
  on:mousemove={massiveWorksInteraction.mousemove}
  on:focus={massiveWorksInteraction.mouseover}
  on:blur={massiveWorksInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="order-2 lg:order-1">
    <div class="flex w-full justify-end">
      <IconBox>
        <svelte:component this={code} />
      </IconBox>
    </div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[25dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-0 duration-500 w-full absolute bottom-0 left-0"
      ></div>
      <div
        bind:this={massiveWorksAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2023
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Portfolio for Massive Works
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          UI Animation / Web Development / CMS
        </div>
      </div>
    </div>
  </div>
  <div class="{borderAll} lg:h-[30dvi] h-[75dvi] order-2 lg:order-2">
    <div class="h-full w-full overflow-hidden">
      <video
        class="object-cover object-center origin-top-left mx-auto transition-all duration-200 h-full"
        playsinline
        muted
        loop
        autoplay
        preload="auto"
      >
        <source src={massiveworks} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</a>
<a
  href="https://parthsuratwala.com/"
  bind:this={parthSectionRef}
  on:mouseover={() => {
    parthInteraction.mouseover();
    parthInteraction.bind(parthSectionRef, parthAnimateRef);
  }}
  on:mouseout={parthInteraction.mouseout}
  on:mousemove={parthInteraction.mousemove}
  on:focus={parthInteraction.mouseover}
  on:blur={parthInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="{borderAll} lg:h-[25dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden bg-black">
      <video
        class="object-cover object-center origin-top-left mx-auto transition-all duration-200 h-full"
        playsinline
        muted
        loop
        autoplay
        preload="auto"
      >
        <source src={parth} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <div>
    <div
      class="{borderAll} text-stone-900 relative transition-all duration-500 block h-[60dvi] lg:h-[20dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-10 duration-500 w-full absolute bottom-0 left-0"
      ></div>

      <div
        bind:this={parthAnimateRef}
        class="px-[5dvi] relative z-10 lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex bg-white"
      >
        <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">2023</div>
        <div
          class="pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Portfolio for Parth
        </div>
        <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">
          UI Animation / Web Development / CMS / Live
        </div>
      </div>
    </div>
    <div class="flex w-fit">
      <IconBox>
        <svelte:component this={code} />
      </IconBox>
    </div>
  </div>
</a>

<Title
  label="Visual Design"
  text_size="h1"
  height="h-[45dvi] lg:h-[15dvi]"
  overide="mt-[30dvi] lg:mt-[10dvi] lg:col-span-4 col-span-4"
/>
<a
  href="https://www.behance.net/gallery/213525891/Understanding-VR"
  bind:this={vrSectionRef}
  on:mouseover={() => {
    vrInteraction.mouseover();
    vrInteraction.bind(vrSectionRef, vrAnimateRef);
  }}
  on:mouseout={vrInteraction.mouseout}
  on:mousemove={vrInteraction.mousemove}
  on:focus={vrInteraction.mouseover}
  on:blur={vrInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="order-2 lg:order-1">
    <div class="flex w-full justify-end">
      <IconBox>
        <svelte:component this={brush} />
      </IconBox>
      <IconBox>
        <svelte:component this={code} />
      </IconBox>
    </div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[25dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-10 duration-500 w-full absolute bottom-0 left-0"
      ></div>
      <div
        bind:this={vrAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] w-full max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2024
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Understanding VR
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          VR and UX / Unity / Classroom Assignment
        </div>
      </div>
    </div>
  </div>
  <div class="{borderAll} lg:h-[30dvi] h-[75dvi] order-2 lg:order-2">
    <div class="h-full w-full overflow-hidden">
      <video
        class="object-cover object-top-left origin-top-left mx-auto transition-all duration-200 h-[34dvi]"
        playsinline
        muted
        loop
        autoplay
        preload="auto"
      >
        <source src={vr} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</a>
<a
  href="https://www.behance.net/gallery/193824279/Creative-Coding-Designers-Guider"
  bind:this={creativeCodingSectionRef}
  on:mouseover={() => {
    creativeCodingInteraction.mouseover();
    creativeCodingInteraction.bind(
      creativeCodingSectionRef,
      creativeCodingAnimateRef
    );
  }}
  on:mouseout={creativeCodingInteraction.mouseout}
  on:mousemove={creativeCodingInteraction.mousemove}
  on:focus={creativeCodingInteraction.mouseover}
  on:blur={creativeCodingInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="{borderAll} lg:h-[40dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
        class="object-cover origin-top-left mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
        src="$lib/images/creativecoding/cover.gif"
        alt="Type System"
      />
    </div>
  </div>
  <div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[75dvi] lg:h-[35dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-10 duration-500 w-full absolute bottom-0 left-0"
      ></div>
      <div
        bind:this={creativeCodingAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2024
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Creative Coding - Designer's Guide
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          Publication / Creative Coding / Classroom Assignment
        </div>
      </div>
    </div>
    <div class="flex w-fit">
      <IconBox>
        <svelte:component this={brush} />
      </IconBox>
      <IconBox>
        <svelte:component this={code} />
      </IconBox>
    </div>
  </div>
</a>

<a
  href="https://www.behance.net/gallery/207261611/Zine-Art-Deco-Movement"
  bind:this={zineSectionRef}
  on:mouseover={() => {
    zineInteraction.mouseover();
    zineInteraction.bind(zineSectionRef, zineAnimateRef);
  }}
  on:mouseout={zineInteraction.mouseout}
  on:mousemove={zineInteraction.mousemove}
  on:focus={zineInteraction.mouseover}
  on:blur={zineInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="order-2 lg:order-1">
    <div class="flex w-full justify-end">
      <IconBox>
        <svelte:component this={brush} />
      </IconBox>
      <IconBox>
        <svelte:component this={learn} />
      </IconBox>
    </div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[25dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-10 duration-500 w-full absolute bottom-0 left-0"
      ></div>
      <div
        bind:this={zineAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2022
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Zine: Art Deco Movement
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          Art History / Publication / Classroom Assignment
        </div>
      </div>
    </div>
  </div>
  <div class="{borderAll} lg:h-[30dvi] h-[75dvi] order-2 lg:order-2">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
        class="object-cover mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
        src="$lib/images/zine/cover.png"
        alt="Type System"
      />
    </div>
  </div>
</a>
<a
  href="https://www.behance.net/gallery/170368281/Ad-Concept-for-NOTO"
  bind:this={adConceptSectionRef}
  on:mouseover={() => {
    adConceptInteraction.mouseover();
    adConceptInteraction.bind(adConceptSectionRef, adConceptAnimateRef);
  }}
  on:mouseout={adConceptInteraction.mouseout}
  on:mousemove={adConceptInteraction.mousemove}
  on:focus={adConceptInteraction.mouseover}
  on:blur={adConceptInteraction.mouseover}
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="{borderAll} lg:h-[40dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden">
      <video
        class="object-cover object-center origin-top-left mx-auto transition-all duration-200 h-full"
        playsinline
        muted
        loop
        autoplay
        preload="auto"
      >
        <source src={adConept} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[35dvi] bg-white"
    >
      <div
        class="bg-black h-full transition-all z-10 duration-500 w-full absolute bottom-0 left-0"
      ></div>
      <div bind:this={adConceptAnimateRef}
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex relative z-10 bg-white"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2023
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Ad Concept for NOTO
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          Market Research / Ad Design / Classroom Assignment
        </div>
      </div>
    </div>
    <div class="flex w-fit">
      <IconBox>
        <svelte:component this={brush} />
      </IconBox>
    </div>
  </div>
</a>
