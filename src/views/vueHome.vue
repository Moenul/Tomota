<template>
    <TopNav/>
    <Navbar/>
    <header class="container">
        <h1>Header Section</h1>
    </header>

    <div class="container overflow-y-auto overflow-x-hidden">
        <p class="text-3xl text-violet-600">Home Page</p>
        <li v-for="product in products">
            {{ product.id }}. {{ product.name }} (${{ product.price }})
        </li>

        <div class="flex items-center me-4 relative">
            <input id="red-checkbox" type="checkbox" value="" class="appearance-none peer forced-colors:appearance-auto w-4 h-4 text-red-500 border-2 border-white bg-gray-200 rounded focus:ring-2 focus:ring-red-500 ">
            <Icon icon="tabler:square-check-filled" class="invisible peer-checked:visible forced-colors:hidden text-red-500 text-md absolute -left-0" />
            <label for="red-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Custom Checkbox</label>
        </div>
    </div>

    <BottomNav/>
</template>

<script setup>
import Navbar from '../components/app/layout/navbar/Navbar.vue';
import TopNav from '../components/app/layout/navbar/TopNav.vue';
import BottomNav from '../components/app/layout/navbar/BottomNav.vue';
import { useProductStore } from '../stores/storeProduct';
import { Icon } from '@iconify/vue/dist/iconify.js';

const productStore = useProductStore()

const products = productStore.products


</script>