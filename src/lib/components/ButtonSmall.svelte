2<script>
  import { borderAll } from "$lib/commonClasses.js";
  export let label = "Forgot..",
    mode = "primary",
    invert = false,
    logo = true,
    sticky = false;
    let primary, active;
  if (!invert) {
    primary = "text-black hover:text-white hover:bg-black";
    active = "bg-black text-white";
  } else {
    primary = "text-white hover:text-black hover:bg-white";
    active = "bg-white text-black";
  }
  let stickyClass = sticky ? "sticky top-0 z-50" : "";
</script>

<div
  class="h-[5dvi] {borderAll} {stickyClass} sticky inline-flex items-center justify-between px-[1.5dvi] {mode ==
  'primary'
    ? primary
    : ''} {mode == 'active'}"
>
  <div class="text-h2_lg font-['ringold-sans'] leading-[1] mt-[0.6dvi]">
    {label}
  </div>
  {#if logo}
    <slot />
  {/if}
</div>
