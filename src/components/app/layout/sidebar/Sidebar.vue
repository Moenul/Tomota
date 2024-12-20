<template>
    <aside class="sidebar w-full md:w-64 min-h-80 pt-4">
        <Category class="hidden md:block" />
        <Filter v-if="$route.name == 'Category'" class="mt-5" />
        <template v-for="ads in sideAds" key="index">
            <SideAds :ads="ads" />
        </template>
    </aside>
</template>

<script setup>
import Category from "../category/Category.vue";
import SideAds from "../sideAds/SideAds.vue";
import Filter from "../filter/Filter.vue";

const sideAds = {
    ads1: {
        name: "ads1",
        image: "https://cdn.create.vista.com/downloads/5184a601-e070-4ab3-9ef3-6361dd3afea8_1024.jpeg",
        link: "#",
    },
    ads2: {
        name: "ads2",
        image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-modern-%26-minimal-grocery-poster-design-template-3e385e5d4c7a4bac126d4ffcdf232f6e.jpg?ts=1720011711",
        link: "#",
    },
    ads3: {
        name: "ads3",
        image: "https://i.pinimg.com/736x/6e/6c/ef/6e6cef5f451dd6c28acecdc5635cd3a4.jpg",
        link: "#",
    },
};
</script>
