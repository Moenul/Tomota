<template>
    <div
        class="quantityCounter w-28 h-8 p-1 flex justify-between items-center rounded-lg border-2 border-border dark:border-borderDark text-xl shadow-sm"
    >
        <button
            @click="decreaseQuantity"
            class="incrementDecrementBtn size-6 flex justify-center items-center rounded-md bg-textDark dark:bg-primaryDark cursor-pointer"
        >
            <Icon
                icon="tabler:minus"
                class="text-base text-text dark:text-textDark"
            />
        </button>
        <div class="counter text-text dark:text-textDark">
            {{ quantity }}
        </div>
        <button
            @click="increaseQuantity"
            class="incrementDecrementBtn size-6 flex justify-center items-center rounded-md bg-textDark dark:bg-primaryDark cursor-pointer"
        >
            <Icon
                icon="tabler:plus"
                class="text-base text-text dark:text-textDark"
            />
        </button>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const props = defineProps({
    modelValue: {
        type: Number,
    },
    minQuantity: {
        type: Number,
        default: 1,
    },
    maxQuantity: {
        type: Number,
        default: 10,
    },
});

const emit = defineEmits(["update:modelValue"]);

const quantity = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
});

const increaseQuantity = () => {
    if (quantity.value < props.maxQuantity) {
        quantity.value++;
    }
};

const decreaseQuantity = () => {
    if (quantity.value > props.minQuantity) {
        quantity.value--;
    }
};
</script>
