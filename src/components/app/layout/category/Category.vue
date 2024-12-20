<template>
    <div class="category">
        <div class="categoryHeader px-6">
            <div @click="toggle" class="dropdownBtn">
                View All Categoris
                <Icon
                    icon="uil:angle-right"
                    :class="isOpen ? '' : 'rotate-90'"
                />
            </div>
            <div
                class="md:hidden font-medium text-xl py-4 px-2 border-b border-border dark:border-borderDark"
            >
                All Categoris
            </div>
        </div>
        <div v-if="!isOpen" class="categorySection">
            <div class="categoryContainer">
                <!-- Category Item -->
                <CategoryItem
                    v-for="(category, index) in categories"
                    :key="index"
                    :item="category"
                    @closeMeno="$emit('closeMeno')"
                />
                <!-- Category Item -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import CategoryItem from "./CategoryItem.vue";
import { useModal } from "../../../../composable/utillity/useModal";
import { useRoute } from "vue-router";
import { computed } from "vue";

const { isOpen, toggle } = useModal();

const route = useRoute();

const currentRoute = computed(() => {
    return route.name;
});

if (currentRoute.value == "Category") {
    if (window.innerWidth >= 760) toggle();
}

const categories = [
    {
        id: 1,
        name: "Vehicles",
        children: [
            {
                id: 2,
                name: "Car",
                children: [
                    { id: 3, name: "SUV" },
                    { id: 4, name: "Sedan" },
                ],
            },
            { id: 5, name: "Jeep" },
            { id: 6, name: "Bike" },
        ],
    },
    {
        id: 7,
        name: "Food",
        children: [
            {
                id: 8,
                name: "Fruits",
                children: [
                    { id: 9, name: "Apple" },
                    {
                        id: 10,
                        name: "Lemon",
                        children: [
                            { id: 11, name: "Orange" },
                            { id: 12, name: "Green Lemon" },
                        ],
                    },
                ],
            },
            { id: 13, name: "Fast Food" },
            { id: 14, name: "Vegetables" },
        ],
    },
    {
        id: 15,
        name: "Electronics",
        children: [
            {
                id: 16,
                name: "Computers",
                children: [
                    { id: 17, name: "Laptops" },
                    { id: 18, name: "Desktops" },
                ],
            },
            { id: 19, name: "Smartphones" },
            {
                id: 20,
                name: "Gaming Consoles",
                children: [
                    { id: 21, name: "PlayStation" },
                    { id: 22, name: "Xbox" },
                ],
            },
        ],
    },
    {
        id: 23,
        name: "Clothing",
        children: [
            {
                id: 24,
                name: "Men",
                children: [
                    { id: 25, name: "Shirts" },
                    {
                        id: 26,
                        name: "Trousers",
                        children: [
                            { id: 27, name: "Jeans" },
                            { id: 28, name: "Chinos" },
                        ],
                    },
                ],
            },
            {
                id: 29,
                name: "Women",
                children: [
                    { id: 30, name: "Dresses" },
                    { id: 31, name: "Tops" },
                ],
            },
        ],
    },
    {
        id: 32,
        name: "Books",
        children: [
            {
                id: 33,
                name: "Fiction",
                children: [
                    { id: 34, name: "Fantasy" },
                    { id: 35, name: "Mystery" },
                ],
            },
            {
                id: 36,
                name: "Non-Fiction",
                children: [
                    { id: 37, name: "Biographies" },
                    { id: 38, name: "Self-Help" },
                ],
            },
        ],
    },
];
</script>

<style scoped lang="postcss">
.category {
    .categoryHeader {
        .dropdownBtn {
            @apply hidden md:flex justify-center items-center gap-4 font-medium cursor-pointer text-lg bg-section dark:bg-sectionDark text-text dark:text-textDark p-2 rounded-t-xl;
        }
    }

    .categorySection {
        @apply border-0 py-4 min-h-80 md:border md:border-t-0 border-border dark:border-borderDark rounded-b-xl overflow-hidden;

        .categoryContainer {
            @apply w-full px-4 max-h-[calc(100vh_-_18rem)] md:max-h-96 overflow-x-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-border dark:[&::-webkit-scrollbar-track]:bg-borderDark [&::-webkit-scrollbar-thumb]:bg-textSecondary dark:[&::-webkit-scrollbar-thumb]:bg-textDark [&::-webkit-scrollbar-thumb]:rounded;
        }
    }
}
</style>
