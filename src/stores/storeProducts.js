import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("products", {
    state: () => {
        return {
            products: [],
        };
    },
    actions: {
        // actions methods
        async getProducts() {
            const responce = await axios.get(
                "https://api.escuelajs.co/api/v1/products?offset=10&limit=50"
            );
            try {
                this.products = responce.data;
            } catch (e) {
                console.log(e);
            }
        },
    },
    getters: {
        // getters methods
        getProductsByCategory: (state) => {
            return (category) => {
                return state.products.filter(
                    (product) => product.category.name === category
                );
            };
        },
    },
});
