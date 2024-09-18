<script>
  import { borderAll } from "$lib/commonClasses.js";
  export let label = "Forgot..",
  lg_col_span = "2",
  sm_col_span = "2",
  height_lg = "2",
  height_sm = "2",
  marginT = false,
  overide = "",
  text_size = "h1";
</script>

<div class="{borderAll} bg-opacity-70 bg-white h-[{15*height_sm}dvi] lg:col-span-{lg_col_span} col-span-{sm_col_span} lg:h-[{5*height_lg}dvi] {marginT?"mt-[15dvi] lg:mt-[5dvi]":""} {overide}">
  <div
    class="p-[5dvi] lg:p-[2dvi] flex-col justify-center text-{text_size}_sm lg:text-{text_size}_lg  {text_size=="cap"?"font-bold":"font-['ringold-sans']"} {text_size=="h1"?"mt-[1dvi] lg:mt-[0.6dvi]":""} {text_size=="h2"?"mt-[1dvi] lg:mt-[0.2dvi]":''} h-full items-start gap-[4dvi] lg:gap-[1.5dvi] inline-flex "
  >{label}</div>
</div>
