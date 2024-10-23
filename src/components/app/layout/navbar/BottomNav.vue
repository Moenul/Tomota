<template>
    <nav class="container w-full h-14 bg-slate-50 flex justify-between items-center fixed bottom-0 shadow-a-md z-30 md:hidden ">
        <div class="item ">
            <Icon icon="solar:home-angle-outline" />
            <span class="itemName">Home</span>
        </div>
        <div class="item ">
            <Icon icon="solar:heart-linear" />
            <span class="itemName">Favorite</span>
        </div>
        <div @click="open" class="quineItem">
            <Icon icon="mage:basket-fill" />
        </div>
        <div class="item ">
            <Icon icon="mage:search"/>
            <span class="itemName">Search</span>
        </div>
        <div class="item ">
            <Icon icon="ph:circles-three-plus-light" />
            <span class="itemName">Menu</span>
        </div>
    </nav>

    <!-- Cart Dropdown -->
        <CartModal v-if="isOpen" :isOpen="isOpen" :open="open" @close="close" />
    <!-- Cart Dropdown -->

</template>
<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useModal } from '../../../../composable/utillity/useModal';
import CartModal from './CartModal.vue';


const {isOpen, open, close} = useModal();

</script>

<style lang="postcss">
.item{
    @apply size-14 grid justify-items-center items-center bg-slate-50 text-2xl hover:text-primaryStrong;

    .itemName{
        @apply text-xs font-semibold font-mono text-slate-700 -mt-4 select-none hover:text-primaryStrong;
    }
}
.quineItem{
    @apply size-16 border-4 border-slate-100 shadow-a-md flex items-center justify-center text-4xl rounded-full bg-primary text-white mb-6;
}

</style>