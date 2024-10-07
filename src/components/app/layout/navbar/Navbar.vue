<template>
    <div class="h-14 w-full px-5 py-4 bg-violet-800 text-white">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'Dashboard'}">Dashboard</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';



</script>