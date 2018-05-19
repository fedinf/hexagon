import {Configuration} from "./Configuration";
import {Architecture} from "./Architecture";

export class Builder {
    private architecture: Architecture;
    private configuration: Configuration;

    constructor(architecture: Architecture, configuration: Configuration) {
        this.architecture = architecture;
        this.configuration = configuration;
    }

    public build() {
    }
}