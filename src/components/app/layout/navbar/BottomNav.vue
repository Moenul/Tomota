<template>
    <nav class="container bottomNav" :class="isOpen ? 'quineItemActive' : ''">
        <div class="item">
            <Icon class="icon" icon="solar:home-angle-outline" />
            <span class="itemName">Home</span>
        </div>
        <div class="item">
            <Icon class="icon" icon="solar:heart-linear" />
            <span class="itemName">Favorite</span>
        </div>
        <div @click="open" class="quineItem">
            <Icon class="icon" icon="mage:basket-fill" />
        </div>
        <div @click="toggleSearch" class="item">
            <Icon class="icon" icon="mage:search" />
            <span class="itemName">Search</span>
        </div>
        <div @click="toggleMeno" class="item">
            <Icon class="icon" icon="ph:circles-three-plus-light" />
            <span class="itemName">Menu</span>
        </div>
    </nav>

    <!-- Cart Dropdown -->
    <CartModal v-if="isOpen" @close="close" />
    <!-- Cart Dropdown -->

    <!-- Meno Modal -->
    <MenoModal
        v-if="isMenoOpen"
        @toggleMeno="toggleMeno"
        @closeMeno="closeMeno"
    />
    <!-- Meno Modal -->

    <!-- Search Bar -->
    <SearchBar v-if="isSearchOpen" @toggleSearch="toggleSearch" />
    <!-- Search Bar -->
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useModal } from "../../../../composable/utillity/useModal";
import CartModal from "./CartModal.vue";
import MenoModal from "./MenoModal.vue";
import SearchBar from "./SearchBar.vue";

const { isOpen, open, close } = useModal();

// meno modal
const isMenoOpen = ref(false);

const toggleMeno = () => {
    setTimeout(() => {
        isMenoOpen.value = !isMenoOpen.value;
    }, 0);
};
const closeMeno = () => {
    isMenoOpen.value = false;
};

// search bar modal
const isSearchOpen = ref(false);

const toggleSearch = () => {
    setTimeout(() => {
        isSearchOpen.value = !isSearchOpen.value;
    }, 0);
};
</script>

<style lang="postcss">
.bottomNav {
    @apply w-full h-14 bg-section dark:bg-sectionDark flex justify-between items-center fixed bottom-0 shadow-a-md z-30 md:hidden;

    .item {
        @apply size-14 grid justify-items-center items-center bg-section dark:bg-sectionDark text-2xl;

        .icon {
            @apply text-text dark:text-textDark;
        }
        .itemName {
            @apply text-xs font-semibold font-mono text-text dark:text-textDark -mt-4 select-none;
        }

        &:hover .icon,
        &:hover .itemName {
            @apply text-accentDark dark:text-accent;
        }
    }

    .quineItem {
        @apply size-16 border-4 border-section dark:border-primaryDark bg-primary dark:bg-sectionDark text-accent dark:text-textDark shadow-a-md flex items-center justify-center text-4xl rounded-full mb-6;
    }
}

.quineItemActive {
    @apply before:content-[''] before:absolute before:size-16 before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-2;
}
</style>
