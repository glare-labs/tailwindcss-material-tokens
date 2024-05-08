import plugin from 'tailwindcss/plugin.js'

export class Color {
    public static colorPrefix = 'md-sys-color'
    public static setDefaultVariantPrefix(prefix: string) {
        this.colorPrefix = prefix
        return this
    }

    public static readonly plugin = plugin(({ addUtilities }) => {
        /**
         * Base colors
         */
        addUtilities({
            '.bg-background': {
                'background-color': `var(--${this.colorPrefix}-background, #f9f9ff)`,
            },
            '.text-background': {
                'color': `var(--${this.colorPrefix}-background, #f9f9ff)`,
            },
            '.bg-on-background': {
                'background-color': `var(--${this.colorPrefix}-on-background, #181c25)`,
            },
            '.text-on-background': {
                'color': `var(--${this.colorPrefix}-on-background, #181c25)`,
            },
            '.bg-surface': {
                'background-color': `var(--${this.colorPrefix}-surface, #f9f9ff)`,
            },
            '.text-surface': {
                'color': `var(--${this.colorPrefix}-surface, #f9f9ff)`,
            },
            '.bg-surface-dim': {
                'background-color': `var(--${this.colorPrefix}-surface-dim, #d7d9e6)`,
            },
            '.text-surface-dim': {
                'color': `var(--${this.colorPrefix}-surface-dim, #d7d9e6)`,
            },
            '.bg-surface-bright': {
                'background-color': `var(--${this.colorPrefix}-surface-bright, #f9f9ff)`,
            },
            '.text-surface-bright': {
                'color': `var(--${this.colorPrefix}-surface-bright, #f9f9ff)`,
            },
            '.bg-on-surface': {
                'background-color': `var(--${this.colorPrefix}-on-surface, #181c25)`,
            },
            '.text-on-surface': {
                'color': `var(--${this.colorPrefix}-on-surface, #181c25)`,
            },
            '.bg-surface-variant': {
                'background-color': `var(--${this.colorPrefix}-surface-variant, #dee2f2)`,
            },
            '.text-surface-variant': {
                'color': `var(--${this.colorPrefix}-surface-variant, #dee2f2)`,
            },
            '.bg-on-surface-variant': {
                'background-color': `var(--${this.colorPrefix}-on-surface-variant, #424753)`,
            },
            '.text-on-surface-variant': {
                'color': `var(--${this.colorPrefix}-on-surface-variant, #424753)`,
            },
            '.bg-inverse-surface': {
                'background-color': `var(--${this.colorPrefix}-inverse-surface, #2c303a)`,
            },
            '.text-inverse-surface': {
                'color': `var(--${this.colorPrefix}-inverse-surface, #2c303a)`,
            },
            '.bg-inverse-on-surface': {
                'background-color': `var(--${this.colorPrefix}-inverse-on-surface, #eef0fd)`,
            },
            '.text-inverse-on-surface': {
                'color': `var(--${this.colorPrefix}-inverse-on-surface, #eef0fd)`,
            },
            '.bg-scrim': {
                'background-color': `var(--${this.colorPrefix}-scrim, #000000)`,
            },
            '.text-scrim': {
                'color': `var(--${this.colorPrefix}-scrim, #000000)`,
            },
            '.bg-surface-tint': {
                'background-color': `var(--${this.colorPrefix}-surface-tint, #005ac1)`,
            },
            '.text-surface-tint': {
                'color': `var(--${this.colorPrefix}-surface-tint, #005ac1)`,
            },
            '.bg-primary': {
                'background-color': `var(--${this.colorPrefix}-primary, #005ac1)`,
            },
            '.text-primary': {
                'color': `var(--${this.colorPrefix}-primary, #005ac1)`,
            },
            '.bg-on-primary': {
                'background-color': `var(--${this.colorPrefix}-on-primary, #ffffff)`,
            },
            '.text-on-primary': {
                'color': `var(--${this.colorPrefix}-on-primary, #ffffff)`,
            },
            '.bg-primary-container': {
                'background-color': `var(--${this.colorPrefix}-primary-container, #d8e2ff)`,
            },
            '.text-primary-container': {
                'color': `var(--${this.colorPrefix}-primary-container, #d8e2ff)`,
            },
            '.bg-on-primary-container': {
                'background-color': `var(--${this.colorPrefix}-on-primary-container, #001a41)`,
            },
            '.text-on-primary-container': {
                'color': `var(--${this.colorPrefix}-on-primary-container, #001a41)`,
            },
            '.bg-inverse-primary': {
                'background-color': `var(--${this.colorPrefix}-inverse-primary, #adc6ff)`,
            },
            '.text-inverse-primary': {
                'color': `var(--${this.colorPrefix}-inverse-primary, #adc6ff)`,
            },
            '.bg-secondary': {
                'background-color': `var(--${this.colorPrefix}-secondary, #595c7e)`,
            },
            '.text-secondary': {
                'color': `var(--${this.colorPrefix}-secondary, #595c7e)`,
            },
            '.bg-on-secondary': {
                'background-color': `var(--${this.colorPrefix}-on-secondary, #ffffff)`,
            },
            '.text-on-secondary': {
                'color': `var(--${this.colorPrefix}-on-secondary, #ffffff)`,
            },
            '.bg-secondary-container': {
                'background-color': `var(--${this.colorPrefix}-secondary-container, #dfe0ff)`,
            },
            '.text-secondary-container': {
                'color': `var(--${this.colorPrefix}-secondary-container, #dfe0ff)`,
            },
            '.bg-on-secondary-container': {
                'background-color': `var(--${this.colorPrefix}-on-secondary-container, #151937)`,
            },
            '.text-on-secondary-container': {
                'color': `var(--${this.colorPrefix}-on-secondary-container, #151937)`,
            },
            '.bg-tertiary': {
                'background-color': `var(--${this.colorPrefix}-tertiary, #625789)`,
            },
            '.text-tertiary': {
                'color': `var(--${this.colorPrefix}-tertiary, #625789)`,
            },
            '.bg-on-tertiary': {
                'background-color': `var(--${this.colorPrefix}-on-tertiary, #ffffff)`,
            },
            '.text-on-tertiary': {
                'color': `var(--${this.colorPrefix}-on-tertiary, #ffffff)`,
            },
            '.bg-tertiary-container': {
                'background-color': `var(--${this.colorPrefix}-tertiary-container, #e7deff)`,
            },
            '.text-tertiary-container': {
                'color': `var(--${this.colorPrefix}-tertiary-container, #e7deff)`,
            },
            '.bg-on-tertiary-container': {
                'background-color': `var(--${this.colorPrefix}-on-tertiary-container, #1e1341)`,
            },
            '.text-on-tertiary-container': {
                'color': `var(--${this.colorPrefix}-on-tertiary-container, #1e1341)`,
            },
            '.bg-error': {
                'background-color': `var(--${this.colorPrefix}-error, #ba1a1a)`,
            },
            '.text-error': {
                'color': `var(--${this.colorPrefix}-error, #ba1a1a)`,
            },
            '.bg-on-error': {
                'background-color': `var(--${this.colorPrefix}-on-error, #ffffff)`,
            },
            '.text-on-error': {
                'color': `var(--${this.colorPrefix}-on-error, #ffffff)`,
            },
            '.bg-error-container': {
                'background-color': `var(--${this.colorPrefix}-error-container, #ffdad6)`,
            },
            '.text-error-container': {
                'color': `var(--${this.colorPrefix}-error-container, #ffdad6)`,
            },
            '.bg-on-error-container': {
                'background-color': `var(--${this.colorPrefix}-on-error-container, #410002)`,
            },
            '.text-on-error-container': {
                'color': `var(--${this.colorPrefix}-on-error-container, #410002)`,
            },
            '.bg-outline': {
                'background-color': `var(--${this.colorPrefix}-outline, #727785)`,
            },
            '.text-outline': {
                'color': `var(--${this.colorPrefix}-outline, #727785)`,
            },
            '.bg-outline-variant': {
                'background-color': `var(--${this.colorPrefix}-outline-variant, #c2c6d6)`,
            },
            '.text-outline-variant': {
                'color': `var(--${this.colorPrefix}-outline-variant, #c2c6d6)`,
            },
            '.bg-shadow': {
                'background-color': `var(--${this.colorPrefix}-shadow, #000000)`,
            },
            '.text-shadow': {
                'color': `var(--${this.colorPrefix}-shadow, #000000)`,
            },
        })
    
        /**
         * Border
         */
        addUtilities({
            '.border-outline': {
                'border-color': `var(--${this.colorPrefix}-outline, #727785)`,
            },
            '.border-outline-variant': {
                'border-color': `var(--${this.colorPrefix}-outline-variant, #c2c6d6)`,
            },
        })
    
        /**
         * Containers, background-color only.
         */
        addUtilities({
            '.bg-surface-container-lowest': {
                'background-color': `var(--${this.colorPrefix}-surface-container-lowest, #ffffff)`,
            },
            '.bg-surface-container-low': {
                'background-color': `var(--${this.colorPrefix}-surface-container-low, #f1f3ff)`,
            },
            '.bg-surface-container': {
                'background-color': `var(--${this.colorPrefix}-surface-container, #ebedfa)`,
            },
            '.bg-surface-container-high': {
                'background-color': `var(--${this.colorPrefix}-surface-container-high, #e5e8f5)`,
            },
            '.bg-surface-container-highest': {
                'background-color': `var(--${this.colorPrefix}-surface-container-highest, #dfe2ef)`,
            },
        })
    
        /**
         * Fixed colors
         */
        addUtilities({
            '.bg-primary-fixed': {
                'background-color': `var(--${this.colorPrefix}-primary-fixed, #d8e2ff)`,
            },
            '.text-primary-fixed': {
                'color': `var(--${this.colorPrefix}-primary-fixed, #d8e2ff)`,
            },
            '.bg-primary-fixed-dim': {
                'background-color': `var(--${this.colorPrefix}-primary-fixed-dim, #adc6ff)`,
            },
            '.text-primary-fixed-dim': {
                'color': `var(--${this.colorPrefix}-primary-fixed-dim, #adc6ff)`,
            },
            '.bg-on-primary-fixed': {
                'background-color': `var(--${this.colorPrefix}-on-primary-fixed, #001a41)`,
            },
            '.text-on-primary-fixed': {
                'color': `var(--${this.colorPrefix}-on-primary-fixed, #001a41)`,
            },
            '.bg-on-primary-fixed-variant': {
                'background-color': `var(--${this.colorPrefix}-on-primary-fixed-variant, #004494)`,
            },
            '.text-on-primary-fixed-variant': {
                'color': `var(--${this.colorPrefix}-on-primary-fixed-variant, #004494)`,
            },
            '.bg-secondary-fixed': {
                'background-color': `var(--${this.colorPrefix}-secondary-fixed, #dfe0ff)`,
            },
            '.text-secondary-fixed': {
                'color': `var(--${this.colorPrefix}-secondary-fixed, #dfe0ff)`,
            },
            '.bg-secondary-fixed-dim': {
                'background-color': `var(--${this.colorPrefix}-secondary-fixed-dim, #c1c4eb)`,
            },
            '.text-secondary-fixed-dim': {
                'color': `var(--${this.colorPrefix}-secondary-fixed-dim, #c1c4eb)`,
            },
            '.bg-on-secondary-fixed': {
                'background-color': `var(--${this.colorPrefix}-on-secondary-fixed, #151937)`,
            },
            '.text-on-secondary-fixed': {
                'color': `var(--${this.colorPrefix}-on-secondary-fixed, #151937)`,
            },
            '.bg-on-secondary-fixed-variant': {
                'background-color': `var(--${this.colorPrefix}-on-secondary-fixed-variant, #414465)`,
            },
            '.text-on-secondary-fixed-variant': {
                'color': `var(--${this.colorPrefix}-on-secondary-fixed-variant, #414465)`,
            },
            '.bg-tertiary-fixed': {
                'background-color': `var(--${this.colorPrefix}-tertiary-fixed, #e7deff)`,
            },
            '.text-tertiary-fixed': {
                'color': `var(--${this.colorPrefix}-tertiary-fixed, #e7deff)`,
            },
            '.bg-tertiary-fixed-dim': {
                'background-color': `var(--${this.colorPrefix}-tertiary-fixed-dim, #ccbff8)`,
            },
            '.text-tertiary-fixed-dim': {
                'color': `var(--${this.colorPrefix}-tertiary-fixed-dim, #ccbff8)`,
            },
            '.bg-on-tertiary-fixed': {
                'background-color': `var(--${this.colorPrefix}-on-tertiary-fixed, #1e1341)`,
            },
            '.text-on-tertiary-fixed': {
                'color': `var(--${this.colorPrefix}-on-tertiary-fixed, #1e1341)`,
            },
            '.bg-on-tertiary-fixed-variant': {
                'background-color': `var(--${this.colorPrefix}-on-tertiary-fixed-variant, #4a4070)`,
            },
            '.text-on-tertiary-fixed-variant': {
                'color': `var(--${this.colorPrefix}-on-tertiary-fixed-variant, #4a4070)`,
            },
        })

        /**
         * Key colors
         */
        addUtilities({
            '.bg-primary-palette-key-color': {
                'background-color': `var(--${this.colorPrefix}-primary-palette-key-color, #047aff)`,
            },
            '.text-primary-palette-key-color': {
                'color': `var(--${this.colorPrefix}-primary-palette-key-color, #047aff)`,
            },
            '.bg-secondary-palette-key-color': {
                'background-color': `var(--${this.colorPrefix}-secondary-palette-key-color, #727598)`,
            },
            '.text-secondary-palette-key-color': {
                'color': `var(--${this.colorPrefix}-secondary-palette-key-color, #727598)`,
            },
            '.bg-tertiary-palette-key-color': {
                'background-color': `var(--${this.colorPrefix}-tertiary-palette-key-color, #7b70a3)`,
            },
            '.text-tertiary-palette-key-color': {
                'color': `var(--${this.colorPrefix}-tertiary-palette-key-color, #7b70a3)`,
            },
            '.bg-neutral-palette-key-color': {
                'background-color': `var(--${this.colorPrefix}-neutral-palette-key-color, #737782)`,
            },
            '.text-neutral-palette-key-color': {
                'color': `var(--${this.colorPrefix}-neutral-palette-key-color, #737782)`,
            },
            '.bg-neutral-variant-palette-key-color': {
                'background-color': `var(--${this.colorPrefix}-neutral-variant-palette-key-color, #727785)`,
            },
            '.text-neutral-variant-palette-key-color': {
                'color': `var(--${this.colorPrefix}-neutral-variant-palette-key-color, #727785)`,
            },
        })
    })

}
