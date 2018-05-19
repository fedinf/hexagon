import {Architecture} from "./Architecture";
import {Configuration} from "./Configuration";

export class Checker {
    private architecture: Architecture;
    private configuration: Configuration;

    constructor(architecture: Architecture, configuration: Configuration) {
        this.architecture = architecture;
        this.configuration = configuration;
    }

    public check() {
        console.log('check');
    }
}