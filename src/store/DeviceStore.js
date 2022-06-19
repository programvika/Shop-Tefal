import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {name: 'Посуда', id: 1},
            {name: 'Кухонные аксессуары', id: 2},
            {name: 'Наборы для завтрака', id: 3},
            {name: 'Кофемашины', id: 4},
            {name: 'Приготовление еды', id: 5},
            {name: 'Подготовка продуктов', id: 6},
            {name: 'Весы', id: 7},
            {name: 'Пылесосы', id: 8},
            {name: 'Уход за одеждой', id: 9},
            {name: 'Климат', id: 10},
        ]
        makeAutoObservable(this)
    }

        setTypes(types) {
            this._types = types
        }

        get types() {
            return this._types
        }
}