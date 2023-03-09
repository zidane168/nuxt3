<!-- /products/:id -->

<template>
    <ProductDetail :product="product" />
</template>

<script setup> /* missing setup will failed */
    const { id } = useRoute().params    
    const uri = 'https://fakestoreapi.com/products/' + id

    // fetch the product 
    const { data: product } = await useFetch(uri, { key: id }) 

    definePageMeta({
        layout: 'products'      /* use product default layouts layouts/products.vue */ 
    })  

</script>

<style lang="scss" scoped>
    .red {
        color: red;
        font-weight: bold;
    }
</style>