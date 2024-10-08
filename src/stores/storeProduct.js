import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', {
    state : () => {
        return{
            products: [
                {
                    id: 1,
                    name: 'tomato',
                    price: 20,
                },
                {
                    id: 2,
                    name: 'potato',
                    price: 25,
                }
            ]
        }
    },
    actions: {
        // actions methods
    },
    getters: {
        // getters methods
    }
})