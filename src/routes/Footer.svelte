<script>
    import Button from "$lib/components/Button.svelte";
    import ButtonSmall from "$lib/components/ButtonSmall.svelte";
    import {borderAll} from "$lib/commonClasses.js";
    import ArrowRight from "$lib/components/icons/arrow-right.svelte";
    import Check from "$lib/components/icons/check.svelte";
    import Linkedin from "$lib/components/icons/linkedin.svelte";
    import Mail from "$lib/components/icons/mail.svelte";
    import Instagram from "$lib/components/icons/instagram.svelte";
    import Behance from "$lib/components/icons/behance.svelte";
    import { writable } from 'svelte/store';

    let email = '';
  let result = null;
  let showModal = writable(false);
  let icons = writable(ArrowRight);
  let message = writable("Say Hello");
  $: if ($showModal) {
    message.set("Sent!");
    icons.set(Check);
    setTimeout(() => {
      message.set("Say Hello");
      icons.set(ArrowRight);
    }, 5000);
    
  }

    let onClick = () => {
        window.location = x
    };
    async function handleSubmit(e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      const email = formData.get('email');
      console.log(email);
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {email} )
      });

      result = await response.json();
      showModal.set(true);
    }
</script>

<form on:submit|preventDefault={handleSubmit} class=" col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 mt-[15dvi] lg:mt-[5dvi] relative">
  <div class=" overflow-hidden col-span-2 w-[calc(100%+1px)] relative
  
  before:content-['']  before:absolute before:top-0 before:w-full before:transition-all before:duration-200   before:h-full before:left-0 before:border-[0px]  before:border-stone-900 
  
  focus-within:before:rounded-2xl
 focus-within:before:border-[10px]
 before:z-20
 before:pointer-events-none
 
 lg:h-[5dvi] h-[15dvi] 
 
 after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:absolute after:border-0 after:border-stone-900 after:transition-all after:duration-200 
 after:z-20
 after:pointer-events-none
 focus-within:after:border-[10px] ">
    <input type="email" required name='email' placeholder="name@work.com" class="px-[5dvi] lg:px-[2dvi] {borderAll} block  bg-opacity-0
    focus:outline-none focus:border-stone-900 focus:ring-0 w-full 
    
    align-middle pt-[2dvi] lg:pt-[0.6dvi] font-bold lg:font-normal lg:font-['ringold-sans']  text-base_sm lg:text-h2_lg placeholder:text-stone-300  lg:h-[5dvi] h-[15dvi] z-10 relative">
  </div>
    <Button type="submit" label={$message} mode="primary" overide="col-span-2 lg:col-span-1" invert={false} sticky={false}>
        <svelte:component this={$icons} />
    </Button>
</form>
<div class=" lg:col-span-4 pb-[15dvi] lg:pb-0 col-span-2  relative {borderAll} bg-stone-900 text-white h-[75dvi] lg:h-[20dvi] mb-[15dvi] lg:mb-[5dvi]">
    <div class="p-[5dvi] lg:p-[2dvi] max-w-[80dvi] flex-col justify-between h-full items-start  gap-[4dvi] lg:gap-[1.5dvi]  inline-flex">
        <div
          class=" pt-[0.7dvi]  text-h1_sm lg:text-h1_lg font-normal font-['ringold-sans']"
        >
          KUMAR SATVIK
          
        </div>
        <div class="text-cap_sm lg:text-cap_lg font-sans space-y-[3dvi] lg:space-y-[1dvi]">
          <a href="mailto:krsatvol@gmail.com" class="block">krsatvik@gmail.com</a>
          <a href="tel:+91-7783026453" class="block">+91-7783026453</a>
        </div>
        <div
          class="w-[60dvi] lg:w-auto text-base_sm lg:text-base_lg  font-bold uppercase"
        >
          ALL RIGHTS RESERVED 2024 © KUMAR SATVIK
        </div>
      </div>
      <div class="absolute flex bottom-0 right-0">
        <ButtonSmall onClick={()=>{onClick("https://www.behance.net/kumarsatvik")}} mode="primary" invert={true} >
            <svelte:component this={Behance} />
        </ButtonSmall>
        <ButtonSmall onClick={()=>{onClick("https://www.linkedin.com/in/kumar-satvik-8b35b8202/")}} mode="primary" invert={true} >
            <svelte:component this={Linkedin} />
        </ButtonSmall>
        
      </div>
</div>
