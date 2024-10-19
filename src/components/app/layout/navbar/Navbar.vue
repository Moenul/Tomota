<template>
    <nav class="py-4 bg-primary text-white">
        <div class="container flex items-center justify-between">
            <div class="brand_logo w-32 h-auto overflow-hidden">
                <router-link to="/">
                    <Logo/>
                </router-link>
            </div>

            <div class="search_section hidden md:flex items-center w-2/5">
                <div class="searchBar w-full h-10 px-2 rounded bg-white flex items-center overflow-hidden">
                    <div class="icon text-slate-500 w-8 px-1 text-lg">
                        <Icon icon="mage:search"/>
                    </div>
                    <input type="text" class="w-full px-1 py-2 text-slate-800 outline-none" placeholder="Search ..">
                    <button type="submit" class="text-sm font-medium px-4 py-1 bg-secondary text-black rounded-sm hover:bg-orange-400">Search</button>
                </div>
            </div>

            <div class="buttons flex items-center gap-4 text-3xl text-slate-50">
                <div class="pageMode cursor-pointer">
                    <Icon icon="heroicons:moon-16-solid" />
                    <!-- <Icon icon="basil:sun-solid" class="text-secondary" /> -->
                </div>
                <router-link to="/">
                    <div class="wishList hidden md:block cursor-pointer relative">
                        <Icon icon="mage:heart-square-fill" />
                        <div class="cartQnt hidden md:flex items-center justify-center absolute -top-1 -right-1 text-xs size-4 bg-green-300 rounded-full text-slate-900">5</div>
                    </div>
                </router-link>
                
                <div @click="cartDropdown = !cartDropdown" class="carts hidden md:block cursor-pointer relative">
                    <Icon icon="mage:basket-fill" />
                    <div class="cartQntPing hidden md:flex absolute -top-1 -right-1 size-4 bg-secondary rounded-full animate-ping"></div>
                    <div class="cartQnt hidden md:flex items-center justify-center absolute -top-1 -right-1 text-xs size-4 bg-secondary rounded-full text-slate-900">2</div>
                </div>

                <!-- Cart Dropdown -->
                <div :class="cartDropdown ? 'block' : 'hidden'" class="cartDropdown absolute left-0 top-0 w-full text-base grid z-20">
                    <div class="shadowLayer bg-slate-900/15 h-screen">
                        <div :class="cartDropdown ? 'left-0' : 'left-96'" class="cartSection w-96 h-screen float-end relative bg-slate-50 text-slate-800">
                            <header class="w-full px-3 py-6 flex justify-between text-xl bg-primaryStrong text-slate-50">
                                <p>Shopping Carts</p>
                                <button @click="cartDropdown = false">
                                    <Icon icon="clarity:no-access-solid" />
                                </button>
                            </header>
                            <section class="w-full p-3">
                                <div class="cartBox w-full max-h-[calc(100vh_-_20rem)] overflow-x-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-300 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded">
                                    <!-- Items -->
                                    <div v-for="i in 4" class="items w-full flex justify-between my-2 px-1 py-2 border-y border-gray-300 overflow-hidden">
                                        <div class="itemImage size-16">
                                            <img class="size-16 object-cover" src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="">
                                        </div>
                                        <div class="itemDetails w-[calc(100%-4rem)] px-1">
                                            <p class="text-base font-medium truncate">Lotto canvas shows - recomanded for bangladeshi</p>
                                            <div class="h-8 flex justify-between items-center mt-2">
                                                <p class="text-sm font-semibold px-3">$399</p>
                                                <div class="w-1/2">
                                                    <div class="quantityCounter w-28 h-8 p-1 flex justify-between items-center rounded-lg border-2 border-slate-300 text-xl shadow-sm">
                                                        <div class="decrementBtn size-6 flex justify-center items-center rounded-md bg-slate-200 cursor-pointer">
                                                            <Icon icon="tabler:minus" />
                                                        </div>
                                                        <div class="counter">0</div>
                                                        <div class="incrementBtn size-6 flex justify-center items-center rounded-md bg-slate-200 cursor-pointer">
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
                            <footer class="w-full p-3 bg-white border-t border-slate-300 absolute bottom-0">
                                
                                 <!-- Token and Subtotal -->

                                 <div class="tokenAndSubtotal w-full px-6 py-2 border border-slate-300">
                                    <div class="tokenBox w-full flex items-center overflow-hidden bg-white border border-slate-900 rounded">
                                        <div class="icon text-slate-500 w-10 px-3 text-lg">
                                            <Icon icon="streamline:discount-percent-coupon" />
                                        </div>
                                        <input class="w-3/5 outline-none" type="text" placeholder="Enter Coupon">
                                        <button class="w-2/5 py-2 bg-slate-900 text-slate-50 text-center text-sm" type="submit">Apply Coupon</button>
                                    </div>

                                    <div class="subtotalBox flex justify-center gap-4 text-md font-medium mt-2">
                                        <p>Sub Total</p>
                                        <p>$2035</p>
                                    </div>
                                    </div>

                                    <!-- Place order btn -->
                                    <div class="placeOrder w-full border border-slate-900 rounded mt-3 bg-white hover:bg-primaryStrong/5 hover:border-primaryStrong hover:text-primaryStrong">
                                        <router-link to="/">
                                            <p class="w-full py-2 text-center">Place Order</p>
                                        </router-link>
                                    </div>

                                    <!-- View cart btn -->
                                    <div class="viewCart w-full rounded mt-3 bg-primaryStrong text-white hover:bg-primaryStrong/90">
                                        <router-link to="/">
                                            <p class="w-full py-2 text-center">View Cart</p>
                                        </router-link>
                                    </div>

                            </footer>
                        </div>
                    </div>
                </div>
                <!-- Cart Dropdown -->

                <router-link to="/">
                    <div class="userProfile cursor-pointer">
                        <Icon icon="ri:user-4-fill" />
                    </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import Logo from '../../Logo.vue';

const cartDropdown = ref(false);


</script>