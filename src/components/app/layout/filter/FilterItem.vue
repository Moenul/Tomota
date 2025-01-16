<template>
    <div class="filterItem">
        <template v-if="filter.name == 'Price'">
            <div
                class="itemHeader py-2 flex justify-between items-center font-bold text-text dark:text-textDark"
            >
                <div class="itemName">{{ filter.name }}</div>
            </div>
            <div
                class="w-5/6 m-auto md:w-full itemBody px-2 flex flex-wrap gap-2 text-sm font-normal"
            >
                <div
                    class="manulaPrice w-full flex justify-between items-center"
                >
                    <input
                        class="minPrice w-20 bg-primary dark:bg-primaryDark text-text dark:text-textDark border border-border dark:border-borderDark shadow-sm rounded-md px-2 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        step="100"
                        :min="min"
                        :max="max"
                        v-model="minPrice"
                        @input="
                            updateMinThumb();
                            updateMinMax();
                        "
                    />
                    <span class="text-text dark:text-textDark"
                        ><Icon icon="ic:round-minus"
                    /></span>
                    <input
                        class="maxPrice w-20 bg-primary dark:bg-primaryDark text-text dark:text-textDark border border-border dark:border-borderDark shadow-sm rounded-md px-2 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        step="100"
                        :min="min"
                        :max="max"
                        v-model="maxPrice"
                        @input="
                            updateMaxThumb();
                            updateMinMax();
                        "
                    />
                </div>
                <div class="priceRange w-full h-6 relative">
                    <input
                        type="range"
                        name=""
                        step="100"
                        v-model="minPrice"
                        :min="min"
                        :max="max"
                        @input="
                            updateMinThumb();
                            updateMinMax();
                        "
                        :class="
                            minPrice >= maxPrice - 800
                                ? '[&::-webkit-slider-thumb]:bg-accent'
                                : ''
                        "
                        class="w-full absolute top-2 h-1.5 rounded-lg bg-border dark:bg-borderDark appearance-none cursor-pointer range-sm [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:md:size-4 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full"
                    />
                    <div
                        :style="`width: ${minThumb - (100 - maxThumb)}%; left:${
                            100 - minThumb
                        }%;`"
                        class="rangeSeparator absolute top-2 z-10 h-1.5 bg-accent dark:bg-accentDark rounded-lg"
                    ></div>
                    <input
                        type="range"
                        name=""
                        step="100"
                        v-model="maxPrice"
                        :min="min"
                        :max="max"
                        @input="
                            updateMaxThumb();
                            updateMinMax();
                        "
                        :class="
                            maxPrice <= minPrice + 800
                                ? '[&::-webkit-slider-thumb]:bg-accent'
                                : ''
                        "
                        class="w-full absolute top-2 h-1.5 rounded-lg bg-border dark:bg-borderDark appearance-none cursor-pointer range-sm [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:md:size-4 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full"
                    />
                </div>
            </div>
        </template>

        <template v-else>
            <div
                class="itemHeader py-2 flex justify-between items-center font-bold text-text dark:text-textDark"
            >
                <div class="itemName">
                    {{ filter.name }}
                </div>
                <div
                    class="collapsedBtn w-8 h-6 cursor-pointer flex justify-end items-center"
                    @click="toggle"
                >
                    <Icon v-if="!isOpen" icon="ic:round-plus" />
                    <Icon v-if="isOpen" icon="ic:round-minus" />
                </div>
            </div>
            <div
                v-if="isOpen && filter.children"
                class="itemBody px-2 flex flex-wrap gap-2 text-sm font-normal"
            >
                <div
                    v-for="(item, index) in filter.children"
                    :key="index"
                    :item="item"
                >
                    <!-- Filter Checkbox -->
                    <div class="flex items-center justify-center me-4 relative">
                        <div class="relative w-[16px] h-[16px]">
                            <input
                                :id="item.name"
                                type="checkbox"
                                :value="item.name"
                                :checked="item.isActive"
                                @change="
                                    updateFilter(
                                        filter.name,
                                        $event.target.checked,
                                        item.name
                                    )
                                "
                                class="appearance-none peer forced-colors:appearance-auto w-[16px] h-[16px] bg-border dark:bg-borderDark rounded focus:ring-2 focus:ring-accent dark:focus:ring-section"
                            />
                            <Icon
                                icon="tabler:square-check-filled"
                                class="invisible peer-checked:visible forced-colors:hidden text-accent dark:text-section text-[14px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                        <label
                            :for="item.name"
                            class="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300 before:content-[''] before:w-6 before:h-5 before:absolute before:-left-0"
                            >{{ item.name }}</label
                        >
                    </div>
                    <!-- Filter Checkbox -->
                </div>
            </div>
        </template>
    </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useModal } from "../../../../composable/utillity/useModal";
import { watch, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    filter: {
        type: Object,
        Required: true,
    },
});

const min = 0;
const max = 10000;
const minPrice = ref();
const maxPrice = ref();
const minThumb = ref(0);
const maxThumb = ref(0);

const { isOpen, toggle } = useModal();

const router = useRouter();

const selectedFilters = reactive({});

// This code for update min and max price value from props
if (props.filter.name == "Price") {
    minPrice.value = props.filter.children[0].name;
    maxPrice.value = props.filter.children[1].name;
}

const updateMinThumb = () => {
    minThumb.value = 100 - ((minPrice.value - min) / (max - min)) * 100;

    if (minPrice.value >= maxPrice.value - 800) {
        minPrice.value = maxPrice.value - 800;
    }
};

const updateMaxThumb = () => {
    maxThumb.value = ((maxPrice.value - min) / (max - min)) * 100;
    if (maxPrice.value <= minPrice.value + 800) {
        maxPrice.value = minPrice.value + 800;
    }
};

updateMinThumb();
updateMaxThumb();

// this fn for update price in selectedFilters and update in url
const updateMinMax = () => {
    if (minPrice.value) {
        if (!selectedFilters["Price"]) {
            selectedFilters["Price"] = [];
        }
        selectedFilters["Price"][0] = minPrice.value;
        selectedFilters["Price"][1] = maxPrice.value;
    }
};
// ........

// This code for store Selected Items data for next url rendering
const updateFilter = (type, isChecked, value) => {
    if (isChecked) {
        if (!selectedFilters[type]) {
            selectedFilters[type] = [];
        }
        if (!selectedFilters[type].includes(value)) {
            selectedFilters[type].push(value);
        }
    } else {
        const index = selectedFilters[type].indexOf(value);
        if (index > -1) selectedFilters[type].splice(index, 1);
    }
};
// .......

// Need to do more operation in watch for access or place multiple type in selectedFilter array.
watch(
    () => ({ ...selectedFilters }),
    (newFilters) => {
        const query = Object.entries(newFilters)
            .filter(([_, values]) => values.length > 0)
            .map(([key, values]) => `${key}=${values.join(",")}`)
            .join("&");
        const url = `/categories/Vehicles?${query}`;
        router.push(url);
    },
    { deep: true }
);
// .........

// this code used for selectedFilters array are empry after refresh page.
// that why I reinitiate selected item to selectedFilter. And Its properly syncronise selected filters.
props?.filter?.children?.map((item) => {
    const filterName = props.filter.name;
    if (item.isActive) {
        updateFilter(filterName, true, item.name);
    }
});
// ........

// If any Item is Checked This section have to be open.
if (props.filter.children.find((e) => e.isActive === true)) {
    toggle();
}
// ........
</script>
<style>
input[type="range"]:first-of-type::-webkit-slider-thumb {
    position: relative;
    z-index: 15;
}
input[type="range"]:last-of-type::-webkit-slider-thumb {
    position: relative;
    z-index: 20;
}
</style>
