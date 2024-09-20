<script>
    import { borderAll } from "$lib/commonClasses.js";
    export let label = "Forgot..",
    tags="sdafa",
    link="/projects";
</script>

<a href="{link}"
    class="block mt-[15dvi] md:mt-[5dvi] col-span-2 before:content-[''] before:w-full before:h-full before:absolute relative before:border-[0px] before:border-stone-900 hover:before:border-[20px] hover:before:rounded-[40px]
    after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:border-[0px] after:border-stone-900 hover:after:border-[20px] after:transition-all after:duration-200 before:transition-all before:duration-200"
  >
  <div class="{borderAll} relative block  bg-opacity-70  h-[60dvi] lg:h-[35dvi]">
    <div class="px-[5dvi] lg:px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start  gap-[4dvi] lg:gap-[1.5dvi]  inline-flex">
      <div
        class=" text-stone-900 pt-[0.7dvi]  text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
      >
        {label}
      </div>
      <div
        class=" text-stone-900  text-cap_sm lg:text-cap_lg  font-bold uppercase"
      >
        {tags}
      </div>
    </div>
  </div> 
  </a>