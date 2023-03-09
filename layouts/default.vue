<template>
    <link href="/assets/css/tailwind.css" rel="stylesheet">
    <div> 
        <header class="shadow-sm bg-white">
            <div class="layout">
                This is default Template for Index 
            </div>
            <nav class="container mx-auto p-4 flex justify-between"> 
                <NuxtLink to="https://learn-tech-tips.blogspot.com" class="font-bold"> Learn Tech Tips </NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/"> Home </NuxtLink> </li>
                    <li> <NuxtLink to="/about"> About </NuxtLink> </li>
                    <li> <NuxtLink to="/products" class="btn"> Products </NuxtLink> </li>
                </ul>
            </nav> 
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
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
