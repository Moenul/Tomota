<template>
    <div class="sidebar_ads">
        <router-link :to="props.ads.link">
            <img
                :src="props.ads.image"
                :alt="props.ads.image"
                class="min-w-full object-cover"
            />
        </router-link>
    </div>
</template>
<script setup>
const props = defineProps({
    ads: {
        type: Object,
        require: true,
    },
});
</script>
<style lang="postcss">
.sidebar_ads {
    @apply w-full h-auto rounded-xl my-10 overflow-hidden border border-border dark:border-borderDark;
}
</style>
