import plugin from 'tailwindcss/plugin.js'

export class Typography {

    private static Prefix = 'md-typescale'
    public static SetPrefix(prefix: string) {
        this.Prefix = prefix
    }

    public static readonly BaseTokens = plugin(({ addUtilities }) => {
        addUtilities({
            'display-large': {
                'font-weight': `var(--${this.Prefix}-display-large-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-display-large-font-size, 57px)`,
                'line-height': `var(--${this.Prefix}-display-large-line-height, 64px)`,
                'letter-spacing': `var(--${this.Prefix}-display-large-letter-spacing, -0.25px)`,
            },
            'display-medium': {
                'font-weight': `var(--${this.Prefix}-display-medium-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-display-medium-font-size, 45px)`,
                'line-height': `var(--${this.Prefix}-display-medium-line-height, 52px)`,
                'letter-spacing': `var(--${this.Prefix}-display-medium-letter-spacing, 0px)`,
            },
            'display-small': {
                'font-weight': `var(--${this.Prefix}-display-small-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-display-small-font-size, 36px)`,
                'line-height': `var(--${this.Prefix}-display-small-line-height, 44px)`,
                'letter-spacing': `var(--${this.Prefix}-display-small-letter-spacing, 0px)`,
            },

            'headline-large': {
                'font-weight': `var(--${this.Prefix}-headline-large-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-headline-large-font-size, 32px)`,
                'line-height': `var(--${this.Prefix}-headline-large-line-height, 40px)`,
                'letter-spacing': `var(--${this.Prefix}-headline-large-letter-spacing, 0px)`,
            },
            'headline-medium': {
                'font-weight': `var(--${this.Prefix}-headline-medium-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-headline-medium-font-size, 28px)`,
                'line-height': `var(--${this.Prefix}-headline-medium-line-height, 36px)`,
                'letter-spacing': `var(--${this.Prefix}-headline-medium-letter-spacing, 0px)`,
            },
            'headline-small': {
                'font-weight': `var(--${this.Prefix}-headline-small-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-headline-small-font-size, 24px)`,
                'line-height': `var(--${this.Prefix}-headline-small-line-height, 32px)`,
                'letter-spacing': `var(--${this.Prefix}-headline-small-letter-spacing, 0px)`,
            },

            'title-large': {
                'font-weight': `var(--${this.Prefix}-title-large-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-title-large-font-size, 22px)`,
                'line-height': `var(--${this.Prefix}-title-large-line-height, 28px)`,
                'letter-spacing': `var(--${this.Prefix}-title-large-letter-spacing, 0px)`,
            },
            'title-medium': {
                'font-weight': `var(--${this.Prefix}-title-medium-font-weight, 500)`,
                'font-size': `var(--${this.Prefix}-title-medium-font-size, 16px)`,
                'line-height': `var(--${this.Prefix}-title-medium-line-height, 24px)`,
                'letter-spacing': `var(--${this.Prefix}-title-medium-letter-spacing, 0.15px)`,
            },
            'title-small': {
                'font-weight': `var(--${this.Prefix}-title-small-font-weight, 500)`,
                'font-size': `var(--${this.Prefix}-title-small-font-size, 14px)`,
                'line-height': `var(--${this.Prefix}-title-small-line-height, 20px)`,
                'letter-spacing': `var(--${this.Prefix}-title-small-letter-spacing, 0.1px)`,
            },

            'body-large': {
                'font-weight': `var(--${this.Prefix}-body-large-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-body-large-font-size, 16px)`,
                'line-height': `var(--${this.Prefix}-body-large-line-height, 24px)`,
                'letter-spacing': `var(--${this.Prefix}-body-large-letter-spacing, 0.5px)`,
            },
            'body-medium': {
                'font-weight': `var(--${this.Prefix}-body-medium-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-body-medium-font-size, 14px)`,
                'line-height': `var(--${this.Prefix}-body-medium-line-height, 20px)`,
                'letter-spacing': `var(--${this.Prefix}-body-medium-letter-spacing, 0.25px)`,
            },
            'body-small': {
                'font-weight': `var(--${this.Prefix}-body-small-font-weight, 400)`,
                'font-size': `var(--${this.Prefix}-body-small-font-size, 12px)`,
                'line-height': `var(--${this.Prefix}-body-small-line-height, 16px)`,
                'letter-spacing': `var(--${this.Prefix}-body-small-letter-spacing, 0.4px)`,
            },

            'label-large': {
                'font-weight': `var(--${this.Prefix}-label-large-font-weight, 500)`,
                'font-size': `var(--${this.Prefix}-label-large-font-size, 14px)`,
                'line-height': `var(--${this.Prefix}-label-large-line-height, 20px)`,
                'letter-spacing': `var(--${this.Prefix}-label-large-letter-spacing, 0.1px)`,
            },
            'label-medium': {
                'font-weight': `var(--${this.Prefix}-label-medium-font-weight, 500)`,
                'font-size': `var(--${this.Prefix}-label-medium-font-size, 12px)`,
                'line-height': `var(--${this.Prefix}-label-medium-line-height, 16px)`,
                'letter-spacing': `var(--${this.Prefix}-label-medium-letter-spacing, 0.5px)`,
            },
            'label-small': {
                'font-weight': `var(--${this.Prefix}-label-small-font-weight, 500)`,
                'font-size': `var(--${this.Prefix}-label-small-font-size, 11px)`,
                'line-height': `var(--${this.Prefix}-label-small-line-height, 16px)`,
                'letter-spacing': `var(--${this.Prefix}-label-small-letter-spacing, 0.5px)`,
            },
        })
    })
    

    public static readonly FullTokens = [this.BaseTokens]

}