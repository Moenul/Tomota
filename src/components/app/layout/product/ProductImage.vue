<template>
    <div class="imageSection">
        <img
            :src="src"
            :alt="alt"
            @load="imageLoaded = true"
            :class="{ loaded: imageLoaded, hidden: !imageLoaded || error }"
        />
        <div
            v-if="!imageLoaded && !error"
            class="text-textSecondary text-center py-5"
        >
            Loading...
        </div>
        <div v-if="error" class="text-errors">Image failed to load.</div>
    </div>
</template>
<script setup>
import { onMounted, watch, ref } from "vue";

const props = defineProps({
    src: {
        type: String,
        Required: true,
    },
    alt: {
        type: String,
        Required: true,
    },
});
const imageLoaded = ref(false);
const error = ref(false);

const handleLoad = () => {
    imageLoaded.value = true;
};

const handleError = () => {
    error.value = true;
    imageLoaded.value = false;
};

watch(
    () => props.src,
    (newSrc) => {
        imageLoaded.value = false;
        error.value = false;
    }
);

onMounted(() => {
    const img = new Image();
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = props.src;
});
</script>

<style lang="postcss">
.imageSection {
    @apply w-full overflow-hidden relative;
    img {
        @apply w-full h-full object-cover transition ease-in-out;
    }
}
</style>
