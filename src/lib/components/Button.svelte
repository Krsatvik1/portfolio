<script>
  import { borderAll, border_b, borderDark_b } from "$lib/commonClasses.js";
  import IconRenderer from "./IconRenderer.svelte";
  export let label = "Forgot..",
    mode = "primary",
    invert = false,
    logo = true,
    overide,
    type="button",
    sticky = false,
    onClick = () => {};
  let primary, primary_1, active, active_1;
  if (!invert) {
    primary = "text-stone-900 bg-white ";
    primary_1 = "bg-stone-900 ";
    active = "bg-stone-900 text-white";
    active_1 = "bg-white";
  } else {
    primary = "text-white bg-stone-900 ";
    primary_1 = "bg-white";
    active_1 = "bg-stone-900";
    active = "bg-white text-stone-900";
  }
  let stickyClass = sticky ? "sticky top-[15dvi] md:top-0 z-50" : "";
</script>

<button type={type} 
  on:click={() => onClick(label)}
  class=" w-full hover:z-[60]  {mode == 'primary'
    ? primary_1
    : ''} {mode == 'active'
    ? active_1
    : ''} {overide}  relative transition-all duration-200 {stickyClass} sticky group/main"
>
  <div
    class="inline-flex {borderAll} relative {mode != 'active'
      ? 'group-hover/main:translate-x-2 group-hover/main:-translate-y-2'
      : ''}  transition-all duration-200 items-center justify-between w-full lg:h-[5dvi] h-[15dvi] px-[5dvi] lg:px-[2dvi] {mode ==
    'primary'
      ? primary
      : ''} {mode == 'active' ? active : ''}"
  >
    <div
      class=" text-h2_sm lg:text-h2_lg font-['ringold-sans'] leading-[1] mt-[1dvi] lg:mt-[0.6dvi]"
    >
      {label}
    </div>
    {#if (logo && overide == "col-span-2 lg:col-span-1") || (logo && overide == "mobi")}
    
      <IconRenderer {overide}>
        <slot />
      </IconRenderer>
    {:else if logo}
      <IconRenderer>
        
        <slot />
      </IconRenderer>
    {/if}
  </div>
</button>
