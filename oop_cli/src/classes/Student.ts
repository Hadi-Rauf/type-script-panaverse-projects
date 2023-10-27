import Person from "./Person.js";

class Student extends Person {
    private name: string

    constructor() {
        super()
        this.name = "";
    }

    public get getName(): string {
        return this.name;
    }

    public set setName(value: string) {
        this.name = value;
    }
}

export default Student;