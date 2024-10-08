<template>
    <Navbar></Navbar>
    <p class="text-3xl text-violet-600">Home Page</p>
    <div>
        <li v-for="product in products">
            {{ product.id }}. {{ product.name }} (${{ product.price }})
        </li>
    </div>
</template>

<script setup>
import Navbar from '../components/app/layout/navbar/Navbar.vue';
import { useProductStore } from '../stores/storeProduct';

const productStore = useProductStore()

const products = productStore.products


</script>