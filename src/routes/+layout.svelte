<script>
  import "../app.css";
  import ButtonSmall from "$lib/components/ButtonSmall.svelte";
  import { onMount } from "svelte";
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

  let NavHeaderAimation = () => {
    document.querySelector(".animation-1a").classList.add("w-[5dvi]");
    document.querySelector(".animation-1a").classList.remove("md:w-[12dvi] w-[30dvi]");
    document.querySelector(".animation-1>span").innerHTML = "";
  };
  let NavHeaderAimation_2 = () => {
    document.querySelector(".animation-1a").classList.add("md:w-[12dvi] w-[30dvi]");
    document.querySelector(".animation-1a").classList.remove("w-[5dvi]");
    setTimeout(() => {
      document.querySelector(".animation-1>span").innerHTML = "TVIK";
    }, 100);
  };
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger, RoughEase, Observer);
    let tl = gsap.timeline();
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
    tl.from(".animation-2> div > button", {
      x: "5dvi",
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
    class="{borderAll} h-[15dvi] md: md:h-[5dvi] h-[15dvi]  transition-all duration-200 animation-1a text-h1 md:w-[12dvi] w-[37dvi] font-['ringold-sans'] text-white bg-stone-900 justify-center items-center inline-flex"
  >
    <div class="leading-[1] animation-1 mt-[0.6dvi] text-h2_sm md:text-h2_lg">
      SA<span>TVIK</span>
    </div>
  </div>
  <div class="h-[calc(5dvi+1px)] w-[5dvi] overflow-hidden">
    <ButtonSmall sticky={true}>
      <svelte:component this={Filter} />
    </ButtonSmall>
  </div>
</div>

<div class="relative px-[10dvi] md:px-[5dvi] grid  md:grid-cols-4 grid-cols-2 ">
  <Header />
  <div class="grid relative  md:col-span-4 col-span-2   md:grid-cols-4 grid-cols-2 ">
    <Navbar />
    <div class="grid relative  md:col-span-4 col-span-2   md:grid-cols-4 grid-cols-2 ">
      <slot />
    </div>
    <Footer />
  </div>
  <div class="px-[10dvi] md:px-[5dvi] top-0 -z-10 left-0 fixed w-full h-[100dvh]">
    <div class="grid-cols-2 md: md:grid-cols-4  grid h-full justify-stretch relative item">
      <div class="{border} {borderLight}"></div>
      <div class="{border} {borderLight}"></div>
      <div class="{border} md:block hidden {borderLight}"></div>
      <div class="{border} md:block hidden {borderLight}"></div>
    </div>
  </div>
</div>
