<template>
    <nav class="navbar">
        <div class="container flex items-center justify-between">
            <div class="brand_logo w-32 h-auto overflow-hidden">
                <router-link to="/">
                    <Logo/>
                </router-link>
            </div>

            <div class="search_section hidden md:flex items-center w-2/5">
                <SearchBar/>
            </div>

            <div class="buttons flex items-center gap-4 text-3xl">
                <DarkModeToggle></DarkModeToggle>
                <router-link to="/">
                    <div class="wishList hidden md:block cursor-pointer relative">
                        <Icon icon="mage:heart-square-fill" />
                        <div class="qntBtn bg-green-300">5</div>
                    </div>
                </router-link>
                
                <div @click="open" class="carts hidden md:block cursor-pointer relative">
                    <Icon icon="mage:basket-fill" />
                    <div class="qntBtnPing"></div>
                    <div class="qntBtn bg-secondary">2</div>
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
import SearchBar from './SearchBar.vue';
import DarkModeToggle from './DarkModeToggle.vue';


const {isOpen, open, close} = useModal();


</script>

<style lang="postcss">
.navbar{
    @apply py-4 bg-accent dark:bg-accentHover text-accentText dark:text-accentTextDark sticky top-0 z-30 md:z-10;

    .qntBtnPing{
        @apply hidden md:flex absolute -top-1 -right-1 size-4 bg-secondary rounded-full animate-ping;
    }
    .qntBtn{
        @apply hidden md:flex items-center justify-center absolute -top-1 -right-1 text-xs size-4 rounded-full text-slate-900;
    }
}

</style>