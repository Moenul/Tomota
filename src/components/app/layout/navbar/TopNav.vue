<template>
    <div class="topNav">
        <div class="container grid md:grid-cols-2 md:gap-16">
            <div class="text-center py-2 row-start-2 md:row-start-1 md:text-left grid md:grid-flow-col md:auto-cols-max ">
                <RouterLink to="/" class="md:mr-6">About us</RouterLink>
                <RouterLink :to="{name: 'Dashboard'}" class="md:mr-6">Order Treacking</RouterLink>
                <a href="">Need Help? +88 01795243628</a>
            </div>
            <div class="text-center md:text-right flex justify-center md:justify-end">
                <div class="switchBtn ">
                    Eng <Icon icon="mingcute:down-fill" />
                    <div class="switchBtnDropDown">
                        <li class="dropDownItem">
                            <button type="submit">Eng</button>
                        </li>
                        <li class="dropDownItem">
                            <button type="submit">Ban</button>
                        </li>
                    </div>
                </div>
                <div class="switchBtn">
                    Usd <Icon icon="mingcute:down-fill" />
                    <div class="switchBtnDropDown">
                        <li class="dropDownItem">
                            <button type="submit">USD</button>
                        </li>
                        <li class="dropDownItem">
                            <button type="submit">BDT</button>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';


</script>

<style lang="postcss">

.topNav{
    @apply h-auto bg-white text-slate-800 leading-5 md:text-sm md:text-slate-200 md:bg-gray-800 md:h-8 md:leading-none;

    .switchBtn{
        @apply py-2 pb-3 flex gap-1 mx-2 cursor-pointer md:mx-0 md:ml-6 relative;
    
        .switchBtnDropDown{
            @apply hidden absolute top-8 right-0 bg-violet-800 text-slate-200 list-none w-16 text-center p-1 rounded-sm z-30;
        
            .dropDownItem{
                @apply py-1 rounded-sm hover:bg-violet-600 select-none;
            }
        }
        &:hover .switchBtnDropDown{
            @apply block
        }
    }

}



</style>