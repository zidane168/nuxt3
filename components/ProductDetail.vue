<template>
    <div>
        <img :src="product.image" alt="product thumb" class="thumb" />
        <p> Products details for <span class="red"> {{ product.title  }}  </span> </p>
        <hr />

        <p class="red"> {{ product.price }} </p>
        <p> {{ product.description }} </p> 
    </div> 
</template>

<script setup> 
    const { product } = defineProps(['product']) 
</script>

<style lang="scss" scoped>
    .thumb {
        max-height: 120px;
        min-height: 120px; 
        margin: 0 auto;
    }
</style>