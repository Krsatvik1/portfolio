<script>
    import {navState} from '$lib/store.js'
    import Button from '$lib/components/Button.svelte';
    import User from '$lib/components/icons/User.svelte'
    let onClick = (label)=>{
        navState.update(label)
    }
    console.log($navState)

</script>
<Button label="about" mode="{$navState=='about'?'active':'primary'}" {onClick} invert={false} logo={true} sticky={true}>
    <svelte:component this={User} {onClick}/>
</Button>
<Button label="work" mode="{$navState=='work'?'active':'primary'}" {onClick} invert={false} logo={true} sticky={true}>
    <svelte:component this={User} {onClick}/>
</Button>