import type { Config, PluginCreator } from "tailwindcss/types/config";

export interface IProvider {
    getPlugin: () => {
        handler: PluginCreator;
        config?: Partial<Config>;
    }
}
