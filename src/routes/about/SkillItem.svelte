<script>
  import { borderAll } from "$lib/commonClasses.js";
  import Button from "$lib/components/Button.svelte";
  import ArrowRight from "$lib/components/icons/arrow-right.svelte";
  export let label = "Forgot..",
  lg_col_span = "2",
  sm_col_span = "2",
  height = "lg:h-[10dvi] h-[30dvi]",
  marginT = false,
  overide = "",
  text_size = "h1",
  invert = false,
  img=false,
  btn=false;
</script>

<div class="{borderAll} bg-opacity-70 bg-white {height} lg:col-span-{lg_col_span} col-span-{sm_col_span} {marginT?"mt-[15dvi] lg:mt-[5dvi]":""} {overide} flex-col flex">
  <div
    class="p-[5dvi] lg:p-[2dvi] flex-col justify-center text-{text_size}_sm lg:text-{text_size}_lg  {text_size=="cap"?"font-bold":"font-['ringold-sans']"} {text_size=="h1"?"mt-[1dvi] lg:mt-[0.6dvi]":""} {text_size=="h2"?"mt-[1dvi] lg:mt-[0.2dvi]":''} flex-grow  items-center justify-self-stretch gap-[4dvi] lg:gap-[1.5dvi] inline-flex w-full text-center {invert?"lg:order-2":""}"
  >{label}</div>
  {#if btn}
  <Button label="Say Hello" overide={invert?"lg:order-1":""} mode="primary" invert={false} sticky={false}> <svelte:component this={ArrowRight} /> </Button>
  {/if}

</div>

