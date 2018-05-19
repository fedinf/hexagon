import { Configuration } from "./Configuration";
import { Architecture } from "./Architecture";
export declare class Builder {
    private architecture;
    private configuration;
    constructor(architecture: Architecture, configuration: Configuration);
    build(): void;
}
