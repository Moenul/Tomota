<template>
    <div class="products_section">
        <div class="products_header">
            <div>
                <div class="title">{{ props.title }}</div>
                <div class="desc">
                    {{ props.desc }}
                </div>
            </div>
            <div>
                <SortSelection />
            </div>
        </div>
        <div class="productsWrapper">
            <div class="productsContainer" v-if="props.products.length > 0">
                <ProductCard
                    v-for="product in props.products"
                    :product
                    :key="index"
                />
            </div>
            <div v-else class="py-4 text-2xl text-center">
                <p>No product found!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductCard from "../product/ProductCard.vue";
import SortSelection from "../sortSelction/SortSelection.vue";

const props = defineProps({
    products: {
        type: Object,
        Required: true,
    },
    title: {
        type: String,
        Required: true,
    },
    desc: {
        type: String,
        Required: true,
    },
});
</script>

<style lang="postcss">
.products_section {
    @apply my-8;
    .products_header {
        @apply flex justify-between items-center;
        .title {
            @apply text-2xl md:text-3xl font-semibold font-mono text-text dark:text-textDark leading-6;
        }
        .desc {
            @apply text-textSecondary dark:text-textSecondaryDark leading-5 mr-2;
        }
    }

    .productsWrapper {
        @apply w-full border dark:border-borderDark rounded-md relative mt-4;
        .productsContainer {
            @apply rounded-md overflow-hidden divide-x grid grid-cols-2 md:grid-cols-5 dark:divide-borderDark;
        }
    }
}
</style>
