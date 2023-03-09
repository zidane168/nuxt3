<!-- /products/:id -->

<template> 
    <div>
        <Head>
            <Title> NuxtJS | {{  product.title }} </Title>
            <Meta name="description" :content="product.description"> </Meta> 
        </Head>
        <ProductDetail :product="product" /> 
    </div>
</template>

<script setup> /* missing setup will failed */
    const { id } = useRoute().params    
    const uri = 'https://fakestoreapi.com/products/' + id

    // fetch the product 
    const { data: product } = await useFetch(uri, { key: id }) 

    if (!product.value) {
        throw createError( {statusCode: 404, statusMessage: 'Product Not Found', fatal: true })
    }

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