<template>
    <div class="card text-center">
        <img :src="product.image" alt="product thumb" class="thumb" />
        <h2 class="text-[18px] truncate m-4"> {{ product.title }} </h2>
        <NuxtLink :to="`/products/${product.id}`"> 
            <p class="btn my-4"> View more </p> 
        </NuxtLink>   
    </div>
</template>

<script setup> 
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
    .thumb {
        max-height: 120px;
        min-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>