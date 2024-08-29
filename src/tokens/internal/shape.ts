import plugin from 'tailwindcss/plugin'
import { type IProvider } from '../../declaration/provider.interface'

export type TShapeProviderConstructorParams = {
    readonly prefix?: string
    readonly defaultUnit?: string
}

export class ShapeProvider implements IProvider {
    public prefix
    public defaultUnit

    constructor(params: TShapeProviderConstructorParams) {
        this.prefix = params.prefix
        this.defaultUnit = params.defaultUnit
    }

    public getPlugin() {
        return plugin(({ addUtilities }) => {
            addUtilities({
                '.shape-full': {
                    'border-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-full-t': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-top-right-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-full-tl': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-full-tr': {
                    'border-top-right-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-full-b': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-full-bl': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-full-br': {
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-full, 9999px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },

                '.shape-extra': {
                    'border-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-t': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-top-right-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-tl': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-tr': {
                    'border-top-right-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-b': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-bl': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-br': {
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-extra, 28px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },

                '.shape-large': {
                    'border-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-large-t': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-top-right-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-large-tl': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-large-tr': {
                    'border-top-right-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-large-b': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-large-bl': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-large-br': {
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-large, 16px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },

                '.shape-medium': {
                    'border-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-medium-t': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-top-right-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-medium-tl': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-medium-tr': {
                    'border-top-right-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-medium-b': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-medium-bl': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-medium-br': {
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-medium, 12px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },

                '.shape-small': {
                    'border-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-small-t': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-top-right-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-small-tl': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-small-tr': {
                    'border-top-right-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-small-b': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-small-bl': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-small-br': {
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-small, 8px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },

                '.shape-extra-small': {
                    'border-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-small-t': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-top-right-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-small-tl': {
                    'border-top-left-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-small-tr': {
                    'border-top-right-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-small-b': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-small-bl': {
                    'border-bottom-left-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },
                '.shape-extra-small-br': {
                    'border-bottom-right-radius': `calc(var(--${this.prefix}-extra-small, 4px) * var(--${this.prefix}-unit, ${this.defaultUnit}))`,
                },

                '.shape-none': {
                    'border-radius': `var(--${this.prefix}-none, none)`,
                },
            })
        })
    }

}
