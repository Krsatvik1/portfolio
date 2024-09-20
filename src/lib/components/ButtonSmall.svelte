<script>
  import { borderAll, border_b, borderDark_b } from "$lib/commonClasses.js";
  import IconRenderer from "./IconRenderer.svelte";
  export let mode = "primary",
    overide,
    label = false,
    invert = false,
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

<button
  on:click={() => onClick()}
  class="  {overide} lg:w-[5dvi] w-[15dvi] transition-all duration-200 {stickyClass} {mode == 'primary'
  ? primary_1
  : ''} {mode == 'active'
  ? active_1
  : ''}  relative transition-all duration-200  group/main"
>
  <div
    class="lg:h-[5dvi] {borderAll} lg:w-[5dvi] w-[15dvi] h-[15dvi] {mode != 'active'
    ? 'group-hover/main:translate-x-2 group-hover/main:-translate-y-2'
    : ''} transition-all duration-200 inline-flex justify-center items-center text-h2_sm lg:text-h2_lg font-['ringold-sans'] {label?"pt-[1dvi] lg:pt-[0.6dvi]":""} {mode ==
    'primary'
      ? primary
      : ''} {mode == 'active' ? active : ''}"
  >
    {label ? label : ""}

    {#if !label}
      <IconRenderer overide="mx-auto">
        <slot />
      </IconRenderer>
    {/if}
  </div>
</button>
