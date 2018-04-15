import { Color } from "./color";

export class Settings {
    selectedColor: Color
    colors: Color[];

    constructor() {
        this.colors = [];
    }
}