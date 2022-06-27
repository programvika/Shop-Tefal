import Accessories from './pages/Accessories/Accessories'
import AdminPanel from './pages/AdminPanel/AdminPanel'
import Basket from './pages/Basket/Basket'
import Breakfast from './pages/Breakfast/Breakfast'
import Coffee from './pages/Coffee/Coffee'
import Dishes from './pages/Dishes/Dishes'
import Favorites from './pages/Favorites/Favorites'
import Shop from './pages/Shop/Shop'

import { ACCESSORIES_ROUTE, ADMIN_PANEL_ROUTE, BASKET_ROUTE, BREAKFAST_ROUTE, COFFEE_ROUTE, DISHES_ROUTE, FAVORITES_ROUTE, SHOP_ROUTE } from './utils/consts'


export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    },
    {
        path: ADMIN_PANEL_ROUTE,
        Component: AdminPanel
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: DISHES_ROUTE,
        Component: Dishes
    },
    {
        path: ACCESSORIES_ROUTE,
        Component: Accessories
    },
    {
        path: BREAKFAST_ROUTE,
        Component: Breakfast
    },
    {
        path: COFFEE_ROUTE,
        Component: Coffee
    },
]