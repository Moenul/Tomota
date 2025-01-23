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
            <div class="productsContainer">
                <div
                    class="productItem"
                    v-for="product in props.products"
                    :key="index"
                >
                    <div class="imageSection">
                        <img :src="product.images" alt="" />
                    </div>
                    <div class="detailsSection">
                        <p class="itemName">
                            {{ product.title }}
                        </p>
                        <div class="priceAndCart">
                            <div class="priceAndDiscount">
                                <span class="price">${{ product.price }}</span>
                                <div class="discount">
                                    <Icon icon="mdi:courier" class="text-sm" />
                                    <span class="text-xs">Free Delevary</span>
                                </div>
                            </div>
                            <div class="cart">
                                <Icon icon="mage:basket-fill" />
                                <span class="cartText">Add Cart</span>
                            </div>
                        </div>
                    </div>
                    <div class="favoriteAndQuickview">
                        <div class="fqBtn favoriteBtn">
                            <Icon icon="heroicons:heart" />
                            <!-- <Icon
                                icon="heroicons:heart-solid"
                                class="text-errors"
                            /> -->
                        </div>
                        <div class="fqBtn quickviewBtn">
                            <Icon icon="solar:eye-outline" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
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

            .productItem {
                @apply overflow-hidden relative;

                .imageSection {
                    @apply w-full overflow-hidden;
                    img {
                        @apply w-full aspect-[1/1] object-cover transition ease-in-out;
                    }
                }
                .detailsSection {
                    @apply h-full p-1 mb-4;

                    .itemName {
                        @apply text-base leading-4 mb-1 text-text dark:text-textDark;
                    }
                    .priceAndCart {
                        @apply flex justify-between;
                        .priceAndDiscount {
                            .price {
                                @apply text-base text-errors font-semibold;
                            }
                            .discount {
                                @apply px-2 py-1 rounded-2xl flex justify-between items-center gap-1 shadow bg-primary dark:bg-primaryDark border dark:border-borderDark text-textSecondary dark:text-textSecondaryDark;
                            }
                        }
                        .cart {
                            @apply relative mr-1 size-10 rounded-t-xl rounded-b-3xl border-t-0 self-end flex justify-center items-center cursor-pointer text-2xl text-secondary bg-secondary/10 border-2 border-secondary shadow hover:bg-secondary hover:text-white transition-all ease-in-out duration-200;
                            .cartText {
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
        }
    }
}
</style>
