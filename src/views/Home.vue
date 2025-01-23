<template>
    <!-- Sidebar for desktop -->
    <Sidebar class="hidden md:block" />

    <main
        class="main_wrapper w-[calc(100vw_-_2rem)] md:w-[calc(100%_-_18rem)] pt-4"
    >
        <header>
            <Carousel />
        </header>

        <section class="mt-6">
            <ProductCarousel
                :products="productStore.products"
                :title="`BEST SALES`"
                :desc="`Do not miss the current offers until the end of March.`"
            />
            <SalesPolicy />
            <ProductCarousel
                :products="productStore.products"
                :title="`NEW PRODUCT'S`"
                :desc="`New products with updated stocks.`"
            />
        </section>
    </main>

    <!-- Sidebar for mobile -->
    <Sidebar class="block md:hidden" />
</template>

<script setup>
import Carousel from "../components/app/layout/carousel/Carousel.vue";
import ProductCarousel from "../components/app/layout/productCarousel/ProductCarousel.vue";
import SalesPolicy from "../components/app/layout/salesPolicy/SalesPolicy.vue";
import Sidebar from "../components/app/layout/sidebar/Sidebar.vue";
import { useProductStore } from "../stores/storeProducts";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
    productStore.getProducts();
});
</script>
