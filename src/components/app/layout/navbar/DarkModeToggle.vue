<template>
    <div @click="toggleDarkMode" class="pageMode cursor-pointer">
        <Icon v-if="isDarkMode" icon="basil:sun-solid" class="text-secondary" />
        <Icon v-else icon="heroicons:moon-16-solid" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
        updateLocalStorage();
        applyDarkMode();
    };

    const applyDarkMode = () => {
        if (isDarkMode.value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const updateLocalStorage = () => {
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
    };

    // Check local storage for the current theme on mount
    onMounted(() => {
        const storedTheme = localStorage.getItem('theme');
        isDarkMode.value = storedTheme === 'dark';
        applyDarkMode();
    });

</script>

<style scoped>
/* optional styling */
button {
padding: 8px 16px;
border-radius: 4px;
cursor: pointer;
}
</style>
  