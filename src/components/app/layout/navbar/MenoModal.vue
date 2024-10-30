<template>
    <div class="menoModal md:hidden w-full h-screen bg-slate-900/5 fixed top-0 z-30">
        <div  v-click-outside="handleOutsideClick" class="modalSection w-5/6 h-full bg-white text-slate-800">
            <header class="modalHeader container py-4  text-white flex items-center justify-between">
                <div class="brand_logo w-32 h-auto overflow-hidden">
                    <router-link to="/">
                        <Logo/>
                    </router-link>
                </div>

                <div class="buttons flex items-center gap-4 text-3xl text-slate-50">
                    <div @click="$emit('toggleMeno')" class="closeBtn cursor-pointer">
                        <Icon icon="icon-park-solid:close-one" class="text-primary" />
                    </div>
                </div>
            </header>

            <section class="modalCategory min-h-[calc(100vh_-_12rem)] px-1">
                <Category></Category>
            </section>

            <footer class="modalFooter w-full h-auto bottom-0">
                <TopNav/>
            </footer>
            
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Logo from '../../Logo.vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import TopNav from './TopNav.vue';
import Category from '../category/Category.vue';


const emits = defineEmits('toggleMeno');

const handleOutsideClick = () => {
    emits('toggleMeno');    
}



</script>