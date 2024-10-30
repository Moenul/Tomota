<template>
    <div class="carousel w-full relative mx-auto">
        <div class="carouselWrapper w-full relative rounded-xl border border-slate-50 shadow-sm overflow-hidden">
            <div class="carouselContainer flex flex-row transition duration-300 ease-in-out" :style="{ transform: `translateX(${-currentSlide * 100}%)`}">
                <div v-for="(slide, index) in slides" :key="index" class="carouselSlide w-full min-w-full aspect-[4/2] relative">
                    <img :src="slide.image" class="min-w-full aspect-[4/2]">
                    <div class="itemContainer w-full absolute top-0 left-0">
                        <!-- <p class="p-2">Id: {{ slide.id }}, Index: {{ index }}</p> -->
                    </div>
                </div>
            </div>
        </div>
        
        <button @click="prevSlide('clicked')" class="prev size-10 rounded-full text-xl flex justify-center items-center absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 bg-slate-50/80 shadow-md">
            <Icon icon="uiw:left" />
        </button>
        <button @click="nextSlide('clicked')" class="next size-10 rounded-full text-xl flex justify-center items-center absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 bg-slate-50/80 shadow-md">
            <Icon icon="uiw:right" />
        </button>

        <div class="sliderNav w-auto flex justify-between gap-2 absolute bottom-4 left-4 p-1 px-1.5 rounded-full border-2 border-slate-50/50 bg-slate-50/30 shadow-sm">
            <button @click="slidePosition(index)" v-for="(slide, index) in slides" :key="index" class="slidePosition size-6 rounded-full flex justify-center items-center bg-slate-50/60 text-slate-800 shadow-md">
                <Icon icon="material-symbols:circle" v-if="currentSlide === index" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue/dist/iconify.js';

const slides = ref([
    {
        id: 1,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/cfc7b5106472483.5f908abf09989.jpg"
    },
    {
        id: 2,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae7ee1106472483.5f908abf092ea.jpg"
    },
    {
        id: 3,
        image: "https://img.freepik.com/premium-photo/online-grocery-shopping-home-deliveryillustration_837518-35098.jpg"
    }
]);


const currentSlide = ref(0);

const triggerTime = ref(0);

const nextSlide = (event) => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
    console.log(currentSlide.value);
    if(event != undefined){
        triggerTime.value = Date.now() + 5500;
    }
}

const prevSlide = (event) => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
    console.log(currentSlide.value)
    if(event != undefined){
        triggerTime.value = Date.now() + 5000;
    }
}

const slidePosition = (index) => {
    currentSlide.value = index
    triggerTime.value = Date.now() + 5500;
}

const autoSlide = setInterval(function () {
    if(Date.now() >= triggerTime.value){
        nextSlide();
    }
}, 3000);



</script>