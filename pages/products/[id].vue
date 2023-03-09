<!-- /products/:id -->

<template>
    <div>
        <p> Products details for <span class="red"> {{ product.title  }}  </span> </p>
        <hr />
        <p class="red"> {{ product.price }} </p>
        <p> {{ product.description }} </p> 
    </div>
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