<script>
    import Button from "$lib/components/Button.svelte";
    import ButtonSmall from "$lib/components/ButtonSmall.svelte";
    import {borderAll} from "$lib/commonClasses.js";
    import ArrowRight from "$lib/components/icons/arrow-right.svelte";
</script>

<form class="col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 mt-[15dvi] md:mt-[5dvi] relative">
  <input placeholder="xyz@work.com" class="block overflow-visible px-[5dvi] lg:px-[2dvi]  align-middle pt-[4dvi] md:pt-[0.8dvi] {borderAll} w-[calc(100%+1px)] col-span-2 font-['ringold-sans']  text-h2_sm lg:text-h2_lg   lg:h-[5dvi] h-[15dvi]  placeholder:font-['ringold-sans'] relative">
    <Button label="Say Hello" mode="primary" overide="col-span-2 lg:col-span-1" invert={false} sticky={true}>
        <svelte:component this={ArrowRight} />
    </Button>
</form>
<div class=" lg:col-span-4 col-span-2  relative {borderAll} bg-stone-900 text-white h-[75dvi] lg:h-[20dvi] mb-[15dvi] lg:mb-[5dvi]">
    <div class="p-[5dvi] lg:p-[2dvi] max-w-[80dvi] flex-col justify-start h-full items-start  gap-[4dvi] lg:gap-[1.5dvi]  inline-flex">
        <div
          class=" pt-[0.7dvi]  text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          Lorem ipsum odor consectetuer
        </div>
        <div
          class="w-[60dvi] md:w-auto text-cap_sm lg:text-cap_lg  font-bold uppercase"
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
