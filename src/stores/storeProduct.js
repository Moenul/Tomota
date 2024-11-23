import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
    state: () => {
        return {
            products: [
                {
                    id: 1,
                    name: "tomato",
                    price: 20,
                },
                {
                    id: 2,
                    name: "potato",
                    price: 25,
                },
            ],
        };
    },
    actions: {
        // actions methods
        async getProducts() {
            const responce = await axios.get(
                "https://api.escuelajs.co/api/v1/products?offset=0&limit=12"
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
    },
});
