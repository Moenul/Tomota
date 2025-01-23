import { defineStore } from "pinia";

export const useFilterStore = defineStore("filters", {
    state: () => {
        return {
            filters: [
                {
                    name: "Price",
                    children: [{ name: 300 }, { name: 9000 }],
                },
                {
                    name: "Availability",
                    children: [{ name: "In Stock" }, { name: "Out of Stock" }],
                },
                {
                    name: "Category",
                    children: [
                        { name: "Fruits" },
                        { name: "Vegetables" },
                        { name: "Dairy Products" },
                        { name: "Bakery Items" },
                        { name: "Meat" },
                        { name: "Seafood" },
                        { name: "Snacks" },
                        { name: "Beverages" },
                        { name: "Spices" },
                        { name: "Cereals" },
                    ],
                },
                {
                    name: "Brand",
                    children: [
                        { name: "Amul" },
                        { name: "Nestlé" },
                        { name: "Britannia" },
                        { name: "Mother Dairy" },
                        { name: "Parle" },
                        { name: "Coca-Cola" },
                        { name: "Pepsi" },
                        { name: "Tata" },
                    ],
                },
                {
                    name: "Type",
                    children: [
                        { name: "Organic" },
                        { name: "Non-Organic" },
                        { name: "Frozen" },
                        { name: "Fresh" },
                        { name: "Packaged" },
                        { name: "Loose" },
                    ],
                },
                {
                    name: "Weight",
                    children: [
                        { name: "100g" },
                        { name: "250g" },
                        { name: "500g" },
                        { name: "1kg" },
                        { name: "2kg" },
                        { name: "5kg" },
                    ],
                },
                {
                    name: "Discount",
                    children: [
                        { name: "5% or more" },
                        { name: "10% or more" },
                        { name: "20% or more" },
                        { name: "30% or more" },
                    ],
                },
                {
                    name: "Shelf Life",
                    children: [
                        { name: "Less than 1 week" },
                        { name: "1 to 2 weeks" },
                        { name: "1 to 3 months" },
                        { name: "More than 3 months" },
                    ],
                },
                {
                    name: "Beverage Type",
                    children: [
                        { name: "Soft Drinks" },
                        { name: "Juices" },
                        { name: "Tea" },
                        { name: "Coffee" },
                        { name: "Energy Drinks" },
                    ],
                },
                {
                    name: "Dietary Preferences",
                    children: [
                        { name: "Gluten-Free" },
                        { name: "Vegan" },
                        { name: "Sugar-Free" },
                        { name: "Low Sodium" },
                        { name: "Keto-Friendly" },
                    ],
                },
            ],
        };
    },
    action: {
        // actions
    },
    getters: {
        // getters
    },
});
