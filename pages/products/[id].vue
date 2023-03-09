<!-- /products/:id -->

<template>
    <div>
        <p> Products details for <span class="red"> {{ id  }}  </span> </p>
    </div>
</template>

<script setup> /* missing setup will failed */
    const { id } = useRoute().params    
    definePageMeta({
        layout: 'products'      /* use product default layouts layouts/products.vue */ 
    })  
</script>

<style lang="scss" scoped>
    .red {
        color: red;
    }
</style>