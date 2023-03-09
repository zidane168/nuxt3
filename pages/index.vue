<template>
    <div>
        <h2> Home  </h2>
        
        <header>
            <nav>
                <NuxtLink to="/"> Nuxt Doso </NuxtLink>
                <ul>
                    <li> <NuxtLink to="/"> Home </NuxtLink> </li>
                    <li> <NuxtLink to="/about"> About </NuxtLink> </li>
                    <li> <NuxtLink to="/products"> Products </NuxtLink> </li>
                </ul>
            </nav>
            <a href="about"> Normal link </a>
        </header>
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

h2 {
    color: red;
}

</style>
