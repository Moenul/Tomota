<template>
    <div class="sortSection text-text dark:text-textDark">
        Sort by:
        <select
            @change="updateSort"
            name=""
            id=""
            class="py-1 rounded-sm text-sm bg-section dark:bg-sectionDark text-text dark:text-textDark border border-border dark:border-borderDark"
        >
            <option
                v-for="option in selectOptions"
                :selected="option === selectedQuery ? true : false"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const selectOptions = [
    "Click to choose",
    "Low to High",
    "High to low",
    "A to Z",
    "Z to A",
    "New to Old",
    "Old to new",
];

const selectedQuery = Object.entries(route.query).find(
    ([key]) => key === "sort"
)?.[1];

const updateSort = (e) => {
    const selectedOption = selectOptions[e.target.options.selectedIndex];

    router.push({
        path: route.path, // Keep the current path
        query: {
            ...route.query, // Spread existing query parameters
            sort: selectedOption, // Update or add the "sort" parameter
        },
    });
};
</script>
