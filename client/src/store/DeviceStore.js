import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._devices = [
            {
                id: 1,
                name: "IPhone 14",
                price: 599.99,
                primaryImageId: 1,
                createdAt: "2023-01-27T05:27:07.374Z",
                updatedAt: "2023-01-27T05:27:07.374Z",
                typeId: 2,
                brandId: 2,
                info: [],
                images: [
                    {
                        id: 1,
                        filename: "8e1c904c-92c5-4b36-b61a-312bf3db26cf.jpg",
                        createdAt: "2023-01-27T05:27:07.344Z",
                        updatedAt: "2023-01-27T05:27:07.377Z",
                        deviceId: 1
                    }
                ]
            },
            {
                id: 2,
                name: "IPhone 14",
                price: 599.99,
                primaryImageId: 2,
                createdAt: "2023-01-27T05:27:07.374Z",
                updatedAt: "2023-01-27T05:27:07.374Z",
                typeId: 2,
                brandId: 2,
                info: [],
                images: [
                    {
                        id: 2,
                        filename: "8e1c904c-92c5-4b36-b61a-312bf3db26cf.jpg",
                        createdAt: "2023-01-27T05:27:07.344Z",
                        updatedAt: "2023-01-27T05:27:07.377Z",
                        deviceId: 2
                    }
                ]
            },
            {
                id: 3,
                name: "IPhone 14",
                price: 599.99,
                primaryImageId: 3,
                createdAt: "2023-01-27T05:27:07.374Z",
                updatedAt: "2023-01-27T05:27:07.374Z",
                typeId: 1,
                brandId: 1,
                info: [],
                images: [
                    {
                        id: 3,
                        filename: "8e1c904c-92c5-4b36-b61a-312bf3db26cf.jpg",
                        createdAt: "2023-01-27T05:27:07.344Z",
                        updatedAt: "2023-01-27T05:27:07.377Z",
                        deviceId: 3
                    }
                ]
            },
            {
                id: 4,
                name: "IPhone 14",
                price: 599.99,
                primaryImageId: 4,
                createdAt: "2023-01-27T05:27:07.374Z",
                updatedAt: "2023-01-27T05:27:07.374Z",
                typeId: 1,
                brandId: 1,
                info: [],
                images: [
                    {
                        id: 4,
                        filename: "8e1c904c-92c5-4b36-b61a-312bf3db26cf.jpg",
                        createdAt: "2023-01-27T05:27:07.344Z",
                        updatedAt: "2023-01-27T05:27:07.377Z",
                        deviceId: 4
                    }
                ]
            },
            {
                id: 5,
                name: "IPhone 14",
                price: 599.99,
                primaryImageId: 5,
                createdAt: "2023-01-27T05:27:07.374Z",
                updatedAt: "2023-01-27T05:27:07.374Z",
                typeId: 1,
                brandId: 1,
                info: [],
                images: [
                    {
                        id: 5,
                        filename: "8e1c904c-92c5-4b36-b61a-312bf3db26cf.jpg",
                        createdAt: "2023-01-27T05:27:07.344Z",
                        updatedAt: "2023-01-27T05:27:07.377Z",
                        deviceId: 5
                    }
                ]
            },

        ]
        makeAutoObservable(this)
    }

    set(devices) {
        this._devices = devices
    }

    get list() {
        return this._devices
    }
}