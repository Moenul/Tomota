<template>
    <div class="policyBox">
        <div class="item">
            <Icon icon="hugeicons:truck-delivery" class="icon" />
            <p>Flexible Delivery</p>
        </div>
        <div class="item">
            <Icon icon="hugeicons:credit-card-pos" class="icon" />
            <p>Sequre Payment</p>
        </div>
        <div class="item">
            <Icon icon="mynaui:dollar" class="icon" />
            <p>100% Money Back</p>
        </div>
    </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style scoped>
.policyBox {
    @apply w-full grid grid-cols-1 md:grid-cols-3 my-12 px-4 py-1 md:py-2 rounded-xl shadow-sm border border-border dark:border-borderDark divide-textMuted dark:divide-textMutedDark divide-y md:divide-x md:divide-y-0;

    .item {
        @apply flex justify-center items-center py-3 md:py-4 text-text dark:text-textDark;

        .icon {
            @apply text-3xl text-textMuted dark:text-textMutedDark mr-4;
        }
    }
}
</style>
