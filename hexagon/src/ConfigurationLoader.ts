import {Configuration} from "./Configuration";

export class ConfigurationLoader {
    public load(configurationFilePath: string) {
        let conf = new Configuration();
        return conf;
    }
}