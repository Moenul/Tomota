<template>
    <div class="product_carousel">
        <div class="carousel_header">
            <div>
                <div class="title">{{ props.title }}</div>
                <div class="desc">
                    {{ props.desc }}
                </div>
            </div>
            <div>
                <div class="view_btn">
                    <p class="mr-2">View all</p>
                    <Icon icon="bi:arrow-right" />
                </div>
            </div>
        </div>
        <div class="carouselWrapper" v-carousel-slide>
            <div v-if="props.products.length > 0" class="carouselContainer">
                <ProductCard
                    v-for="product in props.products"
                    :product
                    :key="index"
                    :size="'md:min-w-44'"
                />
            </div>
            <div v-else class="py-4 text-2xl text-center">
                <p>No product found!</p>
            </div>

            <!-- Left Scroll Button -->
            <button
                class="scrollBtn slideLeft hidden md:flex -left-3 md:-left-5"
            >
                <Icon icon="uiw:left" />
            </button>

            <!-- Right Scroll Button -->
            <button
                class="scrollBtn slideRight hidden md:flex -right-3 md:-right-5"
            >
                <Icon icon="uiw:right" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import ProductCard from "../product/ProductCard.vue";

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
.product_carousel {
    @apply my-8;
    .carousel_header {
        @apply flex justify-between items-center;
        .title {
            @apply text-2xl md:text-3xl font-semibold font-mono text-text dark:text-textDark leading-6;
        }
        .desc {
            @apply text-textSecondary dark:text-textSecondaryDark leading-5 mr-2;
        }
        .view_btn {
            @apply flex items-center justify-between text-nowrap px-4 py-2 rounded-full border cursor-pointer bg-section dark:bg-sectionDark text-text dark:text-textDark border-border dark:border-borderDark hover:bg-primary dark:hover:bg-primaryDark;
        }
    }

    .carouselWrapper {
        @apply w-full border dark:border-borderDark rounded-md relative mt-4;
        .carouselContainer {
            @apply rounded-md overflow-hidden md:overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:h-0 grid grid-cols-2 md:flex md:flex-nowrap divide-x dark:divide-borderDark;
        }

        .scrollBtn {
            @apply size-10 rounded-full text-xl justify-center items-center absolute top-1/2 transform -translate-y-1/2 bg-section/80 dark:bg-sectionDark/80 text-text dark:text-textDark shadow-md;
        }
    }
}
</style>
