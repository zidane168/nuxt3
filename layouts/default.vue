<template>
    <div> 
        <header>
            <div class="layout">
                This is default Template for Index 
            </div>
            <nav> 
                <ul>
                    <li> <NuxtLink to="/"> Home </NuxtLink> </li>
                    <li> <NuxtLink to="/about"> About </NuxtLink> </li>
                    <li> <NuxtLink to="/products"> Products </NuxtLink> </li>
                </ul>
            </nav>
            <a href="about"> Normal link </a>
        </header>

        <!-- output the page content -->
        <div>
            <slot /> <!-- use slot for get content of page -->
        </div> 
    </div>
</template>

<style >
    .layout {
        background-color: bisque;
        border-radius: 10px;
        padding: 10px;
        color: orangered;
        justify-content: center;
        display: flex;
        font-weight: bold;
    }

    li {
        padding: 10px;
    }
    .router-link-exact-active {
        color: #12b488;     /* if you use NuxtLink u can customize the any active color, very convenience */
    }
</style>
