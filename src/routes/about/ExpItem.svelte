<script>
    import { borderAll , border_b , borderDark_b } from "$lib/commonClasses.js";
    import Title from "$lib/components/Title.svelte";
    import Body from "$lib/components/Body.svelte";
    import Button from "$lib/components/Button.svelte";
</script>
<div class="relative grid grid-cols-2 lg:grid-cols-4 col-span-4 mt-[15dvi] lg:mt-[5dvi]">
    <Title text_size="h2" height_lg={1} height_sm={1}/>
    <Title text_size="cap" height_lg={1} height_sm={1} sm_col_span={1} lg_col_span={1}/>
    <div class="hidden lg:block" />
    <div>
        <Title text_size="cap" height_lg={1} height_sm={1} sm_col_span={1} lg_col_span={1}/>
        <Button label="Say Hello" mode="primary"/>
    </div>
    <Body heading=true/>
</div>
