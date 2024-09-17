<script>
  import { borderAll , border_b , borderDark_b } from "$lib/commonClasses.js";
  import IconRenderer from "./IconRenderer.svelte";
  export let mode = "primary",
    overide,
    invert = false,
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
</script>

<button
  on:click={() => onClick()}
  class=" md:h-[5dvi] h-[15dvi]  {overide} w-[5dvi] flex justify-center items-center hover:cursor-pointer transition-all duration-200 {sticky?border_b+""+borderDark_b:borderAll} items-center justify-between {mode ==
  'primary'
    ? primary
    : ''} {mode == 'active' ? active : ''}"
>
  <IconRenderer overide="mx-auto">
    <slot />
  </IconRenderer>
</button>
