<script>
    import {borderAll} from "$lib/commonClasses.js";
    import Title from "$lib/components/Title.svelte";
    import ExpItem from "./ExpItem.svelte";
    import SkillItem from "./SkillItem.svelte";
    import ToolItem from "./ToolItem.svelte";
    import case1 from "$lib/components/icons/case1.svelte";
    import code from "$lib/components/icons/code.svelte";
    import ai from "$lib/components/icons/ai.svelte";
    import brush from "$lib/components/icons/brush.svelte";
    
    import server from "$lib/components/icons/server.svelte";
    import wink from "$lib/components/icons/wink.svelte";
    import brain from "$lib/components/icons/brain.svelte";
    import tool from "$lib/components/icons/tool.svelte";
  import IconBox from "../../lib/components/IconBox.svelte";
</script>
<svelte:head>
  <title>KUMAR SATVIK | About</title>
</svelte:head>
<div class="{borderAll} mt-[15dvi] lg:mt-[5dvi] col-span-4 lg:col-span-1 h-[75dvi] lg:h-[20dvi]">
    <div class="h-full w-full overflow-hidden">
        <enhanced:img src="$lib/images/profile.jpg" alt="Kumar Satvik" />
    </div>
</div>
<div class="col-span-4 lg:col-span-2 mt-[15dvi] lg:mt-[5dvi] flex flex-col">
  <IconBox>
    <svelte:component this={wink} />
  </IconBox>
  <div class="{borderAll}  bg-opacity-70 col-span-4 bg-white h-[30dvi] lg:col-span-3 lg:h-[5dvi]">
    <div
    class="px-[5dvi] text-h2_sm lg:text-h2_lg font-['ringold-sans'] lg:px-[2dvi] flex-col justify-center h-full items-center gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
  >
  Hello, I am Kumar Satvik
  </div>
</div>
<div class="{borderAll} bg-opacity-70 bg-white h-[30dvi] col-span-4 lg:col-start-3  lg:col-span-2 lg:h-[10dvi]">
    <div
    class="p-[5dvi] text-base_sm lg:text-base_lg lg:p-[2dvi] flex-col justify-start h-full items-start gap-[4dvi] lg:gap-[1.5dvi]"
  >
  I bridge the gap between design and technology, crafting solutions that empower users with the resources they already have. My focus is on understanding user behavior and leveraging tech to create experiences that are both intuitive and impactful.
  </div>
</div>
</div>
<div class="lg:mt-[5dvi] flex lg:hidden items-end mt-[15dvi] w-fit lg:w-auto col-span-2">
  <IconBox>
    <svelte:component this={case1} />
  </IconBox>
</div>
<Title label="Experiences" overide="lg:mt-[5dvi]" sm_col_span=4 height="h-[30dvi] lg:h-[10dvi]"/>
<div class="lg:mt-[5dvi] hidden lg:flex items-end mt-[15dvi] w-fit lg:w-auto col-span-2">
  <IconBox>
    <svelte:component this={case1} />
  </IconBox>
</div>
<ExpItem />

<div class="lg:mt-[5dvi] flex lg:hidden items-end mt-[15dvi] w-fit lg:w-auto col-span-2">
  <IconBox>
    <svelte:component this={brain} />
  </IconBox>
</div>
<Title label="Skills" overide="lg:mt-[5dvi]" sm_col_span=4 height="h-[30dvi] lg:h-[10dvi]"/>
<div class="lg:mt-[5dvi] hidden lg:flex items-end mt-[15dvi] w-fit lg:w-auto col-span-2">
  <IconBox>
    <svelte:component this={brain} />
  </IconBox>
</div>
<SkillItem label="Research" btn={false} lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<SkillItem label="Graphic Design" btn={false} invert=true lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<SkillItem label="UI/UX" btn={false} lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<SkillItem label="Web DEVELOPMENT" btn={false} lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<div class="lg:mt-[5dvi] flex lg:hidden items-end mt-[15dvi] w-fit lg:w-auto col-span-2">
  <IconBox>
    <svelte:component this={tool} />
  </IconBox>
</div>
<Title label="Tools" overide="lg:mt-[5dvi]" sm_col_span=4 height="h-[30dvi] lg:h-[10dvi]" />
<div class="lg:mt-[5dvi] hidden lg:flex items-end mt-[15dvi] w-fit lg:w-auto col-span-2">
  <IconBox>
    <svelte:component this={tool} />
  </IconBox>
</div>
<div class="lg:mt-[5dvi] flex items-end mt-[15dvi] w-fit lg:w-auto col-span-4 lg:col-span-2">
  <IconBox>
    <svelte:component this={brush} />
  </IconBox>
</div>

<ToolItem label="Figma" lg_col_span=1 sm_col_span=4 text_size="cap" overide="lg:col-start-1"/>
<ToolItem label="Adobe Illustrator" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Adobe InDesign" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Adobe Acrobat" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Adobe Photoshop" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Adobe After Effects" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Adobe Premiere Pro" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Blender" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Unity" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="GODOT" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Notion" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Font Lab" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>

<div class="lg:mt-[5dvi] flex items-end mt-[15dvi] w-fit lg:w-auto col-span-4 lg:col-span-2">
  <IconBox>
    <svelte:component this={code} />
  </IconBox>
</div>

<ToolItem label="HTML" lg_col_span=1 sm_col_span=4 text_size="cap" overide="lg:col-start-1"/>
<ToolItem label="Css" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Javascript" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="SvelteKit" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Node.js" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Tailwindcss" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="React" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Strapi" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Lottie" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Mongodb" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="MYSQL" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>

<div class="lg:mt-[5dvi] flex items-end mt-[15dvi] w-fit lg:w-auto col-span-4 lg:col-span-2">
  <IconBox>
    <svelte:component this={ai} />
  </IconBox>
</div>

<ToolItem label="Midjourney" lg_col_span=1 sm_col_span=4 text_size="cap" overide="lg:col-start-1"/>
<ToolItem label="Stable Diffusion" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Dall-E" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Claude-dev" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Claude-3.5 Sonnet" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="o1-preview" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Phind" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Open router" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Google Gemini" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>

<div class="lg:mt-[5dvi] flex items-end mt-[15dvi] w-fit lg:w-auto col-span-4 lg:col-span-4">
  <IconBox>
    <svelte:component this={server} />
  </IconBox>
</div>

<ToolItem label="AWS Lightsail" lg_col_span=1 sm_col_span=4 text_size="cap" overide="lg:col-start-1"/>
<ToolItem label="AWS SES" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="AWS Route 53" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="AWS SNS" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Shopify" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>
<ToolItem label="Wordpress" lg_col_span=1 sm_col_span=4 text_size="cap" overide=""/>

