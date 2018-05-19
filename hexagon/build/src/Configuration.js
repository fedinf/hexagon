"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    constructor() {
        this.configurationFile = '';
    }
    setOriginal(configurationFile) {
        this.configurationFile = configurationFile;
    }
    getOriginal() {
        return this.configurationFile;
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=Configuration.js.map