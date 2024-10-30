<template>
    <div class="categoryItem">
        <div class="parentCategory" :class="isOpen ? 'text-primary' : ''">
            <a href="" :class="item.children ? 'w-4/5' : 'w-full'" class="hover:text-primary">{{item.name}}</a>
            <div @click="toggle" v-if="item.children" class="itemDropdown">
                <Icon icon="mingcute:right-line" class="itemDropdownIcon" :class="isOpen ? 'rotate-90' : 'rotate-0'"/>
            </div>
        </div>

        <!-- Nested -->
        <div v-if="isOpen && item.children" class="nestedItem">
            <CategoryItem v-for="(child, index) in item.children" :key="index" :item="child"/>
        </div>
        <!-- Nested -->
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
})



const isOpen = ref(false);

// Toggle the open state
const toggle = () => {
    isOpen.value = !isOpen.value;
};



</script>

<style scoped lang="postcss">

.categoryItem{
    @apply w-full py-1 divide-x divide-slate-200;

    .parentCategory{
        @apply flex justify-between items-center py-1;

        .itemDropdown{
            @apply w-1/5 flex justify-end cursor-pointer hover:text-primary;
            
            .itemDropdownIcon{
                @apply h-8 rounded-full bg-slate-200;
            }
            &:hover .itemDropdownIcon{
                @apply bg-slate-100;
            }
        }
    }

    .nestedItem{
        @apply w-full pl-6;
    }


}



</style>