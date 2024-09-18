<script>
  import { borderAll } from "$lib/commonClasses.js";
  export let label =
      "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
    lg_col_span = "3",
    heading = false,
    headingText = "Lorem Ipsum",
    sm_col_span = "2",
    sm_text_col = "2",
    lg_text_col = "3",
    height_lg = "3",
    height_sm = "3",
    marginT = false,
    text_size = "base",
    overide = "";
</script>

<div
  class="{borderAll} bg-opacity-70 bg-white h-[{15 *
    height_sm}dvi] lg:col-span-{lg_col_span} col-span-{sm_col_span} lg:h-[{5 *
    height_lg}dvi] {marginT
    ? 'mt-[15dvi] lg:mt-[5dvi]'
    : ''} {overide} "
>
  <div
    class="p-[5dvi] lg:p-[2dvi] flex-col justify-start text-{text_size}_sm lg:text-{text_size}_lg {text_size ==
    'cap'
      ? 'font-bold'
      : ''} columns-2 {text_size == 'h1'
      ? 'mt-[1dvi] lg:mt-[0.6dvi]'
      : ''} {text_size == 'h2'
      ? 'mt-[1dvi] lg:mt-[0.2dvi]'
      : ''} h-full items-start gap-[10dvi] lg:gap-[4dvi]"
  >
    {#if heading}
      <div class="text-cap_sm lg:text-cap_lg font-bold mb-[5dvi] lg:mb-[1dvi]">
        {headingText}
      </div>
    {/if}
    <p>{label}</p>
  </div>
</div>
