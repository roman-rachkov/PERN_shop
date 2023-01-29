import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    hasRole(role) {
        let hasRole = false;
        this._user.roles.forEach(r => {
            if (hasRole) {
                return;
            }
            if (r.title.toLowerCase() === role.toLowerCase()) {
                hasRole = true;
            }
        })
        return hasRole;
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}