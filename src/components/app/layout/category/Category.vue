<template>
    <div class="category">
        <div class="categoryHeader px-6">
            <div @click="toggle" class="dropdownBtn">
                View All Categoris <Icon icon="uil:angle-down" :class="isOpen ? '-rotate-90' : 'rotate-0'"/>
            </div>
            <div class="md:hidden font-medium text-xl py-4 px-2 border-b border-border dark:border-borderDark">
                All Categoris
            </div>
        </div>
        <div v-if="!isOpen" class="categorySection">
            <div class="categoryContainer">
                <!-- Category Item -->
                <CategoryItem v-for="(category, index) in categories" :key="index" :item="category"/>
                <!-- Category Item -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import CategoryItem from './CategoryItem.vue';
import { useModal } from '../../../../composable/utillity/useModal';

const {isOpen, toggle} = useModal();

const categories = [
    {
        name: "Vehicles",
        children: [
            {
            name: "Car",
            children: [
                { 
                    name: "SUV", 
                    children: [
                        { name: "Compact SUV" }, 
                        { name: "Full-size SUV" }
                    ]
                },
                { name: "Sedan" },
            ],
            },
            { name: "Jeep" },
            { name: "Bike" },
        ],
    },
    {
        name: "Food",
        children: [
            {
            name: "Fruits",
            children: [
                { name: "Apple" },
                { 
                    name: "Lemon", 
                    children: [
                        { name: "Orange" }, 
                        { name: "Green Lemon" }
                    ]
                },
            ],
            },
            { name: "Fast Food" },
            { name: "Vagitables" },
        ],
    }
];




</script>

<style scoped lang="postcss">
.category{
    .categoryHeader{
        .dropdownBtn{
            @apply hidden md:flex justify-center items-center gap-4 font-medium text-lg bg-section dark:bg-sectionDark text-text dark:text-textDark p-2 rounded-t-xl;
        }
    }

    .categorySection{
        @apply border-0 py-4 min-h-80 md:border md:border-t-0 border-border dark:border-borderDark rounded-b-xl overflow-hidden;
    
        .categoryContainer{
            @apply w-full px-4 max-h-[calc(100vh_-_18rem)] md:max-h-96 overflow-x-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-border dark:[&::-webkit-scrollbar-track]:bg-borderDark [&::-webkit-scrollbar-thumb]:bg-textSecondary dark:[&::-webkit-scrollbar-thumb]:bg-textDark [&::-webkit-scrollbar-thumb]:rounded;
        }
    }

}


</style>