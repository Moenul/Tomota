<template>
    <div
        class="productDisplay w-full overflow-hidden mr-auto my-5 p-5 rounded-xl bg-section dark:bg-sectionDark border border-border dark:border-borderDark"
    >
        <!-- Product Header -->
        <div class="productHeader w-full mb-4">
            <h1
                class="title text-2xl text-text dark:text-textDark font-semibold"
            >
                Classic High-Waisted Athletic Shorts
            </h1>
            <div class="ratingsAndSid flex mt-2 divide-x divide-gray-300">
                <div
                    class="ratings flex items-center w-fit mr-5 text-text dark:text-textDark"
                >
                    <div
                        class="ratingsIcon flex items-center text-md md:text-xl text-gray-300 mr-1 md:mr-2"
                    >
                        <Icon
                            icon="material-symbols:star"
                            class="text-secondary"
                        />
                        <Icon
                            icon="material-symbols:star"
                            class="text-secondary"
                        />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                    </div>
                    (3 Reviews)
                </div>
                <div class="sid pl-5 text-text dark:text-textDark">
                    SID: RE423490
                </div>
            </div>
        </div>

        <!-- Product Container -->
        <div class="productContainer grid grid:cols-1 md:grid-cols-3 gap-6">
            <div class="productImagesContainer w-full relative">
                <div class="discountTag w-auto h-6 absolute top-2 left-2">
                    <span
                        class="h-6 px-2 absulate z-30 flex justify-center items-center font-mono font-semibold text-xs bg-errors border border-errors border-r-0 text-white"
                        >10% off
                    </span>
                </div>

                <div
                    class="imagesSlider w-full h-fit mb-2 border border-border dark:border-borderDark rounded-md overflow-hidden"
                >
                    <img
                        class="aspect-square object-cover"
                        src="https://gofresh.com.kw/wp-content/uploads/2023/10/pink-guava-1.jpg"
                        alt=""
                    />
                </div>
                <div class="silderWraper relative w-full">
                    <div
                        ref="sliderButtonWraper"
                        :class="isSlideActive ? '' : 'justify-center'"
                        class="sliderButtonWraper w-80 md:w-full overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:h-0 flex flex-nowrap"
                    >
                        <div
                            ref="sliderButtonContainer"
                            class="sliderButtonContainer w-auto flex gap-2"
                        >
                            <button
                                v-for="i in 6"
                                ref="slideButton"
                                class="slideButton size-16 group overflow-hidden rounded-sm border cursor-pointer hover:bg-accent hover:border-accent focus:bg-accent focus:border-accent"
                            >
                                <img
                                    class="aspect-square object-cover group-hover:opacity-75 group-focus:opacity-75"
                                    src="https://gofresh.com.kw/wp-content/uploads/2023/10/pink-guava-1.jpg"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>

                    <div
                        @click="scrollRight(buttonWidth)"
                        :class="isSlideActive ? 'block' : 'hidden'"
                        class="scrollRight absolute -right-3 top-1/2 cursor-pointer transform -translate-y-1/2 p-2 bg-gray-800/30 text-black rounded-full"
                    >
                        <Icon icon="icon-park-outline:right" />
                    </div>
                    <div
                        @click="scrollLeft(buttonWidth)"
                        :class="isSlideActive ? 'block' : 'hidden'"
                        class="scrollLeft absolute -left-3 top-1/2 cursor-pointer transform -translate-y-1/2 p-2 bg-gray-800/30 text-black rounded-full"
                    >
                        <Icon icon="icon-park-outline:left" />
                    </div>
                </div>
            </div>
            <div class="productDescription grid grid-cols-1">
                <div>
                    <div class="priceWithDiscount">
                        <del
                            class="text-lg text-textMuted dark:text-textMutedDark font-sans"
                            >$7500</del
                        >
                        <strong class="text-2xl text-red-500 font-mono mx-2"
                            >$7199</strong
                        >
                    </div>
                    <div class="aviability mb-2">
                        <span
                            v-if="true"
                            class="w-fit h-5 px-2 flex justify-center items-center font-mono font-semibold text-xs bg-success/10 border border-success/20 text-success shadow-sm rounded-sm"
                            >In Stock</span
                        >
                        <span
                            v-else
                            class="w-fit h-5 px-2 flex justify-center items-center font-mono font-semibold text-xs bg-secondary/10 border border-secondary/20 text-secondary shadow-sm rounded-sm"
                            >Out of Stock</span
                        >
                    </div>
                </div>

                <div
                    class="desc text-sm text-textSecondary dark:text-textSecondaryDark mb-2"
                >
                    <p>
                        Experience the perfect balance of juiciness and
                        sweetness with our watermelons, making every bite a
                        delightful and refreshing experience.Juicy and sweet:
                        Experience the perfect balance of juiciness and
                        sweetness with our watermelons, making every bite a
                        delightful and refreshing experience.
                    </p>
                </div>
                <div></div>

                <div
                    class="offerCountdown w-full md:max-h-10 px-4 py-1.5 my-2 font-mono text-md md:text-sm text-red-600 bg-red-100 border-2 border-red-300 rounded-md grid justify-center text-center md:flex md:justify-between items-center"
                >
                    <span class="countdownTitle tracking-tighter"
                        >Hurry up! Sale ends in:
                    </span>
                    <span class="countdownTimer text-lg md:text-sm"
                        >{{
                            days + `:` + hours + `:` + minutes + `:` + seconds
                        }}
                    </span>
                </div>

                <!-- productPurchuseTriggers -->
                <div class="productPurchuseTriggers">
                    <!-- Size and waight selector -->
                    <div
                        class="sizeSelectSection flex gap-2 mt-2 text-text dark:text-textDark"
                    >
                        <label class="font-semibold" for="">Size: </label>
                        <div class="sizeBar flex">
                            <ul class="flex gap-2">
                                <li v-for="size in sizes.items">
                                    <input
                                        type="radio"
                                        :id="size"
                                        name="size"
                                        :value="size"
                                        class="hidden peer"
                                        required
                                    />
                                    <label
                                        :for="size"
                                        class="inline-flex text-gray-500 bg-section dark:bg-sectionDark border border-border dark:border-borderDark rounded-md cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-accent hover:bg-primary"
                                    >
                                        <div
                                            class="px-2 flex justify-center items-center"
                                        >
                                            <div
                                                class="text-base font-semibold"
                                            >
                                                {{ size }} {{ sizes.unit }}
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Quantity & Wishlist Section -->
                    <div class="quantityAndWishlist my-4 flex gap-4">
                        <!-- Quantity -->
                        <!-- <label class="font-semibold" for="">Quantity: </label> -->
                        <div
                            class="quantityCounter w-28 h-8 p-1 flex justify-between items-center rounded-lg border-2 border-border dark:border-borderDark text-xl shadow-sm"
                        >
                            <button
                                @click="count--"
                                class="incrementDecrementBtn size-6 flex justify-center items-center rounded-md bg-textDark dark:bg-primaryDark cursor-pointer"
                            >
                                <Icon
                                    icon="tabler:minus"
                                    class="text-base text-text dark:text-textDark"
                                />
                            </button>
                            <div class="counter text-text dark:text-textDark">
                                {{ count }}
                            </div>
                            <button
                                @click="count++"
                                class="incrementDecrementBtn size-6 flex justify-center items-center rounded-md bg-textDark dark:bg-primaryDark cursor-pointer"
                            >
                                <Icon
                                    icon="tabler:plus"
                                    class="text-base text-text dark:text-textDark"
                                />
                            </button>
                        </div>

                        <!-- Wishlist -->
                        <div class="wishlistSection">
                            <button
                                class="wishlistBtn h-8 px-3 flex gap-2 justify-between items-center rounded-md bg-section dark:bg-sectionDark hover:bg-primary dark:hover:bg-primaryDark border border-border dark:border-borderDark text-textSecondary dark:text-textSecondaryDark"
                            >
                                <Icon
                                    icon="mdi:heart"
                                    class="text-textMuted dark:text-textMutedDark"
                                />
                                <span class="text-sm">Add to wishlist</span>
                            </button>
                        </div>
                    </div>

                    <!-- AddToCartAndBuyNow -->
                    <div class="addToCartAndBuyNow grid grid-cols-2 gap-4">
                        <button
                            class="addToCartBtn h-10 px-3 flex gap-2 text-md justify-center items-center rounded-md bg-accent dark:bg-accentDark hover:bg-accentHover dark:hover:bg-accent/70 border border-accent dark:border-accentDark text-textDark"
                        >
                            <Icon icon="mdi:cart" />
                            <span>ADD TO CART</span>
                        </button>

                        <button
                            class="buyNow h-10 px-3 flex gap-2 text-md justify-center items-center rounded-md bg-section dark:bg-sectionDark hover:bg-primary dark:hover:bg-primaryDark border border-accent dark:border-border text-accent dark:text-textDark"
                        >
                            <span>BUY NOW</span>
                        </button>
                    </div>
                </div>

                <!-- ----- -->
            </div>
            <div class="productSpecification">
                <div class="spcCategory mb-2">
                    <div
                        class="spcTitle w-8/12 relative px-2 py-1 bg-border dark:bg-borderDark border-2 border-r-0 border-border dark:border-borderDark font-semibold text-text dark:text-textDark before:content-[''] before:absolute before:w-6 before:h-6 before:rotate-45 before:bg-border dark:before:bg-borderDark before:top-1 before:-right-3"
                    >
                        Producer and Origin
                    </div>
                    <ul class="divide-y divide-border dark:divide-borderDark">
                        <li
                            class="spcItem py-1 pl-8 text-text dark:text-textDark"
                        >
                            Origin: Bangladesh
                        </li>
                        <li
                            class="spcItem py-1 pl-8 text-text dark:text-textDark"
                        >
                            Produce by Shai Tea
                        </li>
                    </ul>
                </div>
                <div class="spcCategory mb-2">
                    <div
                        class="spcTitle w-8/12 relative px-2 py-1 bg-border dark:bg-borderDark border-2 border-r-0 border-border dark:border-borderDark font-semibold text-text dark:text-textDark before:content-[''] before:absolute before:w-6 before:h-6 before:rotate-45 before:bg-border dark:before:bg-borderDark before:top-1 before:-right-3"
                    >
                        Size and Maturity
                    </div>
                    <ul class="divide-y divide-border dark:divide-borderDark">
                        <li
                            class="spcItem py-1 pl-8 text-text dark:text-textDark"
                        >
                            Size: 25mm - 30mm
                        </li>
                        <li
                            class="spcItem py-1 pl-8 text-text dark:text-textDark"
                        >
                            Maturity: Medium
                        </li>
                    </ul>
                </div>
                <div class="spcCategory mb-2">
                    <div
                        class="spcTitle w-8/12 relative px-2 py-1 bg-border dark:bg-borderDark border-2 border-r-0 border-border dark:border-borderDark font-semibold text-text dark:text-textDark before:content-[''] before:absolute before:w-6 before:h-6 before:rotate-45 before:bg-border dark:before:bg-borderDark before:top-1 before:-right-3"
                    >
                        Quality
                    </div>
                    <ul class="divide-y divide-border dark:divide-borderDark">
                        <li
                            class="spcItem py-1 pl-8 text-text dark:text-textDark"
                        >
                            Organic
                        </li>
                        <li
                            class="spcItem py-1 pl-8 text-text dark:text-textDark"
                        >
                            Fresh Condition
                        </li>
                        <li
                            class="spcItem py-1 pl-8 text-text dark:text-textDark"
                        >
                            Air tide package
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref, onUpdated } from "vue";

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

setInterval(() => {
    const targetTime = new Date("2025-2-9 10:30:15").getTime();
    const now = new Date().getTime();

    const distance = targetTime - now;

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

const sizes = {
    unit: "in",
    items: [5, 6, 7, 10],
};

const count = ref(1);

const sliderButtonWraper = ref();
const slideButton = ref();
let buttonWidth = 0;

const sliderButtonContainer = ref();
let isSlideActive = false;

const scrollRight = (e) => {
    if (sliderButtonWraper.value) {
        sliderButtonWraper.value.scrollLeft += e;
    }
};
const scrollLeft = (e) => {
    if (sliderButtonWraper.value) {
        sliderButtonWraper.value.scrollLeft -= e;
    }
};

onUpdated(() => {
    buttonWidth = slideButton.value[0].offsetWidth + 9;

    if (
        sliderButtonContainer.value.offsetWidth >=
        sliderButtonWraper.value.offsetWidth
    ) {
        isSlideActive = true;
    }
});
</script>
