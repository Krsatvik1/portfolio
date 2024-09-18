<script>
    import {navState} from '$lib/store.js'
    import Button from '$lib/components/Button.svelte';
    import User from '$lib/components/icons/User.svelte';
    import { goto } from '$app/navigation'
    import Briefcase from '$lib/components/icons/Briefcase.svelte';
    let onClick = (label)=>{
        navState.update(label)
        if (label=='about') {
            goto('/about',{noScroll:true})
        }else{
            goto('/',{noScroll:true})
        }
    }
    console.log($navState)

</script>
<Button label="about" mode="{$navState=='about'?'active':'primary'}" {onClick} invert={false} logo={true} sticky={true}>
    <svelte:component this={User} {onClick}/>
</Button>
<Button label="work" mode="{$navState=='work'?'active':'primary'}" {onClick} invert={false} logo={true} sticky={true}>
    <svelte:component this={Briefcase} {onClick}/>
</Button>