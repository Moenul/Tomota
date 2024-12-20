<template>
    <div
        class="filter border py-2 min-h-80 bg-section dark:bg-sectionDark md:bg-primary dark:md:bg-primaryDark md:border border-border dark:border-borderDark rounded-xl overflow-hidden"
    >
        <div
            class="filterHeader px-4 md:text-center md:text-lg text-text dark:text-textDark"
        >
            <div
                class="smHeader flex justify-between items-center pt-2 pb-3 border-b border-border dark:border-borderDark md:hidden"
            >
                <div class="flex gap-2 text-text dark:text-textDark">
                    <Icon icon="solar:filter-line-duotone" class="text-2xl" />
                    <span> Filter</span>
                </div>
                <div class="sortSection text-text dark:text-textDark">
                    Sort by:
                    <select
                        name=""
                        id=""
                        class="py-1 rounded-sm text-sm bg-section dark:bg-sectionDark text-text dark:text-textDark border border-border dark:border-borderDark"
                    >
                        <option value="">Low to High</option>
                        <option value="">High to Low</option>
                    </select>
                </div>
            </div>
            <p class="hidden md:block">Filter by</p>
        </div>
        <div
            class="filterSection w-full px-4 max-h-[calc(100vh_-_18rem)] md:max-h-80 overflow-x-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-border dark:[&::-webkit-scrollbar-track]:bg-borderDark [&::-webkit-scrollbar-thumb]:bg-textSecondary dark:[&::-webkit-scrollbar-thumb]:bg-textDark [&::-webkit-scrollbar-thumb]:rounded"
        >
            <FilterItem
                v-for="filter in filters"
                :filter="filter"
                :key="index"
            />
        </div>
    </div>
</template>
<script setup>
import FilterItem from "./FilterItem.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
const filters = [
    {
        name: "Price",
        value: 0,
        min: 100,
        max: 5000,
    },
    {
        name: "Status",
        children: [{ name: "In Stock" }, { name: "Out of Stock" }],
    },
    {
        name: "Brand",
        children: [{ name: "HP" }, { name: "Dell" }, { name: "Acer" }],
    },
    {
        name: "Type",
        children: [{ name: "Normal" }, { name: "Heavy" }],
    },
    {
        name: "Color",
        children: [
            { name: "Red" },
            { name: "Blue" },
            { name: "Green" },
            { name: "Yellow" },
        ],
    },
];
</script>
