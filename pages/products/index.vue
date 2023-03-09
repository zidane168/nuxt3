<!-- /products/ -->
<template>
    <div>
        <h2> Product index page </h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products"> 
                <NuxtLink :to="`/products/${p.id}`"> 
                    <h2 class="text-[25px]"> {{ p.title }} </h2>
                </NuxtLink>  
                <p class="red"> ${{  p.price  }} </p> 
                <p class="blue"> {{  p.category  }} </p> 
                <p> {{  p.description  }} </p> 
                <div class="flex justify-between">
                    <div> {{  p.rating.rate  }} </div> 
                    <div> {{  p.rating.count  }} </div> 
                </div>
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