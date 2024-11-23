<template>
    <div class="product_carousel">
        <div class="carousel_header">
            <div>
                <div class="title">BEST SALES</div>
                <div class="desc">
                    Do not miss the current offers until the end of March.
                </div>
            </div>
            <div>
                <div class="view_btn">
                    <p class="mr-2">View all</p>
                    <Icon icon="bi:arrow-right" />
                </div>
            </div>
        </div>
        <div class="carouselWrapper">
            <div ref="carouselContainer" class="carouselContainer">
                <div
                    ref="carouselItem"
                    class="carouselItem"
                    v-for="product in productStore.products"
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

            <!-- Left Scroll Button -->
            <button
                @click="scrollLeft(itemWidth)"
                class="scrollBtn -left-3 md:-left-5"
            >
                <Icon icon="uiw:left" />
            </button>

            <!-- Right Scroll Button -->
            <button
                @click="scrollRight(itemWidth)"
                class="scrollBtn -right-3 md:-right-5"
            >
                <Icon icon="uiw:right" />
            </button>
        </div>
    </div>
    <!-- {{ productStore.products }} -->
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { onMounted, ref } from "vue";
import { useProductStore } from "../../../../stores/storeProduct";

const productStore = useProductStore();

const carouselContainer = ref();
const carouselItem = ref();

let itemWidth = 0;

const scrollLeft = (e) => {
    console.log(e);
    if (carouselContainer.value) {
        carouselContainer.value.scrollLeft -= e;
    }
};

const scrollRight = (e) => {
    console.log(e);
    if (carouselContainer.value) {
        carouselContainer.value.scrollLeft += e;
    }
};

onMounted(() => {
    itemWidth = carouselItem.value[0].offsetWidth;

    productStore.getProducts();
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
            @apply rounded-md md:overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:h-0 grid grid-cols-2 md:flex md:flex-nowrap divide-x dark:divide-borderDark;

            .carouselItem {
                @apply md:min-w-44 overflow-hidden relative;

                .imageSection {
                    @apply w-full md:size-44 overflow-hidden;
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
                                @apply px-2 py-1 rounded-2xl flex justify-between items-center gap-1 shadow border dark:border-borderDark text-textSecondary dark:text-textSecondaryDark;
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

        .scrollBtn {
            @apply hidden size-10 rounded-full text-xl md:flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 bg-section/80 dark:bg-sectionDark/80 text-text dark:text-textDark shadow-md;
        }
    }
}
</style>
