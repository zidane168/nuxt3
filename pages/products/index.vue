<!-- /products/ -->
<template>
    <div>
        <h2> Product index page </h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products"> 
                <ProductCard :product="p" /> 
            </div>
        </div>
    </div>
</template>

<script setup> 
    definePageMeta({
        layout: 'products'      /* use product default layouts layouts/products.vue */ 
    }) 

    // fetch the products
    const { data: products } = await useFetch("https://fakestoreapi.com/products")
</script>

<style lang="scss" scoped>
    .red {
        color: red;
        font-weight: bold;
    }
    
    .blue {
        font-weight: bold;
        border-radius: 10px;
        padding: 10px;
        background-color: blanchedalmond;
    }
</style>