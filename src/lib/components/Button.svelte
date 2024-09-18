<script>
  import { borderAll, border_b , borderDark_b } from "$lib/commonClasses.js";
  import IconRenderer from "./IconRenderer.svelte";
  export let label = "Forgot..",
    mode = "primary",
    invert = false,
    logo = true,
    overide,
    sticky = false,
    onClick = () => {};
  let primary, active;
  if (!invert) {
    primary = "text-stone-900 bg-white hover:text-white hover:bg-stone-900";
    active = "bg-stone-900 text-white";
  } else {
    primary = "text-white bg-stone-900 hover:text-stone-900 hover:bg-white";
    active = "bg-white text-stone-900";
  }
  let stickyClass = sticky ? "sticky top-[15dvi] md:top-0 z-50" : "";
</script>

<button on:click={()=>onClick(label)}
  class=" lg:h-[5dvi] h-[15dvi] w-full  {overide} hover:cursor-pointer transition-all duration-200 {borderAll} {stickyClass} sticky inline-flex items-center justify-between px-[5dvi] lg:px-[2dvi] {mode ==
  'primary'
    ? primary
    : ''} {mode == 'active'? active:""}"
>
  <div class=" text-h2_sm lg:text-h2_lg  font-['ringold-sans'] leading-[1] mt-[1dvi] lg:mt-[0.6dvi]">
    {label}
  </div>
  {#if logo && overide=="col-span-2 lg:col-span-1"}
    <IconRenderer {overide}>
      <slot />
    </IconRenderer>
  {:else if logo}
    <IconRenderer>
      <slot />
    </IconRenderer>
  {/if}
  </button>
