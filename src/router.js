import FoodList from './components/FoodList.vue'
import CalendarApp from './components/CalendarApp.vue'
import HomePage from './components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routesMap = [
    { path: '/', component: HomePage },
    { path: '/food-list', component: FoodList },
    { path: '/calendar', component: CalendarApp },

]
const router = createRouter({
    history: createWebHistory(),
    routes: routesMap
})
export default router