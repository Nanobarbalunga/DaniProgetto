<template>

    <h1><slot name="header"></slot></h1>
    
    <h1>Super cinappi!!!!</h1>
    <h2> {{ msg }}  </h2>
    <h6> {{ data }}</h6>

    <slot></slot>
</template>

<script>
export default {
    name: 'CinappiWorld',
    props:{
        msg: String,
        data: String
    },
    mounted(){
        this.$emit('OnPlay','ciaooooo!')
    }
}
</script>