"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurationLoader_1 = require("./src/ConfigurationLoader");
const Architecture_1 = require("./src/Architecture");
const Checker_1 = require("./src/Checker");
const Builder_1 = require("./src/Builder");
class Hexagon {
    constructor(configurationFilePath) {
        const configuration = new ConfigurationLoader_1.ConfigurationLoader().load(configurationFilePath);
        const architecture = new Architecture_1.Architecture(configuration);
        this.builder = new Builder_1.Builder(architecture, configuration);
        this.checker = new Checker_1.Checker(architecture, configuration);
    }
    check() {
        return this.checker.check();
    }
    build() {
        return this.builder.build();
    }
}
exports.Hexagon = Hexagon;
//# sourceMappingURL=index.js.map