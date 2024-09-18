<script>
  import "../app.css";
  import ButtonSmall from "$lib/components/ButtonSmall.svelte";
  import { onMount } from "svelte";
  import Modal from "./Modal.svelte";
  import Filter from "$lib/components/icons/Filter.svelte";
  import {
    border,
    borderLight,
    borderDark,
    borderAll,
  } from "$lib/commonClasses.js";
  import Header from "./Header.svelte";
  import Navbar from "./Navbar.svelte";
  import { gsap } from "gsap/dist/gsap";

  import { RoughEase } from "gsap/dist/EasePack";

  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { Observer } from "gsap/dist/Observer";
  import Button from "$lib/components/Button.svelte";
  import Footer from "./Footer.svelte";
  import { navState } from "$lib/store.js";

  let NavHeaderAimation = () => {
    if (window.innerWidth >= 1024) {
      document.querySelector(".animation-1a").classList.add("lg:w-[5dvi]");
      document.querySelector(".animation-1a").classList.remove("lg:w-[12dvi]");
    } else {
      document.querySelector(".animation-1a").classList.add("w-[calc(100dvi-15dvi)]");
      document.querySelector(".animation-1a").classList.remove("w-[50dvi]");
    }
    document.querySelector(".animation-1>span").innerHTML = "";
  };
  let NavHeaderAimation_2 = () => {
    if (window.innerWidth >= 1024) {
      document.querySelector(".animation-1a").classList.add("lg:w-[12dvi]");
      document.querySelector(".animation-1a").classList.remove("lg:w-[5dvi]");
    } else {
      document.querySelector(".animation-1a").classList.add("w-[50dvi]");
      document.querySelector(".animation-1a").classList.remove("w-[calc(100dvi-15dvi)]");
    }

    setTimeout(() => {
      document.querySelector(".animation-1>span").innerHTML = "TVIK";
    }, 100);
  };
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger, RoughEase, Observer);
    let tl = gsap.timeline();
    if (window.innerWidth >= 1024) {
     tl.to(".animation-1a", {
        ease: "rough",
        scrollTrigger: {
          trigger: ".main",
          start: "top top",
          end: "top top",
          scrub: 0,
          markers: false,
          onEnter: () => NavHeaderAimation(),
          onEnterBack: () => NavHeaderAimation_2(),
        },
      }); 
    }else{
      tl.to(".animation-1a", {
        ease: "rough",
        scrollTrigger: {
          trigger: ".main",
          start: "bottom top",
          end: "bottom top",
          scrub: 0,
          markers: true,
          onEnter: () => NavHeaderAimation(),
          onEnterBack: () => NavHeaderAimation_2(),
        },
      });
    }

    tl.from(".animation-2> div > button", {
      x: "50dvi",
      duration: 10,
      ease: "rough",
      scrollTrigger: {
        trigger: ".main",
        start: "bottom top",
        end: "bottom top",
        scrub: 0,
        markers: false,
      },
    });
  });
</script>

<div
  class="flex animation-2 w-[calc(100%)] overflow-y-visible sticky top-0 left-0 justify-between z-50"
>
  <div
    class="{borderAll} h-[15dvi] w-[50dvi] lg:h-[5dvi] transition-all duration-200 animation-1a text-h1 lg:w-[12dvi] font-['ringold-sans'] text-white bg-stone-900 justify-center items-center inline-flex"
  >
    <div
      class="leading-[1] animation-1 mt-[1dvi] lg:mt-[0.6dvi] text-h2_sm lg:text-h2_lg"
    >
      SA<span class="lg:inline hidden">TVIK</span><span class="lg:hidden inline"
        >TVIK</span
      >
    </div>
  </div>
  <div
    class="h-[calc(15dvi+1px)] lg:h-[calc(5dvi+1px)] w-[calc(15dvi)] lg:w-[5dvi] overflow-hidden"
  >
    <ButtonSmall sticky={true}>
      <svelte:component this={Filter} />
    </ButtonSmall>
  </div>
</div>

<div class="relative px-[10dvi] lg:px-[5dvi] grid lg:grid-cols-4 grid-cols-2">
  <Header />
  <div
    class="grid relative lg:col-span-4 col-span-2 lg:grid-cols-4 grid-cols-2"
  >
    <Navbar />
    <div
      class="grid relative lg:col-span-4 col-span-2 lg:grid-cols-4 grid-cols-2"
    >
      <slot />
    </div>
    <Footer />
  </div>
  <div
    class="px-[10dvi] lg:px-[5dvi] top-0 -z-10 left-0 fixed w-full h-[100dvh]"
  >
    <div
      class="grid-cols-2 lg: lg:grid-cols-4 grid h-full justify-stretch relative item"
    >
      <div class="{border} {borderLight}"></div>
      <div class="{border} {borderLight}"></div>
      <div class="{border} lg:block hidden {borderLight}"></div>
      <div class="{border} lg:block hidden {borderLight}"></div>
    </div>
  </div>
</div>
<div class="absolute z-50 top-0 left-0">
  <Modal />
</div>
