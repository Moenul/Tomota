import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", {
    state: () => {
        return {
            categories: [
                {
                    id: 1,
                    name: "Clothing",
                    children: [
                        {
                            id: 7,
                            name: "Men",
                            children: [{ id: 8, name: "Shirts" }],
                        },
                        {
                            id: 9,
                            name: "Women",
                            children: [{ id: 10, name: "Dresses" }],
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Electronics",
                    children: [
                        { id: 11, name: "Smartphones" },
                        {
                            id: 12,
                            name: "Computers",
                            children: [{ id: 13, name: "Laptops" }],
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Furniture",
                    children: [
                        { id: 14, name: "Tables" },
                        { id: 15, name: "Chairs" },
                    ],
                },
                {
                    id: 4,
                    name: "Shoes",
                    children: [
                        { id: 16, name: "Men's Shoes" },
                        { id: 17, name: "Women's Shoes" },
                    ],
                },
                {
                    id: 5,
                    name: "Miscellaneous",
                    children: [
                        { id: 18, name: "Toys" },
                        { id: 19, name: "Sports Equipment" },
                    ],
                },
                {
                    id: 6,
                    name: "Books",
                    children: [
                        {
                            id: 20,
                            name: "Fiction",
                            children: [{ id: 21, name: "Fantasy" }],
                        },
                    ],
                },
            ],
        };
    },
    action: {
        // action method
    },
    getters: {
        // getter method
        getCategory(state) {
            const findCategory = (categories, name) => {
                for (const category of categories) {
                    if (category.name === name) {
                        return category;
                    }
                    if (category.children) {
                        const cat = findCategory(category.children, name);
                        if (cat) return cat;
                    }
                }
                return null;
            };
            return (name) => findCategory(state.categories, name);
        },
    },
});
