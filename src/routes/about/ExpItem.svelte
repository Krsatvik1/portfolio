<script>
    import { borderAll , border_b , borderDark_b } from "$lib/commonClasses.js";
    import Title from "$lib/components/Title.svelte";
    import Body from "$lib/components/Body.svelte";
    import Button from "$lib/components/Button.svelte";
    import ArrowRight from "$lib/components/icons/arrow-right.svelte";
    function downloadFile1() {
      const fileUrl = "/Summer_Intership_Report.pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Summer_Intership_Report.pdf";
      link.click();
    }
    function downloadFile2() {
      const fileUrl = "/Graduation_Project_Report.pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Graduation_Project_Report.pdf";
      link.click();
    }
</script>
<div class="relative grid grid-cols-2 lg:grid-cols-4 col-span-4 mt-[15dvi] lg:mt-[5dvi]">
    <Title text_size="h2" label="frog" height="h-[15dvi] lg:h-[5dvi]"/>
    <Title label="Interaction Design Intern" text_size="cap" height="h-[15dvi] lg:h-[5dvi]" sm_col_span={1} lg_col_span={1}/>

    <div class="hidden lg:block" />
    <div>
        <Title label="Jan 2025 - Jun 2025" text_size="cap" height="h-[15dvi] lg:h-[5dvi]" sm_col_span="h-[15dvi]" lg_col_span={1}/>
        <div class="col-span-4 lg:block hidden lg:col-span-1">
            <Button onClick={downloadFile2} label="Report" mode="primary" invert={false} sticky={false}> <svelte:component this={ArrowRight} /> </Button>
        </div>
        
    </div>
    <Body label="My graduation project at Frog was an amazing opportunity. I researched the friction between designers and developers and conceptualized a Figma plugin to help. I also worked on an internal project exploring the deep connection between design and development, learning so much about real-world collaboration and problem-solving." height="lg:h-[10dvi] h-[45dvi]" text_col="lg:columns-2"/>
    <div class="col-span-2 lg:col-span-1 lg:hidden h-[15dvi]">
        <Button onClick={downloadFile2} label="Download Report" mode="primary" invert={false} sticky={false}> <svelte:component this={ArrowRight} /> </Button>
    </div>
</div>

<div class="relative grid grid-cols-2 lg:grid-cols-4 col-span-4 mt-[15dvi] lg:mt-[5dvi]">
    <Title text_size="h2" label="Now Form" height="h-[15dvi] lg:h-[5dvi]"/>
    <Title label="Design Intern" text_size="cap" height="h-[15dvi] lg:h-[5dvi]" sm_col_span={1} lg_col_span={1}/>

    <div class="hidden lg:block" />
    <div>
        <Title label="May 2024 - Aug 2024" text_size="cap" height="h-[15dvi] lg:h-[5dvi]" sm_col_span="h-[15dvi]" lg_col_span={1}/>
        <div class="col-span-4 lg:block hidden lg:col-span-1">
            <Button onClick={downloadFile1} label="Report" mode="primary" invert={false} sticky={false}> <svelte:component this={ArrowRight} /> </Button>
        </div>
        
    </div>
    <Body label="My summer internship at NowForm was a great learning experience. I worked on a variety of projects, from branding to user interface design. I learned how to work effectively with a team, solve problems creatively, and even use AI to create images. It was a valuable experience that helped me grow as a designer." height="lg:h-[10dvi] h-[45dvi]" text_col="lg:columns-2"/>
    <div class="col-span-2 lg:col-span-1 lg:hidden h-[15dvi]">
        <Button onClick={downloadFile1} label="Download Report" mode="primary" invert={false} sticky={false}> <svelte:component this={ArrowRight} /> </Button>
    </div>
</div>

