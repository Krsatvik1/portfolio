<script>
  import "../app.css";
  import {
    border,
    borderLight,
    borderDark,
    borderAll,
  } from "$lib/commonClasses.js";
  import Header from "./Header.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div
  class="{borderAll} h-[5dvi] z-20 text-h1 font-['ringold-sans'] px-[1.5dvi] text-white bg-stone-900 border border-stone-900 justify-center items-center inline-flex sticky top-0"
>
  <div class="leading-[1] mt-[0.6dvi] text-h2_lg">SATVIK</div>
</div>
<div class="relative px-[5dvi] grid grid-cols-4">
  <Header />
  <div class="grid relative col-span-4 grid-cols-4">
    <Navbar />
    <slot />
  </div>
  <div class="px-[5dvi] top-0 -z-10 left-0 fixed w-full h-[100dvw]">
    <div class="grid-cols-4 grid h-full justify-stretch relative item">
      <div class="{border} {borderLight}"></div>
      <div class="{border} {borderLight}"></div>
      <div class="{border} {borderLight}"></div>
      <div class="{border} {borderLight}"></div>
    </div>
  </div>
</div>
