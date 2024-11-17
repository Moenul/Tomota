<template>
    <div class="menoModal ">
        <div  v-click-outside="handleOutsideClick" class="modalSection">
            <header class="modalHeader">
                <div class="brand_logo">
                    <router-link to="/">
                        <Logo/>
                    </router-link>
                </div>

                <div class="buttons">
                    <div @click="$emit('toggleMeno')" class="closeBtn cursor-pointer">
                        <Icon icon="icon-park-solid:close-one" class="text-accent dark:text-accentDark" />
                    </div>
                </div>
            </header>

            <section class="modalCategory">
                <Category></Category>
            </section>

            <footer class="modalFooter">
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

<style lang="postcss">
.menoModal{
    @apply md:hidden w-full h-screen bg-primaryDark/30 dark:bg-primary/20 fixed top-0 z-30;

    .modalSection{
        @apply w-5/6 h-full bg-section dark:bg-sectionDark text-text dark:text-textDark;

        .modalHeader{
            @apply container py-4  text-text dark:text-textDark flex items-center justify-between;

            .brand_logo{
                @apply w-32 h-auto overflow-hidden;
            }

            .buttons{
                @apply flex items-center gap-4 text-3xl;
            }
        }

        .modalCategory{
            @apply min-h-[calc(100vh_-_12rem)] px-1;
        }

        .modalFooter{
            @apply w-full h-auto bottom-0;
        }
    }
}

</style>