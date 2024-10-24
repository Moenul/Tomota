<template>
    <nav class="container bottomNav">
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
        <div @click="toggleSearch" class="item">
            <Icon icon="mage:search" />
            <span class="itemName">Search</span>
        </div>
        <div @click="toggleMeno" class="item ">
            <Icon icon="ph:circles-three-plus-light" />
            <span class="itemName">Menu</span>
        </div>
    </nav>

    <!-- Cart Dropdown -->
        <CartModal v-if="isOpen" @close="close" />
    <!-- Cart Dropdown -->

    <!-- Meno Modal -->
        <MenoModal v-if="isMenoOpen" @toggleMeno="toggleMeno" />
    <!-- Meno Modal -->

    <!-- Search Bar -->
        <SearchBar v-if="isSearchOpen" @toggleSearch="toggleSearch" />
    <!-- Search Bar -->

</template>
<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useModal } from '../../../../composable/utillity/useModal';
import CartModal from './CartModal.vue';
import MenoModal from './MenoModal.vue';
import SearchBar from './SearchBar.vue';


const {isOpen, open, close} = useModal();

// meno modal
const isMenoOpen = ref(false);

const toggleMeno = () =>{
    setTimeout(() => {
        isMenoOpen.value = !isMenoOpen.value
    },0)
}

// search bar modal
const isSearchOpen = ref(false);

const toggleSearch = () =>{
    setTimeout(() => {
        isSearchOpen.value = !isSearchOpen.value
    }, 0)
}


</script>

<style lang="postcss">

.bottomNav{
    @apply w-full h-14 bg-slate-50 flex justify-between items-center fixed bottom-0 shadow-a-md z-30 md:hidden;

    .item{
        @apply size-14 grid justify-items-center items-center bg-slate-50 text-2xl hover:text-primaryStrong;
    
        .itemName{
            @apply text-xs font-semibold font-mono text-slate-700 -mt-4 select-none;
        }
        &:hover .itemName{
            @apply text-primaryStrong
        }
    }

    .quineItem{
        @apply size-16 border-4 border-slate-100 shadow-a-md flex items-center justify-center text-4xl rounded-full bg-primary text-white mb-6;
    }

}
</style>