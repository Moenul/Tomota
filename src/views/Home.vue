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
            <ProductCarousel />
            <SalesPolicy />
            <ProductCarousel />
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
</script>
