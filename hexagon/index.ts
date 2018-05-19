import {ConfigurationLoader} from './src/ConfigurationLoader'
import {Configuration} from "./src/Configuration";
import {Architecture} from './src/Architecture'
import {Checker} from './src/Checker'
import {Builder} from './src/Builder'

export class Hexagon {
    private builder: Builder;
    private checker: Checker;

    constructor(configurationFilePath :string) {
        const configuration: Configuration = new ConfigurationLoader().load(configurationFilePath);
        const architecture = new Architecture(configuration);
        this.builder = new Builder(architecture, configuration);
        this.checker = new Checker(architecture, configuration);
    }

    public check() {
        return this.checker.check();
    }

    public build() {
        return this.builder.build();
    }
}