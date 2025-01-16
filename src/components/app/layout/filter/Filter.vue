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
import { useRoute } from "vue-router";

const filters = [
    {
        name: "Price",
        children: [{ name: 300 }, { name: 9000 }],
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

// Below those codes use for got selected item from router query and
// set selected items active status to true.
const route = useRoute();

// Got Selected Query array
const selectedFilterQuery = Object.entries(route.query);

// Make Selected Query array to Object
const selectedFilter = selectedFilterQuery.map(([name, values]) => ({
    name,
    children: values.split(",").map((value) => ({ name: value })),
}));

// make isActive true if its mathch with selected items
filters.forEach((filterType) => {
    // Find the matching category in selectedFilter
    const matchingSelectedType = selectedFilter.find(
        (value) => value.name === filterType.name
    );
    if (matchingSelectedType) {
        // Update the `isActive` property of children in the filterType and Price min max value.
        filterType.children.forEach((child, index) => {
            if (matchingSelectedType.name == "Price") {
                child.name = matchingSelectedType.children[index].name;
            } else {
                child.isActive = matchingSelectedType.children.some(
                    (value) => value.name === child.name
                );
            }
        });
    }
});

// ........
</script>
