import {makeAutoObservable} from "mobx";

export default class TypeStore {
    constructor() {
        this._types = [
            {id: 1, title: 'Refrigerators'},
            {id: 2, title: 'SmartPhones'},
            {id: 3, title: 'TV'},
            {id: 4, title: 'Audio'},
            {id: 5, title: 'Boiler'},
            {id: 6, title: 'SmartPhones'},
            {id: 7, title: 'SmartPhones'},
            {id: 8, title: 'SmartPhones'},
        ]
        this._filter = []
        makeAutoObservable(this)
    }

    set(types) {
        this._types = types
    }

    get list() {
        return this._types
    }

    get filter() {
        return this._filter
    }

    inFilter(id) {
        return this._filter.includes(id)
    }

    setFilter(typeIds) {
        this._filter = typeIds
    }

    addFilter(typeId) {
        this._filter.push(typeId)
    }

    removeFilter(typeIds) {
        this._filter = this._filter.filter(id => id !== typeIds)
    }
}