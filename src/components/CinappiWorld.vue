<template>

<h1>Super cinappi!!!!</h1>
<h2> {{ msg }}  </h2>
<h6> {{ data }}</h6>
</template>

<script>
export default {
    name: 'CinappiWorld',
    props:{
        msg: String,
        data: String
    }
}
</script>