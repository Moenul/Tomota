export default {
    mounted: (el, binding) => {
        applySlideButtonLogic(el);
    },
    updated: (el, binding) => {
        applySlideButtonLogic(el);
    },
    unmounted(el) {
        const slideLeft = el.querySelector(".slideLeft");
        const slideRight = el.querySelector(".slideRight");
        document.removeEventListener("click", slideLeft);
        document.removeEventListener("click", slideRight);
    },
};

function applySlideButtonLogic(el) {
    const carouselContainer = el.children[0];
    if (!carouselContainer) return;

    const carouselItemNumbers = el.children[0].children.length;
    const carouselItemSize = el.children[0].children[0]?.clientWidth;

    // Get Container style
    const containerStyle = getComputedStyle(carouselContainer);
    // Get Container Gap
    const containerGap = parseFloat(containerStyle.gap);

    // Scroll Amounts
    const scrollAmounts = () => {
        if (containerGap) {
            return carouselItemSize + containerGap;
        } else {
            return carouselItemSize;
        }
    };

    const slideLeft = el.querySelector(".slideLeft");
    const slideRight = el.querySelector(".slideRight");

    if (
        carouselContainer.clientWidth >
        carouselItemSize * carouselItemNumbers
    ) {
        slideLeft?.classList.add("hidden", "md:hidden");
        slideRight?.classList.add("hidden", "md:hidden");
    } else {
        slideLeft?.classList.remove("md:hidden");
        slideRight?.classList.remove("md:hidden");
    }

    slideLeft.addEventListener("click", () => {
        if (carouselContainer) {
            carouselContainer.scrollLeft -= scrollAmounts();
        }
    });
    slideRight.addEventListener("click", () => {
        if (carouselContainer) {
            carouselContainer.scrollLeft += scrollAmounts();
        }
    });
}
