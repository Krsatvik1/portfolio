<script>
    import Button from "$lib/components/Button.svelte";
    import ButtonSmall from "$lib/components/ButtonSmall.svelte";
    import {borderAll} from "$lib/commonClasses.js";
    import ArrowRight from "$lib/components/icons/arrow-right.svelte";
</script>

<form class="col-span-3 grid grid-cols-3 mt-[5dvi] relative">
  <input placeholder="xyz@work.com" class="block px-[2dvi] align-middle pt-[0.8dvi] {borderAll} col-span-2 font-['ringold-sans']  text-h2_sm md:text-h2_lg   md:h-[5dvi] h-[15dvi]  placeholder:font-['ringold-sans'] relative">
    <Button label="Say Hello" mode="primary" invert={false} sticky={true}>
        <svelte:component this={ArrowRight} />
    </Button>
</form>
<div class=" md:col-span-4 col-span-2  relative {borderAll} bg-stone-900 text-white h-[20dvi] mb-[5dvi]">
    <div class="px-[2dvi] max-w-[80dvi] flex-col justify-center h-full items-start gap-[1.5dvi] inline-flex">
        <div
          class=" pt-[0.7dvi]  text-h1_sm md:text-h1_lg font-normal font-['ringold-sans']"
        >
          Lorem ipsum odor consectetuer
        </div>
        <div
          class="   text-cap_sm md:text-cap_lg  font-bold uppercase"
        >
          ALL RIGHTS RESERVED 2024 © KUMAR SATVIK
        </div>
      </div>
      <div class="absolute flex bottom-0 right-0">
        <ButtonSmall mode="primary" invert={true} >
            <svelte:component this={ArrowRight} />
        </ButtonSmall>
        <ButtonSmall mode="primary" invert={true} >
            <svelte:component this={ArrowRight} />
        </ButtonSmall>
        <ButtonSmall mode="primary" invert={true} >
            <svelte:component this={ArrowRight} />
        </ButtonSmall>
        <ButtonSmall mode="primary" invert={true} >
            <svelte:component this={ArrowRight} />
        </ButtonSmall>
        
      </div>
</div>
