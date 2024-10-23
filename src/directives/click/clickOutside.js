export default {
    // Lifecycle hook called before the element is mounted in the DOM
    beforeMount: (el, binding) => {
      // Create a custom event that will be triggered when the user clicks outside the element
      el.clickOutsideEvent = (event) => {
        // Check if the clicked target is not the element itself or any of its children
        if (!(el == event.target || el.contains(event.target))) {
          // Call the function passed to the directive (through binding.value)
          // This will typically be the handler for closing a modal, dropdown, etc.
          binding.value();
        }
      };
      // Add a click event listener to the whole document to detect clicks anywhere on the page
      document.addEventListener("click", el.clickOutsideEvent);
    },

    // Lifecycle hook called when the element is unmounted from the DOM
    unmounted(el) {
      // Remove the event listener to prevent memory leaks or unnecessary checks
      document.removeEventListener("click", el.clickOutsideEvent);
    },
};
  