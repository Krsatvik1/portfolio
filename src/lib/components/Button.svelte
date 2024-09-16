<script>
  import { borderAll } from "$lib/commonClasses.js";
  import IconRenderer from "./IconRenderer.svelte";
  export let label = "Forgot..",
    mode = "primary",
    invert = false,
    logo = true,
    sticky = false;
  let primary, active;
  if (!invert) {
    primary = "text-slate-900 hover:text-white hover:bg-slate-900";
    active = "bg-slate-900 text-white";
  } else {
    primary = "text-white hover:text-slate-900 hover:bg-white";
    active = "bg-white text-slate-900";
  }
  let stickyClass = sticky ? "sticky top-0 z-50" : "";
</script>

<div
  class="h-[5dvi] hover:cursor-pointer {borderAll} {stickyClass} sticky inline-flex items-center justify-between px-[1.5dvi] {mode ==
  'primary'
    ? primary
    : ''} {mode == 'active'}"
>
  <div class="text-h2_lg font-['ringold-sans'] leading-[1] mt-[0.6dvi]">
    {label}
  </div>
  {#if logo}
    <IconRenderer>
      <slot />
    </IconRenderer>
  {/if}
</div>
