<template> 
    <div class="grid grid-cols-2 gap-2"> 
        <img :src="product.image" alt="product thumb" class="thumb" />
        <div>
            <h3 class="mb-[10px]"> {{ product.title  }}  </h3>
            <hr /> 
            <p class="red"> {{ vnd.format(product.price) }} </p>
            <hr />
            <div class="mt-2"> Description </div> 
            <p class="text-gray-400 py-2 text-justify"> {{ product.description }} </p> 
            <button class="btn flex">
                <i class="material-icons mr-2"> add_shopping_cart </i>
                <span> Add to cart </span>
            </button>
        </div> 
 
    </div> 
</template>

<script setup> 
    const { product } = defineProps(['product']) 

    // let vnd = Intl.NumberFormat('vi', {
    //     style: 'currency',
    //     currency: 'VND',
    // });

    let vnd = Intl.NumberFormat('us', {
        style: 'currency',
        currency: 'USD',
    });
    
</script>

<style lang="scss" scoped>
    .red {
        color: red;
        font-weight: bold;
    }
    .thumb {
        max-width:  40%;  
    }
</style>