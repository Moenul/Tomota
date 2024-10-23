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
            <section class="w-full p-3">
                <div class="cartBox">
                    <!-- Items -->
                    <div v-for="i in 4" class="items">
                        <div class="itemImage size-16">
                            <img class="size-16 object-cover" src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="">
                        </div>
                        <div class="itemDetails">
                            <p class="text-base font-medium truncate">Lotto canvas shows - recomanded for bangladeshi</p>
                            <div class="h-8 flex justify-between items-center mt-2">
                                <p class="text-sm font-semibold px-3">$399</p>
                                <div class="w-1/2">
                                    <div class="quantityCounter">
                                        <div class="incrementDecrementBtn">
                                            <Icon icon="tabler:minus" />
                                        </div>
                                        <div class="counter">0</div>
                                        <div class="incrementDecrementBtn">
                                            <Icon icon="tabler:plus" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button class="text-2xl">
                                        <Icon icon="fluent:bin-recycle-full-24-filled" />
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
                            <input class="w-3/5 outline-none" type="text" placeholder="Enter Coupon">
                            <button class="w-2/5 py-2 bg-slate-900 text-slate-50 text-center text-sm" type="submit">Apply Coupon</button>
                        </div>

                        <div class="subtotalBox">
                            <p>Sub Total</p>
                            <p>$2035</p>
                        </div>
                    </div>

                    <!-- Place order btn -->
                    <div class="placeOrderBtn ">
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
import { Icon } from '@iconify/vue';

const emits = defineEmits('close')


const handleOutsideClick = () => {
    emits('close');
};


</script>

<style lang="postcss">

.cartDropdown{
    @apply fixed left-0 top-0 bottom-0 w-full text-base z-20;

    .shadowLayer{
        @apply bg-slate-900/15 h-screen hidden md:block;
    }

    .cartSection{
        @apply w-[calc(100vw_-_1rem)] h-[calc(100vh_-_15rem)] bottom-16 absolute m-auto left-0 right-0 rounded-md overflow-hidden border border-slate-200 shadow-md bg-slate-50 text-slate-800 md:left-auto md:right-0 md:bottom-0 md:w-96 md:h-screen md:rounded-none md:border-none;
    
        .cartHeader{
            @apply w-full px-3 py-4 md:py-6 flex justify-between text-xl bg-primary text-slate-50;
        }

        .cartBox{
            @apply w-full max-h-[calc(100vh_-_34rem)] md:max-h-[calc(100vh_-_20rem)] overflow-x-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-300 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded;
            
            .items{
                @apply w-full flex justify-between my-2 px-1 py-2 border-y border-gray-300 overflow-hidden;
                
                .itemDetails{
                    @apply w-[calc(100%-4rem)] px-1;

                    .quantityCounter{
                        @apply w-28 h-8 p-1 flex justify-between items-center rounded-lg border-2 border-slate-300 text-xl shadow-sm;
                    
                        .incrementDecrementBtn{
                            @apply size-6 flex justify-center items-center rounded-md bg-slate-200 cursor-pointer;
                        }
                    }
                }
            }
        
        }

        .cartFooter{
            @apply w-full p-3 pb-4 bg-white border-t border-slate-300 absolute bottom-0 md:pb-3;
        
            .tokenAndSubtotal{
                @apply w-full px-6 py-2 border border-slate-300;

                .tokenBox{
                    @apply w-full flex items-center overflow-hidden bg-white border border-slate-900 rounded;
                }

                .subtotalBox{
                    @apply flex justify-center gap-4 text-base font-medium mt-2;
                }
            }
        
            .placeOrderBtn{
                @apply w-full border border-slate-900 rounded mt-3 bg-white hover:bg-primaryStrong/5 hover:border-primaryStrong hover:text-primaryStrong;
            }
            .viewCartBtn{
                @apply w-full rounded mt-3 bg-primary text-white hover:bg-primaryStrong/90;
            }
        }
    }
}

</style>