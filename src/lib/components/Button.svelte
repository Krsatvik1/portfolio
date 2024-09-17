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
  let stickyClass = sticky ? "sticky top-0 z-50" : "";
</script>

<button on:click={()=>onClick(label)}
  class=" md:h-[5dvi] h-[15dvi]  {overide} hover:cursor-pointer transition-all duration-200 {borderAll} {stickyClass} sticky inline-flex items-center justify-between px-[1.5dvi] {mode ==
  'primary'
    ? primary
    : ''} {mode == 'active'? active:""}"
>
  <div class=" text-h2_sm md:text-h2_lg  font-['ringold-sans'] leading-[1] mt-[0.6dvi]">
    {label}
  </div>
  {#if logo}
    <IconRenderer>
      <slot />
    </IconRenderer>
  {/if}
  </button>
