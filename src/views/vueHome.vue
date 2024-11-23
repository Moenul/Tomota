<template>
    <TopNav class="hidden md:block"></TopNav>
    <Navbar />
    <div class="content_wrapper container grid md:flex md:gap-8 mb-10">
        <Sidebar class="hidden md:block" />
        <MainLayout />
        <Sidebar class="block md:hidden" />
    </div>

    <BottomNav />
</template>

<script setup>
import Navbar from "../components/app/layout/navbar/Navbar.vue";
import TopNav from "../components/app/layout/navbar/TopNav.vue";
import BottomNav from "../components/app/layout/navbar/BottomNav.vue";
import Sidebar from "../components/app/layout/sidebar/Sidebar.vue";
import MainLayout from "../components/app/layout/mainLayout/MainLayout.vue";
</script>
