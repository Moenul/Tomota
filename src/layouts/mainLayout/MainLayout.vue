<template>
    <TopNav class="hidden md:block"></TopNav>
    <Navbar />

    <div
        class="content_wrapper container grid md:flex md:gap-8 pb-10 min-h-[100vh]"
    >
        <router-view></router-view>
    </div>

    <BottomNav />
</template>

<script setup>
import Navbar from "../../components/app/layout/navbar/Navbar.vue";
import TopNav from "../../components/app/layout/navbar/TopNav.vue";
import BottomNav from "../../components/app/layout/navbar/BottomNav.vue";
</script>
