<template>
    <div class="categoryItem">
        <div
            class="parentCategory"
            :class="isOpen ? 'text-accent' : 'text-text dark:text-textDark'"
        >
            <router-link
                :to="{ name: 'Category', params: { category: item.name } }"
                :class="item.children ? 'w-4/5' : 'w-full'"
                class="hover:text-accent"
                @click="$emit('closeMeno')"
                >{{ item.name }}</router-link
            >
            <div @click="toggle" v-if="item.children" class="itemDropdown">
                <Icon
                    icon="mingcute:right-line"
                    class="itemDropdownIcon"
                    :class="
                        isOpen
                            ? 'rotate-90 bg-accentDark dark:bg-accent text-textDark'
                            : 'rotate-0 bg-border dark:bg-sectionDark text-text dark:text-textDark'
                    "
                />
            </div>
        </div>

        <!-- Nested -->
        <div v-if="isOpen && item.children" class="nestedItem">
            <CategoryItem
                v-for="(child, index) in item.children"
                :key="index"
                :item="child"
                @closeMeno="$emit('closeMeno')"
            />
        </div>
        <!-- Nested -->
    </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const isOpen = ref(false);

// Toggle the open state
const toggle = () => {
    isOpen.value = !isOpen.value;
};

const emits = defineEmits("closeMeno");
</script>

<style scoped lang="postcss">
.categoryItem {
    @apply w-full py-1 divide-x divide-border dark:divide-borderDark;

    .parentCategory {
        @apply flex justify-between items-center py-1;

        .itemDropdown {
            @apply w-1/5 flex justify-end cursor-pointer hover:text-accent;

            .itemDropdownIcon {
                @apply h-8 rounded-full;
            }
            &:hover .itemDropdownIcon {
                @apply bg-accentDark dark:bg-accent text-textDark;
            }
        }
    }

    .nestedItem {
        @apply w-full pl-6;
    }
}
</style>
