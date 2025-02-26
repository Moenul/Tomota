<template>
    <div class="productSection">
        <div
            class="productDisplay w-full overflow-hidden mr-auto my-5 p-5 rounded-xl bg-section dark:bg-sectionDark border border-border dark:border-borderDark"
        >
            <!-- Product Header -->
            <div class="productHeader w-full mb-4">
                <h1
                    class="title text-xl md:text-2xl text-text dark:text-textDark font-semibold"
                >
                    Classic High-Waisted Athletic Shorts
                </h1>
                <div
                    class="ratingsAndSid grid md:flex mt-2 md:divide-x divide-gray-300"
                >
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
                    <div class="sid md:pl-5 text-text dark:text-textDark">
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
                    <div
                        class="sliderButtonWraper w-72 m-auto md:w-full relative"
                        v-carousel-slide
                    >
                        <div
                            class="sliderButtonContainer flex flex-nowrap gap-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:h-0"
                        >
                            <button
                                v-for="i in 8"
                                ref="slideButton"
                                class="slideButton min-w-16 size-16 group overflow-hidden rounded-sm border cursor-pointer hover:bg-accent hover:border-accent focus:bg-accent focus:border-accent"
                            >
                                <img
                                    class="aspect-square object-cover group-hover:opacity-75 group-focus:opacity-75"
                                    src="https://gofresh.com.kw/wp-content/uploads/2023/10/pink-guava-1.jpg"
                                    alt=""
                                />
                            </button>
                        </div>

                        <div
                            class="scrollBtn slideLeft absolute -left-3 top-1/2 cursor-pointer transform -translate-y-1/2 p-2 bg-gray-800/30 text-black rounded-full"
                        >
                            <Icon icon="icon-park-outline:left" />
                        </div>
                        <div
                            class="scrollBtn slideRight absolute -right-3 top-1/2 cursor-pointer transform -translate-y-1/2 p-2 bg-gray-800/30 text-black rounded-full"
                        >
                            <Icon icon="icon-park-outline:right" />
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
                            delightful and refreshing experience.Juicy and
                            sweet: Experience the perfect balance of juiciness
                            and sweetness with our watermelons, making every
                            bite a delightful and refreshing experience.
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
                                days +
                                `:` +
                                hours +
                                `:` +
                                minutes +
                                `:` +
                                seconds
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
                            <QuantitySelector
                                v-model="productQuantity"
                                :minQuantity="1"
                                :maxQuantity="6"
                            />

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
                                class="addToCartBtn h-10 md:px-3 flex gap-2 text-sm md:text-md font-semibold md:font-normal justify-center items-center rounded-md bg-accent dark:bg-accentDark hover:bg-accentHover dark:hover:bg-accent/70 border border-accent dark:border-accentDark text-textDark"
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
                        <ul
                            class="divide-y divide-border dark:divide-borderDark"
                        >
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
                        <ul
                            class="divide-y divide-border dark:divide-borderDark"
                        >
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
                        <ul
                            class="divide-y divide-border dark:divide-borderDark"
                        >
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

        <div
            class="productFeedbackSection w-full overflow-hidden mr-auto mb-6 rounded-xl bg-primary dark:bg-primaryDark border border-border dark:border-borderDark"
        >
            <div class="sectionTitle grid grid-cols-2 px-3 py-4">
                <div class="reviewTitle text-2xl text-text dark:text-textDark">
                    Reviews
                </div>
                <div
                    class="questionTitle text-2xl text-text dark:text-textDark hidden md:block"
                >
                    Questions
                </div>
            </div>
            <div
                class="sectionContainer grid md:grid-cols-2 divide-y md:divide-x divide-border dark:divide-borderDark border-t border-border dark:border-borderDark relative overflow-hidden"
            >
                <div
                    class="productReviewsSection p-3 pb-0 max-h-[500px] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-0"
                >
                    <div
                        v-for="i in 3"
                        class="reviewCard w-full p-2 mb-3 rounded-md bg-section dark:bg-sectionDark border border-border dark:border-borderDark"
                    >
                        <div
                            class="reviewDetails grid grid-cols-2 justify-between text-sm mb-1"
                        >
                            <div
                                class="customerName font-semibold text-text dark:text-textDark"
                            >
                                Moenul Islam
                            </div>
                            <div
                                class="customerRatings flex justify-end items-center md:text-xl text-gray-300 mr-1"
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
                            <div
                                class="reviewDate text-text dark:text-textDark"
                            >
                                2 Days ago
                            </div>
                            <div
                                class="purchaseVarificationStatus flex justify-end items-center text-success"
                            >
                                <Icon
                                    icon="solar:verified-check-bold"
                                    class="text-xl mr-1"
                                />
                                Verified Purchase
                            </div>
                        </div>
                        <div
                            class="reviewText mb-1 leading-tight text-textSecondary dark:text-textSecondaryDark"
                        >
                            Introducing our premium watermelon, the epitome of
                            deliciously sweet goodness. Sourced from the finest
                            farms, each bite bursts with unparalleled juiciness.
                        </div>
                        <div
                            class="reviewImages flex flex-row-reverse items-center gap-2"
                        >
                            <button
                                class="size-14 rounded-sm overflow-hidden border border-border dark:border-borderDark"
                            >
                                <img
                                    src="https://admin.krishibidbazaar.com/storage/app/product/GO6qlVPc6udY7iXgg26f4117.jpg"
                                    alt=""
                                    class="object-cover"
                                />
                            </button>
                            <button
                                class="size-14 rounded-sm overflow-hidden border border-border"
                            >
                                <img
                                    src="https://api.freshtoday.com.bd/media/thumbnail/media/64f88194f3640.jpeg"
                                    alt=""
                                    class="object-cover"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    class="questionTitle text-2xl text-text px-3 py-4 dark:text-textDark block md:hidden"
                >
                    Questions
                </div>
                <div
                    class="productQuestionsSection p-3 pb-0 max-h-[500px] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-0"
                >
                    <div
                        v-for="i in 4"
                        class="questionCard w-full p-2 mb-3 rounded-md bg-section dark:bg-sectionDark border border-border dark:border-borderDark"
                    >
                        <div class="questionDetails flex gap-2">
                            <Icon
                                icon="octicon:question-24"
                                class="text-5xl text-text dark:text-textDark"
                            />
                            <div class="detailsBox w-full mb-1">
                                <div
                                    class="questionTitle text-md font-semibold leading-tight text-text dark:text-textDark"
                                >
                                    Are online reviews reliable for making
                                    purchasing decisions?
                                </div>
                                <div class="coustomerInfo flex justify-between">
                                    <div
                                        class="name text-textSecondary dark:text-textSecondaryDark"
                                    >
                                        By Moenul Islam
                                    </div>
                                    <div
                                        class="date text-textSecondary dark:text-textSecondaryDark"
                                    >
                                        3 Days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="answerBox w-[calc(100%-58px)] bg-border dark:bg-borderDark text-text dark:text-textDark rounded-sm ml-[58px] p-2 leading-tight before:w-0 before:h-0 before:border-l-[35px] before:border-l-transparent before:border-t-[20px] before:border-t-border dark:before:border-t-borderDark before:border-r-[0px] before:border-r-transparent before:absolute before:top-0 before:-left-6 relative"
                        >
                            It depends on the retailer and the stage of
                            processing. Quickly contact customer service to
                            inquire about cancellation possibilities.
                            <div class=""></div>
                        </div>
                    </div>
                </div>

                <div
                    :style="{
                        bottom: questionModal
                            ? '0px'
                            : `-${questionFormBarSize + 10}px`,
                    }"
                    class="questionSection w-full md:w-1/2 bg-section dark:bg-sectionDark absolute right-0 min-h-60 transition-all duration-300 ease-in-out"
                >
                    <div
                        @click="toggleModal"
                        class="questionBarTitle w-80 m-auto -mt-10 text-textDark dark:text-text bg-sectionDark dark:bg-section text-center py-1 rounded-full shadow-md cursor-pointer"
                    >
                        Want to ask any question?
                        <div
                            class="questionBtn size-10 text-2xl absolute right-10 -top-12 text-textDark dark:text-text bg-sectionDark dark:bg-section flex justify-center items-center rounded-full shadow-md cursor-pointer"
                        >
                            <Icon
                                icon="lineicons:angle-double-up"
                                :style="{
                                    rotate: questionModal ? '180deg' : '0deg',
                                }"
                            />
                        </div>
                    </div>

                    <div
                        ref="questionFormBar"
                        class="questionFormBar p-4 mt-4 text-center"
                    >
                        <p class="mb-4 text-text dark:text-textDark">
                            Fill this form and submit your question.
                        </p>
                        <hr class="text-text dark:text-textDark" />
                        <form class="p-4 grid gap-3">
                            <div>
                                <input
                                    type="text"
                                    id="first_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <textarea
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your question here..."
                                required
                            ></textarea>
                            <button
                                type="submit"
                                class="text-white bg-accent hover:accentHover focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-accentDark dark:hover:bg-accentHoverDark"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { onUpdated, ref } from "vue";
import QuantitySelector from "../components/app/layout/quantitySelector/QuantitySelector.vue";

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

const productQuantity = ref(1);

const questionModal = ref(false);

const toggleModal = () => {
    questionModal.value = !questionModal.value;
};

const questionFormBar = ref();
let questionFormBarSize = 0;

onUpdated(() => {
    questionFormBarSize = questionFormBar.value.clientHeight;
});
</script>
