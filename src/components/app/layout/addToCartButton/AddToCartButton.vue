<template>
    <button @click="addToCart" class="cartButton">
        <Icon icon="mage:basket-fill" />
        <span class="cartLabel">{{ label }}</span>
    </button>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";

const props = defineProps({
    product: {
        type: Object,
        Required: true,
    },
    label: {
        type: String,
        Required: true,
    },
});

const emits = defineEmits();

const addToCart = () => {
    emits("added", props.product);
};
</script>
