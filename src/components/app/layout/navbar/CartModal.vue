<template>
    <div class="cartDropdown">
        <!-- Shadow Layer -->
        <div class="shadowLayer"></div>

        <!-- Cart Section -->
        <div v-click-outside="handleOutsideClick" class="cartSection">
            <header class="cartHeader">
                <p>Shopping Carts</p>
                <button @click="$emit('close')">
                    <Icon icon="clarity:no-access-solid" />
                </button>
            </header>
            <section class="w-full p-3 bg-section dark:bg-sectionDark">
                <div class="cartBox">
                    <!-- Items -->
                    <div v-for="i in 4" class="items">
                        <div class="itemImage size-16">
                            <img
                                class="size-16 object-cover"
                                src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
                                alt=""
                            />
                        </div>
                        <div class="itemDetails">
                            <p class="text-base font-medium truncate">
                                Lotto canvas shows - recomanded for bangladeshi
                            </p>
                            <div
                                class="h-8 flex justify-between items-center mt-2"
                            >
                                <p class="text-sm font-semibold px-3">$399</p>
                                <div class="w-1/2">
                                    <QuantitySelector
                                        v-model="productQuantity"
                                        :minQuantity="1"
                                        :maxQuantity="4"
                                    />
                                </div>
                                <div>
                                    <button class="text-2xl">
                                        <Icon
                                            icon="fluent:bin-recycle-full-24-filled"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items -->
                </div>
            </section>
            <footer class="cartFooter">
                <!-- Token and Subtotal -->

                <div class="tokenAndSubtotal">
                    <div class="tokenBox">
                        <div class="icon text-slate-500 w-10 px-3 text-lg">
                            <Icon icon="streamline:discount-percent-coupon" />
                        </div>
                        <input
                            class="w-3/5 outline-none"
                            type="text"
                            placeholder="Enter Coupon"
                        />
                        <button
                            class="w-2/5 py-2 bg-slate-900 text-slate-50 text-center text-sm"
                            type="submit"
                        >
                            Apply Coupon
                        </button>
                    </div>

                    <div class="subtotalBox">
                        <p>Sub Total</p>
                        <p>$2035</p>
                    </div>
                </div>

                <!-- Place order btn -->
                <div class="placeOrderBtn">
                    <router-link to="/">
                        <p class="w-full py-2 text-center">Place Order</p>
                    </router-link>
                </div>

                <!-- View cart btn -->
                <div class="viewCartBtn">
                    <router-link to="/">
                        <p class="w-full py-2 text-center">View Cart</p>
                    </router-link>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import QuantitySelector from "../quantitySelector/QuantitySelector.vue";

const emits = defineEmits("close");

const handleOutsideClick = () => {
    emits("close");
};

const productQuantity = ref(0);
</script>

<style lang="postcss">
.cartDropdown {
    @apply fixed left-0 top-0 bottom-0 w-full text-base z-20;

    .shadowLayer {
        @apply bg-primaryDark/30 dark:bg-primary/20 h-screen hidden md:block;
    }

    .cartSection {
        @apply w-[calc(100vw_-_1rem)] h-[calc(100vh_-_15rem)] bottom-16 absolute m-auto left-0 right-0 rounded-md overflow-hidden border border-border dark:border-borderDark shadow-md bg-section dark:bg-sectionDark text-text dark:text-textDark md:left-auto md:right-0 md:bottom-0 md:w-96 md:h-screen md:rounded-none md:border-none;

        .cartHeader {
            @apply w-full px-3 py-4 md:py-6 flex justify-between text-xl bg-accent dark:bg-accentHover text-accentText dark:text-textDark;
        }

        .cartBox {
            @apply w-full max-h-[calc(100vh_-_34rem)] md:max-h-[calc(100vh_-_20rem)] overflow-x-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-600 [&::-webkit-scrollbar-thumb]:bg-gray-700 dark:[&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded;

            .items {
                @apply w-full flex justify-between my-2 px-1 py-2 border-y border-border dark:border-borderDark overflow-hidden;

                .itemDetails {
                    @apply w-[calc(100%-4rem)] px-1;
                }
            }
        }

        .cartFooter {
            @apply w-full p-3 pb-4 bg-section dark:bg-sectionDark border-t border-border dark:border-borderDark absolute bottom-0 md:pb-3;

            .tokenAndSubtotal {
                @apply w-full px-6 py-2 border border-border dark:border-borderDark;

                .tokenBox {
                    @apply w-full flex items-center overflow-hidden bg-section dark:bg-sectionDark border border-slate-900 rounded;
                    input {
                        @apply bg-section dark:bg-sectionDark;
                    }
                }

                .subtotalBox {
                    @apply flex justify-center gap-4 text-base font-medium mt-2;
                }
            }

            .placeOrderBtn {
                @apply w-full rounded mt-3 bg-section dark:bg-sectionDark border border-slate-900 dark:border-accent hover:bg-accentHover/5 dark:hover:bg-accent hover:border-accentHover dark:hover:border-accent hover:text-accentHover dark:hover:text-accentText;
            }
            .viewCartBtn {
                @apply w-full rounded mt-3 text-accentText bg-accent dark:bg-accentHover hover:bg-accentHover dark:hover:bg-accent;
            }
        }
    }
}
</style>
