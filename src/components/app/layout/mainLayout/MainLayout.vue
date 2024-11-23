<template>
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
</template>

<script setup>
import Carousel from "../carousel/Carousel.vue";
import ProductCarousel from "../productCarousel/ProductCarousel.vue";
import SalesPolicy from "../salesPolicy/SalesPolicy.vue";
</script>
