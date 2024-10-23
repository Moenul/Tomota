<template>
    <nav class="py-4 bg-primary text-white sticky top-0 z-30 md:z-10">
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
                
                <div @click="open" class="carts hidden md:block cursor-pointer relative">
                    <Icon icon="mage:basket-fill" />
                    <div class="cartQntPing hidden md:flex absolute -top-1 -right-1 size-4 bg-secondary rounded-full animate-ping"></div>
                    <div class="cartQnt hidden md:flex items-center justify-center absolute -top-1 -right-1 text-xs size-4 bg-secondary rounded-full text-slate-900">2</div>
                </div>

                <!-- Cart Dropdown -->
                    <CartModal v-if="isOpen" :isOpen="isOpen" :open="open" @close="close" />
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
import { useModal } from '../../../../composable/utillity/useModal';
import CartModal from './CartModal.vue';


const {isOpen, open, close} = useModal();


</script>