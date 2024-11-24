<template>
    <Navbar />
    <div class="content_wrapper container grid md:flex md:gap-8 mb-10">
        <router-view></router-view>
    </div>

    <BottomNav />
</template>

<script setup>
import Navbar from "../../components/app/layout/navbar/Navbar.vue";
import BottomNav from "../../components/app/layout/navbar/BottomNav.vue";
</script>
