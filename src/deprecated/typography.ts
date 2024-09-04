import plugin from 'tailwindcss/plugin'

/**
 * @deprecated
 * Use provideTypography() instead of Typography
 */
export class Typography {

    private static typescalePrefix = 'md-sys-typescale'
    public static setDefaultVariantPrefix(prefix: string) {
        this.typescalePrefix = prefix
        return this
    }

    public static readonly plugin = plugin(({ addComponents }) => {
        addComponents({
            '.display-large': {
                'font-weight': `var(--${this.typescalePrefix}-display-large-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-display-large-font-size, 57px)`,
                'line-height': `var(--${this.typescalePrefix}-display-large-line-height, 64px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-display-large-letter-spacing, -0.25px)`,
            },
            '.display-medium': {
                'font-weight': `var(--${this.typescalePrefix}-display-medium-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-display-medium-font-size, 45px)`,
                'line-height': `var(--${this.typescalePrefix}-display-medium-line-height, 52px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-display-medium-letter-spacing, 0px)`,
            },
            '.display-small': {
                'font-weight': `var(--${this.typescalePrefix}-display-small-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-display-small-font-size, 36px)`,
                'line-height': `var(--${this.typescalePrefix}-display-small-line-height, 44px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-display-small-letter-spacing, 0px)`,
            },

            '.headline-large': {
                'font-weight': `var(--${this.typescalePrefix}-headline-large-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-headline-large-font-size, 32px)`,
                'line-height': `var(--${this.typescalePrefix}-headline-large-line-height, 40px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-headline-large-letter-spacing, 0px)`,
            },
            '.headline-medium': {
                'font-weight': `var(--${this.typescalePrefix}-headline-medium-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-headline-medium-font-size, 28px)`,
                'line-height': `var(--${this.typescalePrefix}-headline-medium-line-height, 36px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-headline-medium-letter-spacing, 0px)`,
            },
            '.headline-small': {
                'font-weight': `var(--${this.typescalePrefix}-headline-small-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-headline-small-font-size, 24px)`,
                'line-height': `var(--${this.typescalePrefix}-headline-small-line-height, 32px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-headline-small-letter-spacing, 0px)`,
            },

            '.title-large': {
                'font-weight': `var(--${this.typescalePrefix}-title-large-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-title-large-font-size, 22px)`,
                'line-height': `var(--${this.typescalePrefix}-title-large-line-height, 28px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-title-large-letter-spacing, 0px)`,
            },
            '.title-medium': {
                'font-weight': `var(--${this.typescalePrefix}-title-medium-font-weight, 500)`,
                'font-size': `var(--${this.typescalePrefix}-title-medium-font-size, 16px)`,
                'line-height': `var(--${this.typescalePrefix}-title-medium-line-height, 24px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-title-medium-letter-spacing, 0.15px)`,
            },
            '.title-small': {
                'font-weight': `var(--${this.typescalePrefix}-title-small-font-weight, 500)`,
                'font-size': `var(--${this.typescalePrefix}-title-small-font-size, 14px)`,
                'line-height': `var(--${this.typescalePrefix}-title-small-line-height, 20px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-title-small-letter-spacing, 0.1px)`,
            },

            '.body-large': {
                'font-weight': `var(--${this.typescalePrefix}-body-large-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-body-large-font-size, 16px)`,
                'line-height': `var(--${this.typescalePrefix}-body-large-line-height, 24px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-body-large-letter-spacing, 0.5px)`,
            },
            '.body-medium': {
                'font-weight': `var(--${this.typescalePrefix}-body-medium-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-body-medium-font-size, 14px)`,
                'line-height': `var(--${this.typescalePrefix}-body-medium-line-height, 20px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-body-medium-letter-spacing, 0.25px)`,
            },
            '.body-small': {
                'font-weight': `var(--${this.typescalePrefix}-body-small-font-weight, 400)`,
                'font-size': `var(--${this.typescalePrefix}-body-small-font-size, 12px)`,
                'line-height': `var(--${this.typescalePrefix}-body-small-line-height, 16px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-body-small-letter-spacing, 0.4px)`,
            },

            '.label-large': {
                'font-weight': `var(--${this.typescalePrefix}-label-large-font-weight, 500)`,
                'font-size': `var(--${this.typescalePrefix}-label-large-font-size, 14px)`,
                'line-height': `var(--${this.typescalePrefix}-label-large-line-height, 20px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-label-large-letter-spacing, 0.1px)`,
            },
            '.label-medium': {
                'font-weight': `var(--${this.typescalePrefix}-label-medium-font-weight, 500)`,
                'font-size': `var(--${this.typescalePrefix}-label-medium-font-size, 12px)`,
                'line-height': `var(--${this.typescalePrefix}-label-medium-line-height, 16px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-label-medium-letter-spacing, 0.5px)`,
            },
            '.label-small': {
                'font-weight': `var(--${this.typescalePrefix}-label-small-font-weight, 500)`,
                'font-size': `var(--${this.typescalePrefix}-label-small-font-size, 11px)`,
                'line-height': `var(--${this.typescalePrefix}-label-small-line-height, 16px)`,
                'letter-spacing': `var(--${this.typescalePrefix}-label-small-letter-spacing, 0.5px)`,
            },
        })
    })

}
