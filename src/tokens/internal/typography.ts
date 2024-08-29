import plugin from 'tailwindcss/plugin'
import { type IProvider } from '../../declaration/provider.interface'

export type TTypographyProviderConstructorParams = {
    readonly prefix?: string
}

export class TypographyProvider implements IProvider {
    public prefix

    constructor(params: TTypographyProviderConstructorParams) {
        this.prefix = params.prefix
    }

    public getPlugin() {
        return plugin(({ addComponents }) => {
            addComponents({
                '.text-display-large': {
                    'font-weight': `var(--${this.prefix}-display-large-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-display-large-font-size, 57px)`,
                    'line-height': `var(--${this.prefix}-display-large-line-height, 64px)`,
                    'letter-spacing': `var(--${this.prefix}-display-large-letter-spacing, -0.25px)`,
                },
                '.text-display-medium': {
                    'font-weight': `var(--${this.prefix}-display-medium-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-display-medium-font-size, 45px)`,
                    'line-height': `var(--${this.prefix}-display-medium-line-height, 52px)`,
                    'letter-spacing': `var(--${this.prefix}-display-medium-letter-spacing, 0px)`,
                },
                '.text-display-small': {
                    'font-weight': `var(--${this.prefix}-display-small-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-display-small-font-size, 36px)`,
                    'line-height': `var(--${this.prefix}-display-small-line-height, 44px)`,
                    'letter-spacing': `var(--${this.prefix}-display-small-letter-spacing, 0px)`,
                },

                '.text-headline-large': {
                    'font-weight': `var(--${this.prefix}-headline-large-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-headline-large-font-size, 32px)`,
                    'line-height': `var(--${this.prefix}-headline-large-line-height, 40px)`,
                    'letter-spacing': `var(--${this.prefix}-headline-large-letter-spacing, 0px)`,
                },
                '.text-headline-medium': {
                    'font-weight': `var(--${this.prefix}-headline-medium-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-headline-medium-font-size, 28px)`,
                    'line-height': `var(--${this.prefix}-headline-medium-line-height, 36px)`,
                    'letter-spacing': `var(--${this.prefix}-headline-medium-letter-spacing, 0px)`,
                },
                '.text-headline-small': {
                    'font-weight': `var(--${this.prefix}-headline-small-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-headline-small-font-size, 24px)`,
                    'line-height': `var(--${this.prefix}-headline-small-line-height, 32px)`,
                    'letter-spacing': `var(--${this.prefix}-headline-small-letter-spacing, 0px)`,
                },

                '.text-title-large': {
                    'font-weight': `var(--${this.prefix}-title-large-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-title-large-font-size, 22px)`,
                    'line-height': `var(--${this.prefix}-title-large-line-height, 28px)`,
                    'letter-spacing': `var(--${this.prefix}-title-large-letter-spacing, 0px)`,
                },
                '.text-title-medium': {
                    'font-weight': `var(--${this.prefix}-title-medium-font-weight, 500)`,
                    'font-size': `var(--${this.prefix}-title-medium-font-size, 16px)`,
                    'line-height': `var(--${this.prefix}-title-medium-line-height, 24px)`,
                    'letter-spacing': `var(--${this.prefix}-title-medium-letter-spacing, 0.15px)`,
                },
                '.text-title-small': {
                    'font-weight': `var(--${this.prefix}-title-small-font-weight, 500)`,
                    'font-size': `var(--${this.prefix}-title-small-font-size, 14px)`,
                    'line-height': `var(--${this.prefix}-title-small-line-height, 20px)`,
                    'letter-spacing': `var(--${this.prefix}-title-small-letter-spacing, 0.1px)`,
                },

                '.text-body-large': {
                    'font-weight': `var(--${this.prefix}-body-large-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-body-large-font-size, 16px)`,
                    'line-height': `var(--${this.prefix}-body-large-line-height, 24px)`,
                    'letter-spacing': `var(--${this.prefix}-body-large-letter-spacing, 0.5px)`,
                },
                '.text-body-medium': {
                    'font-weight': `var(--${this.prefix}-body-medium-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-body-medium-font-size, 14px)`,
                    'line-height': `var(--${this.prefix}-body-medium-line-height, 20px)`,
                    'letter-spacing': `var(--${this.prefix}-body-medium-letter-spacing, 0.25px)`,
                },
                '.text-body-small': {
                    'font-weight': `var(--${this.prefix}-body-small-font-weight, 400)`,
                    'font-size': `var(--${this.prefix}-body-small-font-size, 12px)`,
                    'line-height': `var(--${this.prefix}-body-small-line-height, 16px)`,
                    'letter-spacing': `var(--${this.prefix}-body-small-letter-spacing, 0.4px)`,
                },

                '.text-label-large': {
                    'font-weight': `var(--${this.prefix}-label-large-font-weight, 500)`,
                    'font-size': `var(--${this.prefix}-label-large-font-size, 14px)`,
                    'line-height': `var(--${this.prefix}-label-large-line-height, 20px)`,
                    'letter-spacing': `var(--${this.prefix}-label-large-letter-spacing, 0.1px)`,
                },
                '.text-label-medium': {
                    'font-weight': `var(--${this.prefix}-label-medium-font-weight, 500)`,
                    'font-size': `var(--${this.prefix}-label-medium-font-size, 12px)`,
                    'line-height': `var(--${this.prefix}-label-medium-line-height, 16px)`,
                    'letter-spacing': `var(--${this.prefix}-label-medium-letter-spacing, 0.5px)`,
                },
                '.text-label-small': {
                    'font-weight': `var(--${this.prefix}-label-small-font-weight, 500)`,
                    'font-size': `var(--${this.prefix}-label-small-font-size, 11px)`,
                    'line-height': `var(--${this.prefix}-label-small-line-height, 16px)`,
                    'letter-spacing': `var(--${this.prefix}-label-small-letter-spacing, 0.5px)`,
                },
            })
        })
    }

}
