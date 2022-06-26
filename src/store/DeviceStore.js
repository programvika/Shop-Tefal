import {makeAutoObservable} from "mobx";
import { DISHES_ROUTE } from "../utils/consts";

export default class DeviceStore {
    constructor() {
        this._types = [
            {name: 'Посуда', nav: DISHES_ROUTE, id: 1},
            {name: 'Кухонные аксессуары',nav: DISHES_ROUTE, id: 2},
            {name: 'Наборы для завтрака',nav: DISHES_ROUTE, id: 3},
            {name: 'Кофемашины',nav: DISHES_ROUTE, id: 4},
            {name: 'Приготовление еды',nav: DISHES_ROUTE, id: 5},
            {name: 'Подготовка продуктов',nav: DISHES_ROUTE, id: 6},
            {name: 'Весы',nav: DISHES_ROUTE, id: 7},
            {name: 'Пылесосы',nav: DISHES_ROUTE, id: 8},
            {name: 'Уход за одеждой',nav: DISHES_ROUTE, id: 9},
            {name: 'Климат',nav: DISHES_ROUTE, id: 10},
        ]

        this._dishes = [
            {name: "Сковорода Tefal Resist Intense D5220683 28 см", price: 2600, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 1},
            {name: "Набор посуды Tefal Opti'Space 13 предметов", price: 14090, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 2},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 3},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 4},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 5},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 6},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 7},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 8},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 9},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 10},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 12},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 13},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 14},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 15},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 16},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 17},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 18},
            {name: "Стеклянная крышка Tefal Cocoon 24 см 04197724", price: 1250, img: `https://media.posuda40.ru/cache/80/17/801761eec61fa534f20f4326865e6f8d.jpg`, id: 19},
        ]

        this._kitchenAccessories = [
            {name: "Блок с ножами TEFAL Ice Force K232S574", price: 8999, img: `https://shop.tefal.ru/sites/default/files/products/product_2219_1.jpg`, id: 1},
        ]

        this._breakfastSets = [
            {name: "Набор техники Доброе утро M Tefal", price: 16690, img: `https://shop.tefal.ru/sites/default/files/products/product_3479_12.jpg`, id: 1},
        ]

        this._coffeeMachines = [
            {name: "Набор техники Инновационные помощники L Tefal", price: 207090, img: `https://shop.tefal.ru/sites/default/files/products/product_3468_18.jpg`, id: 1},
        ]

        makeAutoObservable(this)
    }

        setTypes(types) {
            this._types = types
        }

        setDishes(dishes) {
            this._dishes = dishes
        }

        get types() {
            return this._types
        }

        get dishes() {
            return this._dishes
        }
}