<template>
    <div>  

        <div class="layout">
            This is default Template for Product page   
        </div>
        <!-- output the page content -->
        <div>
            <slot /> <!-- use slot for get content of page -->
        </div> 

        <footer>
            <ul>
                <li> <NuxtLink to="/"> Home </NuxtLink> </li>
                <li> <NuxtLink to="/about"> About </NuxtLink> </li>
                <li> <NuxtLink to="/products"> Products </NuxtLink> </li>
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