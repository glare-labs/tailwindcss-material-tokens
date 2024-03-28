import plugin from 'tailwindcss/plugin.js'


/**
 * The BLUE of Google's LOGO is the default color.
 * The hex: #4285F4
 * 
 * All the default tokens' values come from '@glare-labs/material-tokens-generator'.
 * @example
 * MaterialDynamicSchemeGenerator.GenerateByVariant('#4285F4', {
 *   variant: EMaterialVariant.VIBRANT,
 * });
 */

export class MaterialTokens {
    private static Prefix = 'md-sys-color'
    public static SetPrefix(prefix: string) {
        this.Prefix = prefix
    }

    public static readonly FixedTokens = plugin(({ addUtilities }) => {
        addUtilities({
            '.primary-fixed': {
                'background-color': `var(--${this.Prefix}-primary-fixed, #d8e2ff)`,
            },
            '.primary-fixed-dim': {
                'background-color': `var(--${this.Prefix}-primary-fixed-dim, #adc6ff)`,
            },
            '.on-primary-fixed': {
                'color': `var(--${this.Prefix}-on-primary-fixed, #001a41)`,
            },
            '.on-primary-fixed-variant': {
                'color': `var(--${this.Prefix}-on-primary-fixed-variant, #004494)`,
            },
            '.secondary-fixed': {
                'background-color': `var(--${this.Prefix}-secondary-fixed, #dfe0ff)`,
            },
            '.secondary-fixed-dim': {
                'background-color': `var(--${this.Prefix}-secondary-fixed-dim, #c1c4eb)`,
            },
            '.on-secondary-fixed': {
                'color': `var(--${this.Prefix}-on-secondary-fixed, #151937)`,
            },
            '.on-secondary-fixed-variant': {
                'color': `var(--${this.Prefix}-on-secondary-fixed-variant, #414465)`,
            },
            '.tertiary-fixed': {
                'background-color': `var(--${this.Prefix}-tertiary-fixed, #e7deff)`,
            },
            '.tertiary-fixed-dim': {
                'background-color': `var(--${this.Prefix}-tertiary-fixed-dim, #ccbff8)`,
            },
            '.on-tertiary-fixed': {
                'color': `var(--${this.Prefix}-on-tertiary-fixed, #1e1341)`,
            },
            '.on-tertiary-fixed-variant': {
                'color': `var(--${this.Prefix}-on-tertiary-fixed-variant, #4a4070)`,
            },
        })
    })

    public static readonly ContainerTokens = plugin(({ addUtilities }) => {
        addUtilities({
            '.surface-container-lowest': {
                'background-color': `var(--${this.Prefix}-surface-container-lowest, #ffffff`,
            },
            '.surface-container-low': {
                'background-color': `var(--${this.Prefix}-surface-container-low, #f1f3ff`,
            },
            '.surface-container': {
                'background-color': `var(--${this.Prefix}-surface-container, #ebedfa`,
            },
            '.surface-container-high': {
                'background-color': `var(--${this.Prefix}-surface-container-high, #e5e8f5`,
            },
            '.surface-container-highest': {
                'background-color': `var(--${this.Prefix}-surface-container-highest, #dfe2ef`,
            },
        })
    })

