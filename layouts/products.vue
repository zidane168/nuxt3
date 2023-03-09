<template>
    <div class="shadow-xs border-t-fuchsia-200">  

        <div class="layout">
            This is default Template for Product page   
        </div>
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot /> <!-- use slot for get content of page -->
        </div> 
        <hr class="mb-[10px]" />
        <footer class="container mx-auto">
            <ul class="flex gap-4 justify-between">
                <li> <NuxtLink to="/"> Home </NuxtLink> </li>
                <li> <NuxtLink to="/about"> About </NuxtLink> </li>
                <li> <NuxtLink to="/products" class="btn"> Products </NuxtLink> </li>
                <li> <NuxtLink to="/products/mario"> Products Detail Mario </NuxtLink> </li>
                <li> <NuxtLink to="/products/tony"> Products Detail Tony </NuxtLink> </li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
    
</style>