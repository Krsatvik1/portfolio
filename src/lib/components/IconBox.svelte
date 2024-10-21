<script>
  export let overide;
  import { borderAll } from "$lib/commonClasses.js";
</script>

<div
  class="p-[2dvi] lg:p-[1dvi] lg:w-[5dvi] h-[15dvi] lg:h-[5dvi] w-[15dvi] lg:block {borderAll} {overide} relative stroke-[0.1rem] bg-white bg-opacity-70"
>
  <slot></slot>
</div>
