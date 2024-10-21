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
</script>

<svelte:head>
  <title>KUMAR SATVIK</title>
</svelte:head>

<Title label="Product Design / Development" text_size="h1" height="h-[45dvi] lg:h-[15dvi]" overide="mt-[30dvi] lg:mt-[10dvi] lg:col-span-4 col-span-4"/>

<a
  href="/digital-intake-and-assessment-platform"
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group "
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
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
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
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
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
          UI UX / MOBILE APP / CLASSROOM ASSIGNMENT
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

<Title label="Web Development" text_size="h1" height="h-[45dvi] lg:h-[15dvi]" overide="mt-[30dvi] lg:mt-[10dvi] lg:col-span-4 col-span-4"/>
<a
  href="https://britinfotech.com/"
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group "
>
  <div class="{borderAll} lg:h-[25dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
      class="object-cover object-left-top origin-top-left mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
      src="$lib/images/britinfotech/cover.png"
      alt="Type System"
    />
    </div>
    
  </div>
  <div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[20dvi] bg-white"
    >
      <div
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
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
        Project Management / Web Development / Live
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
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group"
>
  <div class="order-2 lg:order-1">
    <div class="flex w-full justify-end">
      <IconBox>
        <svelte:component this={code} />
      </IconBox>
    </div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[25dvi] bg-white "
    >
      <div
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
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
        Web Development / CMS
        </div>
      </div>
    </div>
    
  </div>
  <div class="{borderAll} lg:h-[30dvi] h-[75dvi] order-2 lg:order-2">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
      class="object-cover origin-top-left mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
      src="$lib/images/massiveworks/cover.png"
      alt="Type System"
    />
    </div>
  </div>
</a>
<a
  href="https://parthsuratwala.com/"
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group "
>
  <div class="{borderAll} lg:h-[25dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
      class="object-cover object-left-top origin-top-left mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
      src="$lib/images/parth/cover.png"
      alt="Type System"
    />
    </div>
    
  </div>
  <div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[20dvi] bg-white"
    >
      <div
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
      >
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
          2023
        </div>
        <div
          class=" text-stone-900 pt-[0.7dvi] text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
        Portfolio for Parth
        </div>
        <div
          class=" text-stone-900 text-cap_sm lg:text-cap_lg font-bold uppercase"
        >
        Web Development / CMS / Live
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

<Title label="Visual Design" text_size="h1" height="h-[45dvi] lg:h-[15dvi]" overide="mt-[30dvi] lg:mt-[10dvi] lg:col-span-4 col-span-4"/>
<a
  href="https://www.behance.net/gallery/193824279/Creative-Coding-Designers-Guider"
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group "
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
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
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
    </div>
  </div>
</a>
<a
  href="https://www.behance.net/gallery/207261611/Zine-Art-Deco-Movement"
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
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[25dvi] bg-white "
    >
      <div
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
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
  href="https://www.behance.net/gallery/193824279/Creative-Coding-Designers-Guider"
  class="col-span-4 mt-[15dvi] lg:mt-[5dvi] lg:grid-cols-2 grid group "
>
  <div class="{borderAll} lg:h-[40dvi] h-[75dvi] bg-white">
    <div class="h-full w-full overflow-hidden">
      <enhanced:img
      class="object-cover origin-top-left mx-auto group-hover:scale-[1.1] transition-all duration-200 h-full"
      src="$lib/images/adconcept/cover.jpg"
      alt="Type System"
    />
    </div>
    
  </div>
  <div>
    <div
      class="{borderAll} relative block bg-opacity-70 h-[60dvi] lg:h-[35dvi] bg-white"
    >
      <div
        class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
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


