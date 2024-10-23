import { ref } from "vue";

export function useModal(){
    const isOpen = ref(false);
    
    const open = () => {
        setTimeout(() => {
            isOpen.value = true;
        }, 0);
        // setTimeout function are used for Ignore beforeMount hook in closeOutside directive.
    }

    const close = () => {
        isOpen.value = false;
    }

    return{
        isOpen,
        open,
        close
    };
}