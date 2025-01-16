<template>
    <!-- Sidebar for desktop -->
    <Sidebar class="hidden md:block" />

    <main
        class="main_wrapper w-[calc(100vw_-_2rem)] md:w-[calc(100%_-_18rem)] pt-0"
    >
        <section>
            <!-- <ProductCarousel /> -->
            <Filter class="block md:hidden mt-5" />

            {{ $route.params }}
            {{ $route.query }}

            <ProductCarousel />
        </section>
    </main>
</template>

<script setup>
import Sidebar from "../components/app/layout/sidebar/Sidebar.vue";
import ProductCarousel from "../components/app/layout/productCarousel/ProductCarousel.vue";
import Filter from "../components/app/layout/filter/Filter.vue";
</script>
