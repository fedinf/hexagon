export class Configuration {
    private configurationFile: string = '';

    public setOriginal(configurationFile: string) {
        this.configurationFile = configurationFile;
    }

    public getOriginal() {
        return this.configurationFile;
    }
}