<template>
    <!-- Shadow Layer -->
    <div class="shadowLayer"></div>

    <div v-click-outside="handleOutsideClick">

        <!-- Search Bar -->
    <div  class="searchBar">
        <div class="icon">
            <Icon icon="mage:search"/>
        </div>
        <input type="text" class="" placeholder="Search ..">
        <button type="submit" class="">Search</button>
    </div>

    <!-- Search Result -->
    <div class="searchResult">
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

.shadowLayer{
    @apply w-full h-screen fixed top-0 left-0 bg-primaryDark/30 dark:bg-primary/20 md:hidden;
}

.searchBar{
    @apply w-5/6 h-12 px-3 rounded bg-primary dark:bg-primaryDark fixed m-auto left-0 right-0 top-20 flex items-center overflow-hidden md:w-full md:h-10 md:px-2 md:relative md:top-0;

    .icon{
        @apply text-slate-500 w-8 px-1 text-lg;
    }

    input[type=text]{
        @apply w-full px-1 py-2 bg-primary dark:bg-primaryDark text-text dark:text-textDark outline-none;
    }
    button[type=submit]{
        @apply text-sm font-medium px-4 py-1 bg-secondary text-black rounded-sm hover:bg-orange-400;
    }
}

.searchResult{
    @apply w-5/6 min-h-36 px-3 rounded bg-primary dark:bg-primaryDark fixed m-auto left-0 right-0 top-36 overflow-hidden md:hidden
}


</style>