<template>
    <div class="productCard" :class="props.size">
        <ProductImage :src="product.images" :alt="product.title" />
        <div class="detailsSection">
            <router-link :to="`/product/${product.id}`">
                <p class="itemName">
                    {{ product.title }}
                </p>
            </router-link>
            <div class="priceAndCart">
                <div class="priceAndOffer">
                    <span class="price">${{ product.price }}</span>
                    <div class="offer">
                        <Icon icon="mdi:courier" class="text-sm" />
                        <span class="text-xs">Free Delevary</span>
                    </div>
                </div>
                <!-- Add to cart -->
                <AddToCartButton
                    :product="product"
                    label="Add Cart"
                    @added="handleAddToCart"
                />
            </div>
        </div>
        <div class="favoriteAndQuickview">
            <div class="fqBtn favoriteBtn">
                <Icon icon="heroicons:heart" />
                <!-- <Icon icon="heroicons:heart-solid" class="text-errors" /> -->
            </div>
            <div class="fqBtn quickviewBtn">
                <Icon icon="solar:eye-outline" />
            </div>
        </div>
    </div>
</template>
<script setup>
import ProductImage from "./ProductImage.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import AddToCartButton from "../addToCartButton/AddToCartButton.vue";

const props = defineProps({
    product: {
        type: Object,
        Required: true,
    },
    size: {
        type: String,
        Required: true,
    },
});

const handleAddToCart = (product) => {
    console.log(product);
};
</script>

<style lang="postcss">
.productCard {
    @apply overflow-hidden max-w-48 relative;

    .imageSection {
        img {
            @apply aspect-[1/1];
        }
    }
    .detailsSection {
        @apply h-full p-1 mb-4;

        .itemName {
            @apply text-base leading-4 mb-1 text-text dark:text-textDark;
        }
        .priceAndCart {
            @apply flex justify-between;
            .priceAndOffer {
                .price {
                    @apply text-base text-errors font-semibold;
                }
                .offer {
                    @apply px-2 py-1 rounded-2xl flex justify-between items-center gap-1 shadow bg-primary dark:bg-primaryDark border dark:border-borderDark text-textSecondary dark:text-textSecondaryDark;
                }
            }
            .cartButton {
                @apply relative mr-1 size-10 rounded-t-xl rounded-b-3xl border-t-0 self-end flex justify-center items-center cursor-pointer text-2xl text-secondary bg-secondary/10 border-2 border-secondary shadow hover:bg-secondary hover:text-white transition-all ease-in-out duration-200;
                .cartLabel {
                    @apply absolute text-xs text-nowrap text-textSecondary dark:text-textSecondaryDark -bottom-5;
                }
            }
        }
    }

    .favoriteAndQuickview {
        @apply w-8 absolute top-2 -right-10 overflow-hidden rounded-md shadow transition-all duration-500 ease-in-out bg-section dark:bg-sectionDark divide-y divide-border dark:divide-borderDark;

        .fqBtn {
            @apply size-8 flex justify-center items-center text-lg cursor-pointer transition-all duration-200 ease-in-out text-text dark:text-textDark hover:bg-accent dark:hover:bg-accentDark hover:text-accentText dark:hover:text-accentTextDark;
        }
    }

    &:hover {
        @apply shadow-2xl md:shadow-xl;
    }

    &:hover .imageSection img {
        @apply scale-125;
    }
    &:hover .detailsSection {
        @apply bg-section dark:bg-sectionDark;
    }
    &:hover .favoriteAndQuickview {
        @apply right-2;
    }
}
</style>
