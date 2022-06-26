import AdminPanel from './pages/AdminPanel/AdminPanel'
import Basket from './pages/Basket/Basket'
import Dishes from './pages/Dishes/Dishes'
import Favorites from './pages/Favorites/Favorites'
import Shop from './pages/Shop/Shop'

import { ADMIN_PANEL_ROUTE, BASKET_ROUTE, DISHES_ROUTE, FAVORITES_ROUTE, SHOP_ROUTE } from './utils/consts'


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

]