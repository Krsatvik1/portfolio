<script>
    import {borderAll} from "$lib/commonClasses.js";
    import Title from "$lib/components/Title.svelte";
    import ExpItem from "./ExpItem.svelte";
</script>
<div class="{borderAll} h-[60dvi] lg:h-[20dvi]">
    <div class="h-full w-full overflow-hidden">
        <enhanced:img src="$lib/images/profile.jpg" alt="Kumar Satvik" />
    </div>
</div>
<div class="{borderAll} bg-opacity-70 bg-white h-[60dvi] col-span-2 lg:col-span-3 lg:h-[20dvi]">
    <div
    class="px-[5dvi] text-h1_sm md:text-h1_lg font-['ringold-sans'] lg:px-[2dvi] flex-col justify-center h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
  >
  Lorem ipsum odor  consectetuer Lorem ipsum
  </div>
</div>
<div class="{borderAll} bg-opacity-70 bg-white h-[60dvi] lg:col-start-3 col-span-2 lg:col-span-2 lg:h-[10dvi]">
    <div
    class="p-[5dvi] text-base_sm md:text-base_lg lg:p-[2dvi] flex-col justify-start h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex"
  >
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
  </div>
</div>
<Title marginT={true}/>
<ExpItem />