import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("products", {
    state: () => {
        return {
            products: [
                {
                    id: 4,
                    title: "Handmade Fresh Table",
                    price: 687,
                    images: "https://placeimg.com/640/480/any?r=0.8807778235430017",
                },
            ],
        };
    },
    getters: {
        // getters methods
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
});
