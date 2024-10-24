<template>
    <!-- Shadow Layer -->
    <div class="shadowLayer w-full h-screen fixed top-0 left-0 bg-slate-900/15 md:hidden"></div>

    <div v-click-outside="handleOutsideClick">

        <!-- Search Bar -->
    <div  class="searchBar w-5/6 h-12 px-3 rounded bg-white fixed m-auto left-0 right-0 top-20 flex items-center overflow-hidden md:w-full md:h-10 md:px-2 md:relative md:top-0">
        <div class="icon text-slate-500 w-8 px-1 text-lg">
            <Icon icon="mage:search"/>
        </div>
        <input type="text" class="w-full px-1 py-2 text-slate-800 outline-none" placeholder="Search ..">
        <button type="submit" class="text-sm font-medium px-4 py-1 bg-secondary text-black rounded-sm hover:bg-orange-400">Search</button>
    </div>

    <!-- Search Result -->
    <div class="searchResult w-5/6 min-h-36 px-3 rounded bg-slate-100 fixed m-auto left-0 right-0 top-36 overflow-hidden md:hidden">
        Search Results...
    </div>

    </div>
    
</template>
<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

const emits = defineEmits('toggleSearch');

const handleOutsideClick = () => {
    emits('toggleSearch');    
}



</script>



<style lang="postcss">





</style>