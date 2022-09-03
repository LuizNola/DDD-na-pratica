import Address from "./address";

class Customer {
    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length == 0) {
            throw new Error("Name is required")
        }
        if (this._id.length == 0) {
            throw new Error("id is required")
        }
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is required to active a customer")
        }
        this._active = true;
    }

    deactive() {
        this._active = false;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    set Address(address: Address) {
        this._address = address;
    }

}