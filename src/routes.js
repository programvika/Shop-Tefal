import Basket from './pages/Basket/Basket'
import Shop from './pages/Shop/Shop'

import { BASKET_ROUTE, SHOP_ROUTE } from './utils/consts'


export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

]