import {makeAutoObservable} from "mobx";

export default class BrandStore {
    constructor() {

        this._brands = [
            {id: 1, title: 'Apple'},
            {id: 2, title: 'Samsung'},
        ]
        this._filter = []
        makeAutoObservable(this)
    }


    set(brands) {
        this._brands = brands
    }

    get list() {
        return this._brands
    }

    get filter(){
        return this._filter
    }

    inFilter(id) {
        return this._filter.includes(id)
    }

    setFilter(typeIds){
        this._filter = typeIds
    }

    addFilter(typeId){
        this._filter.push(typeId);
    }

    removeFilter(typeIds){
        this._filter = this._filter.filter(id => id !== typeIds);
    }

}