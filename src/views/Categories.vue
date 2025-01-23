<template>
    <!-- Sidebar for desktop -->
    <Sidebar class="hidden md:block" />

    <main
        class="main_wrapper w-[calc(100vw_-_2rem)] md:w-[calc(100%_-_18rem)] pt-0"
    >
        <section>
            <!-- <ProductCarousel /> -->
            <Filter class="block md:hidden mt-5" />

            <ProductByCategory
                :products="productStore.products"
                :title="$route.params.category"
                :desc="`Do not miss the current offers until the end of March.`"
            />

            <!-- Coustomer choise products carousel -->
            <ProductCarousel
                :products="productStore.products"
                :title="`CUSTOMER CHOISE`"
                :desc="`Do not miss the current offers until the end of March.`"
            />
        </section>
    </main>
</template>

<script setup>
import Sidebar from "../components/app/layout/sidebar/Sidebar.vue";
import ProductCarousel from "../components/app/layout/productCarousel/ProductCarousel.vue";
import Filter from "../components/app/layout/filter/Filter.vue";
import { useProductStore } from "../stores/storeProducts";
import ProductByCategory from "../components/app/layout/productByCategory/ProductByCategory.vue";

import { useRoute } from "vue-router";

import { useCategoryStore } from "../stores/storeCategories";
import { onMounted, watch } from "vue";

// route and store
const route = useRoute();
const categoryStore = useCategoryStore();
const productStore = useProductStore();

const currentCategory = (address) => categoryStore.getCategory(address);
const getProduct = (id) => productStore.getProductsByCategory(id);

watch(route, (newCategory) => {
    if (newCategory) {
        const currentCategoryId = currentCategory(
            newCategory.params.category
        ).id;
        getProduct(currentCategoryId);
    }
});

onMounted(() => {
    const currentCategoryId = currentCategory(route.params.category).id;
    getProduct(currentCategoryId);
});
</script>
