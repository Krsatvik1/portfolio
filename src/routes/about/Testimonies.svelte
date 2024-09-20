<script>
    import Title from "$lib/components/Title.svelte";
    import Body from "$lib/components/Body.svelte";
    export let from = "Forgot..",
    message = "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"
</script>
<div class="col-span-4 lg:col-span-2 grid grid-cols-2 mt-[15dvi] lg:mt-[5dvi]">
    <Body text_col label={message} height="h-[60dvi] lg:h-[15dvi]" overide="col-span-2"/>
    <div class="hidden lg:block"></div>
    <Title sm_col_span={1} lg_col_span={1} text_size="cap" height="h-[15dvi] lg:h-[5dvi]" label="Now Form"/>
</div>
