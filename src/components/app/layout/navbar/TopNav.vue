<template>
    <div class="h-auto hidden md:block md:h-8 bg-gray-800 text-slate-200 text-sm leading-5 md:leading-none">
        <div class="container grid md:grid-cols-2 md:gap-16">
            <div class="text-center py-2 md:text-left grid md:grid-flow-col md:auto-cols-max ">
                <RouterLink to="/" class="md:mr-6">About us</RouterLink>
                <RouterLink :to="{name: 'Dashboard'}" class="md:mr-6">Order Treacking</RouterLink>
                <a href="">Need Help? +88 01795243628</a>
            </div>
            <div class="text-center md:text-right flex justify-center md:justify-end">
                <div class="language group py-2 pb-3 flex gap-1 mx-2 cursor-pointer md:mx-0 md:ml-6 relative">
                    Eng <Icon icon="mingcute:down-fill" />
                    <div class="langDropDown hidden group-hover:block absolute top-8 right-0 bg-violet-800 list-none w-16 text-center p-1 rounded-sm z-10">
                        <li class="py-1 rounded-sm hover:bg-violet-600">
                            <button type="submit">Eng</button>
                        </li>
                        <li class="py-1 rounded-sm hover:bg-violet-600">
                            <button type="submit">Ban</button>
                        </li>
                    </div>
                </div>
                <div class="currency group py-2 pb-3 flex gap-1 mx-2 cursor-pointer md:mx-0 md:ml-6 relative">
                    Usd <Icon icon="mingcute:down-fill" />
                    <div class="currencyDropDown hidden group-hover:block absolute top-8 right-0 bg-violet-800 list-none w-16 text-center p-1 rounded-sm z-10">
                        <li class="py-1 rounded-sm hover:bg-violet-600">
                            <button type="submit">USD</button>
                        </li>
                        <li class="py-1 rounded-sm hover:bg-violet-600">
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