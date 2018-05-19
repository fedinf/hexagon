import { Architecture } from "./Architecture";
import { Configuration } from "./Configuration";
export declare class Checker {
    private architecture;
    private configuration;
    constructor(architecture: Architecture, configuration: Configuration);
    check(): void;
}
