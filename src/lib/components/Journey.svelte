<script>
  export let label = "Research",
    step = "1",
    overide="",
    date = "Jul 1st - Jul 15th";
    import { borderAll } from "$lib/commonClasses.js";
    import IconBox from "./IconBox.svelte";
</script>
<div class="col-span-4 lg:col-span-1 bg-white bg-opacity-70 flex justify-between {overide} {borderAll} flex-col">
    <div class="p-[5dvi] lg:p-[2dvi] lg:space-y-[0.5dvi]">
        <p>
            {date}
        </p>
        <p class="text-cap_sm lg:text-cap_lg font-bold uppercase">
            {label}
        </p>
    </div>
    <div class=" place-self-end lg:place-self-auto">
        <IconBox>
            <p class="text-h2_sm lg:text-h2_lg font-['ringold-sans'] leading-[1] mt-[1.6dvi] lg:mt-[0.4dvi] align-bottom text-center">
                {step}
            </p>
        </IconBox>
    </div>
</div>