<script>
    import {borderAll} from "$lib/commonClasses.js";
    import Title from "$lib/components/Title.svelte";
    import ExpItem from "./ExpItem.svelte";
    import SkillItem from "./SkillItem.svelte";
    import Testimonies from "./Testimonies.svelte";
</script>
<div class="{borderAll} col-span-4 lg:col-span-1 h-[75dvi] lg:h-[20dvi]">
    <div class="h-full w-full overflow-hidden">
        <enhanced:img src="$lib/images/profile.jpg" alt="Kumar Satvik" />
    </div>
</div>
<div class="{borderAll} bg-opacity-70 col-span-4 bg-white h-[60dvi] lg:col-span-3 lg:h-[20dvi]">
    <div
    class="px-[5dvi] text-h1_sm lg:text-h1_lg font-['ringold-sans'] lg:px-[2dvi] flex-col justify-center h-full items-center gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
  >
  Crafting Solutions, Step-by-Step 
  </div>
</div>
<div class="{borderAll} bg-opacity-70 bg-white h-[30dvi] col-span-4 lg:col-start-3  lg:col-span-2 lg:h-[10dvi]">
    <div
    class="p-[5dvi] text-base_sm lg:text-base_lg lg:p-[2dvi] flex-col justify-start h-full items-start gap-[4dvi] lg:gap-[1.5dvi]"
  >
  There's nothing more rewarding than finding creative solutions to a tricky problem. Seeing those ideas come to life and make a tangible impact on businesses is what fuels my passion.
  </div>
</div>
<Title label="Experiences" marginT={true} sm_col_span=4 height="h-[30dvi] lg:h-[15dvi]"/>
<ExpItem />

<Title label="Skills" sm_col_span=4 marginT={true} overide="mb-[15dvi] lg:mb-[5dvi]" height="h-[30dvi] lg:h-[15dvi]"/>
<div class="lg:col-span-2 lg:block hidden"></div>
<SkillItem label="Research" btn={false} lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<SkillItem label="Graphic Design" btn={false} invert=true lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<SkillItem label="UI/UX" btn={false} lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<SkillItem label="Web DEVELOPMENT" btn={false} lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[60dvi] lg:h-[25dvi]"/>
<Title marginT={true} label="Tools" sm_col_span=4 overide="mb-[15dvi] lg:mb-[5dvi]" height="h-[30dvi] lg:h-[15dvi]"/>
<div class="lg:col-span-2 hidden lg:block"></div>
<SkillItem label="Adobe Photoshop" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Adobe Illustrator" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Adobe InDesign" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Adobe Acrobat" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Adobe After Effects" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Adobe Premiere Pro" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Blender" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Figma" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Midjourney" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Midjourney" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Stable Diffusion" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="HTML" lg_col_span=1 sm_col_span=2 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="CSS" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Javascript" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="React" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Sveltekit" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Node.js" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Tailwindcss" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Strapi" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="Lottie" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="MongoDB" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="AWS" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
<SkillItem label="MYSQL" lg_col_span=1 sm_col_span=4 text_size="h2" height="h-[45dvi] lg:h-[25dvi]"/>