    public static readonly BaseTokens = plugin(({ addUtilities }) => {
        addUtilities({
            '.background': {
                'background-color': `var(--${this.Prefix}-background, #f9f9ff`,
            },
            '.on-background': {
                'color': `var(--${this.Prefix}-on-background, #181c25`,
            },
            '.surface': {
                'background-color': `var(--${this.Prefix}-surface, #f9f9ff`,
            },
            '.surface-dim': {
                'background-color': `var(--${this.Prefix}-surface-dim, #d7d9e6`,
            },
            '.surface-bright': {
                'background-color': `var(--${this.Prefix}-surface-bright, #f9f9ff`,
            },
            '.on-surface': {
                'color': `var(--${this.Prefix}-on-surface, #181c25)`,
            },
            '.surface-variant': {
                'background-color': `var(--${this.Prefix}-surface-variant, #dee2f2)`,
            },
            '.on-surface-variant': {
                'color': `var(--${this.Prefix}-on-surface-variant, #424753)`,
            },
            '.inverse-surface': {
                'background-color': `var(--${this.Prefix}-inverse-surface, #2c303a)`,
            },
            '.inverse-on-surface': {
                'color': `var(--${this.Prefix}-inverse-on-surface, #eef0fd)`,
            },
            '.border-outline': {
                'border-color': `var(--${this.Prefix}-outline, #727785)`,
            },
            '.border-outline-variant': {
                'border-color': `var(--${this.Prefix}-outline-variant, #c2c6d6)`,
            },
            '.shadow': {
                '--tw-shadow-color': `var(--${this.Prefix}-shadow, #000000)`,
            },
            '.scrim': {
                'background-color': `var(--${this.Prefix}-scrim, #000000)`,
            },
            '.surface-tint': {
                'background-color': `var(--${this.Prefix}-surface-tint, #005ac1)`,
            },

            '.primary': {
                'background-color': `var(--${this.Prefix}-primary, #005ac1)`,
            },
            '.on-primary': {
                'color': `var(--${this.Prefix}-on-primary, #ffffff)`,
            },
            '.primary-container': {
                'background-color': `var(--${this.Prefix}-primary-container, #d8e2ff)`,
            },
            '.on-primary-container': {
                'color': `var(--${this.Prefix}-on-primary-container, #001a41)`,
            },
            '.inverse-primary': {
                'background-color': `var(--${this.Prefix}-inverse-primary, #adc6ff)`,
            },
            '.secondary': {
                'background-color': `var(--${this.Prefix}-secondary, #595c7e)`,
            },
            '.on-secondary': {
                'color': `var(--${this.Prefix}-on-secondary, #ffffff)`,
            },
            '.secondary-container': {
                'background-color': `var(--${this.Prefix}-secondary-container, #dfe0ff)`,
            },
            '.on-secondary-container': {
                'color': `var(--${this.Prefix}-on-secondary-container, #151937)`,
            },
            '.tertiary': {
                'background-color': `var(--${this.Prefix}-tertiary, #625789)`,
            },
            '.on-tertiary': {
                'color': `var(--${this.Prefix}-on-tertiary, #ffffff)`,
            },
            '.tertiary-container': {
                'background-color': `var(--${this.Prefix}-tertiary-container, #e7deff)`,
            },
            '.on-tertiary-container': {
                'color': `var(--${this.Prefix}-on-tertiary-container, #1e1341)`,
            },
            '.error': {
                'background-color': `var(--${this.Prefix}-error, #ba1a1a)`,
            },
            '.on-error': {
                'color': `var(--${this.Prefix}-on-error, #ffffff)`,
            },
            '.error-container': {
                'background-color': `var(--${this.Prefix}-error-container, #ffdad6)`,
            },
            '.on-error-container': {
                'color': `var(--${this.Prefix}-on-error-container, #410002)`,
            },
        })
    })

    public static readonly PaletteTokens = plugin(({ addUtilities }) => {
        addUtilities({
            'primary-palette-key-color': `var(--${this.Prefix}-primary-palette-key-color, #047aff)`,
            'secondary-palette-key-color': `var(--${this.Prefix}-secondary-palette-key-color, #727598)`,
            'tertiary-palette-key-color': `var(--${this.Prefix}-tertiary-palette-key-color, #7b70a3)`,
            'neutral-palette-key-color': `var(--${this.Prefix}-neutral-palette-key-color, #737782)`,
            'neutral-variant-palette-key-color': `var(--${this.Prefix}-neutral-variant-palette-key-color, #727785)`,
        })
    })

    public static readonly FullTokens = [this.FixedTokens, this.ContainerTokens, this.BaseTokens, this.PaletteTokens]

}