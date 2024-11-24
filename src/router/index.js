import { createMemoryHistory, createRouter } from "vue-router";

// Layouts
import MainLayout from "../layouts/mainLayout/MainLayout.vue";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout.vue";

// Public Views
import Home from "../views/Home.vue";

// Dashboard Views
import Overview from "../views/Dashboard/Overview.vue";

// Auth Views
// ..

const routes = [
    // Public Routes
    {
        path: "/",
        name: "MainLayout",
        component: MainLayout,
        children: [{ path: "", name: "Home", component: Home }],
    },
    // Dashboard Routes
    {
        path: "/dashboard",
        name: "DashboardLayout",
        component: DashboardLayout,
        children: [{ path: "", name: "Overview", component: Overview }],
    },
    // Catch-All Route
    { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
