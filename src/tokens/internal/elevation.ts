import plugin from "tailwindcss/plugin";
import type { IProvider } from "./provider.interface";

export type TElevationProviderConstructorParams = {
    readonly shadowToken?: string
}

export class ElevationProvider implements IProvider {

    public shadowToken

    constructor(params: TElevationProviderConstructorParams) {
        this.shadowToken = params.shadowToken
    }

    public getPlugin() {
        return plugin(({ addUtilities }) => {
            addUtilities({
                '.elevation-none': {
                    'box-shadow': `none`,
                },
                '.elevation-1': {
                    'box-shadow': `rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.14)) 0px 1px 1px 0px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.12)) 0px 1px 3px 0px`,
                },
                '.elevation-2': {
                    'box-shadow': `rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.14)) 0px 3px 4px 0px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.12)) 0px 1px 8px 0px`,
                },
                '.elevation-3': {
                    'box-shadow': `rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.14)) 0px 6px 10px 0px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.12)) 0px 1px 18px 0px`,
                },
                '.elevation-4': {
                    'box-shadow': `rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.14)) 0px 8px 10px 1px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.12)) 0px 3px 14px 2px`,
                },
                '.elevation-5': {
                    'box-shadow': `rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.14)) 0px 12px 17px 2px, var(--${this.shadowToken}-shadow, rgba(0, 0, 0, 0.12)) 0px 5px 22px 4px`,
                },
            })
        })
    }
}
