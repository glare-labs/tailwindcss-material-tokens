import plugin from "tailwindcss/plugin"
import type { IProvider } from "./provider.interface"

export type TColorProviderConstructor = {
    readonly prefix?: string
}

export class ColorProvider implements IProvider {
    public prefix

    constructor(params: TColorProviderConstructor) {
        this.prefix = params.prefix
    }

    getPlugin() {
        return plugin(({ addUtilities }) => {
            /**
             * Base colors
             */
            addUtilities({
                '.bg-background': {
                    'background-color': `var(--${this.prefix}-background, #f9f9ff)`,
                },
                '.text-background': {
                    'color': `var(--${this.prefix}-background, #f9f9ff)`,
                },
                '.bg-on-background': {
                    'background-color': `var(--${this.prefix}-on-background, #181c25)`,
                },
                '.text-on-background': {
                    'color': `var(--${this.prefix}-on-background, #181c25)`,
                },
                '.bg-surface': {
                    'background-color': `var(--${this.prefix}-surface, #f9f9ff)`,
                },
                '.text-surface': {
                    'color': `var(--${this.prefix}-surface, #f9f9ff)`,
                },
                '.bg-surface-dim': {
                    'background-color': `var(--${this.prefix}-surface-dim, #d7d9e6)`,
                },
                '.text-surface-dim': {
                    'color': `var(--${this.prefix}-surface-dim, #d7d9e6)`,
                },
                '.bg-surface-bright': {
                    'background-color': `var(--${this.prefix}-surface-bright, #f9f9ff)`,
                },
                '.text-surface-bright': {
                    'color': `var(--${this.prefix}-surface-bright, #f9f9ff)`,
                },
                '.bg-on-surface': {
                    'background-color': `var(--${this.prefix}-on-surface, #181c25)`,
                },
                '.text-on-surface': {
                    'color': `var(--${this.prefix}-on-surface, #181c25)`,
                },
                '.bg-surface-variant': {
                    'background-color': `var(--${this.prefix}-surface-variant, #dee2f2)`,
                },
                '.text-surface-variant': {
                    'color': `var(--${this.prefix}-surface-variant, #dee2f2)`,
                },
                '.bg-on-surface-variant': {
                    'background-color': `var(--${this.prefix}-on-surface-variant, #424753)`,
                },
                '.text-on-surface-variant': {
                    'color': `var(--${this.prefix}-on-surface-variant, #424753)`,
                },
                '.bg-inverse-surface': {
                    'background-color': `var(--${this.prefix}-inverse-surface, #2c303a)`,
                },
                '.text-inverse-surface': {
                    'color': `var(--${this.prefix}-inverse-surface, #2c303a)`,
                },
                '.bg-inverse-on-surface': {
                    'background-color': `var(--${this.prefix}-inverse-on-surface, #eef0fd)`,
                },
                '.text-inverse-on-surface': {
                    'color': `var(--${this.prefix}-inverse-on-surface, #eef0fd)`,
                },
                '.bg-scrim': {
                    'background-color': `var(--${this.prefix}-scrim, #000000)`,
                },
                '.text-scrim': {
                    'color': `var(--${this.prefix}-scrim, #000000)`,
                },
                '.bg-surface-tint': {
                    'background-color': `var(--${this.prefix}-surface-tint, #005ac1)`,
                },
                '.text-surface-tint': {
                    'color': `var(--${this.prefix}-surface-tint, #005ac1)`,
                },
                '.bg-primary': {
                    'background-color': `var(--${this.prefix}-primary, #005ac1)`,
                },
                '.text-primary': {
                    'color': `var(--${this.prefix}-primary, #005ac1)`,
                },
                '.bg-on-primary': {
                    'background-color': `var(--${this.prefix}-on-primary, #ffffff)`,
                },
                '.text-on-primary': {
                    'color': `var(--${this.prefix}-on-primary, #ffffff)`,
                },
                '.bg-primary-container': {
                    'background-color': `var(--${this.prefix}-primary-container, #d8e2ff)`,
                },
                '.text-primary-container': {
                    'color': `var(--${this.prefix}-primary-container, #d8e2ff)`,
                },
                '.bg-on-primary-container': {
                    'background-color': `var(--${this.prefix}-on-primary-container, #001a41)`,
                },
                '.text-on-primary-container': {
                    'color': `var(--${this.prefix}-on-primary-container, #001a41)`,
                },
                '.bg-inverse-primary': {
                    'background-color': `var(--${this.prefix}-inverse-primary, #adc6ff)`,
                },
                '.text-inverse-primary': {
                    'color': `var(--${this.prefix}-inverse-primary, #adc6ff)`,
                },
                '.bg-secondary': {
                    'background-color': `var(--${this.prefix}-secondary, #595c7e)`,
                },
                '.text-secondary': {
                    'color': `var(--${this.prefix}-secondary, #595c7e)`,
                },
                '.bg-on-secondary': {
                    'background-color': `var(--${this.prefix}-on-secondary, #ffffff)`,
                },
                '.text-on-secondary': {
                    'color': `var(--${this.prefix}-on-secondary, #ffffff)`,
                },
                '.bg-secondary-container': {
                    'background-color': `var(--${this.prefix}-secondary-container, #dfe0ff)`,
                },
                '.text-secondary-container': {
                    'color': `var(--${this.prefix}-secondary-container, #dfe0ff)`,
                },
                '.bg-on-secondary-container': {
                    'background-color': `var(--${this.prefix}-on-secondary-container, #151937)`,
                },
                '.text-on-secondary-container': {
                    'color': `var(--${this.prefix}-on-secondary-container, #151937)`,
                },
                '.bg-tertiary': {
                    'background-color': `var(--${this.prefix}-tertiary, #625789)`,
                },
                '.text-tertiary': {
                    'color': `var(--${this.prefix}-tertiary, #625789)`,
                },
                '.bg-on-tertiary': {
                    'background-color': `var(--${this.prefix}-on-tertiary, #ffffff)`,
                },
                '.text-on-tertiary': {
                    'color': `var(--${this.prefix}-on-tertiary, #ffffff)`,
                },
                '.bg-tertiary-container': {
                    'background-color': `var(--${this.prefix}-tertiary-container, #e7deff)`,
                },
                '.text-tertiary-container': {
                    'color': `var(--${this.prefix}-tertiary-container, #e7deff)`,
                },
                '.bg-on-tertiary-container': {
                    'background-color': `var(--${this.prefix}-on-tertiary-container, #1e1341)`,
                },
                '.text-on-tertiary-container': {
                    'color': `var(--${this.prefix}-on-tertiary-container, #1e1341)`,
                },
                '.bg-error': {
                    'background-color': `var(--${this.prefix}-error, #ba1a1a)`,
                },
                '.text-error': {
                    'color': `var(--${this.prefix}-error, #ba1a1a)`,
                },
                '.bg-on-error': {
                    'background-color': `var(--${this.prefix}-on-error, #ffffff)`,
                },
                '.text-on-error': {
                    'color': `var(--${this.prefix}-on-error, #ffffff)`,
                },
                '.bg-error-container': {
                    'background-color': `var(--${this.prefix}-error-container, #ffdad6)`,
                },
                '.text-error-container': {
                    'color': `var(--${this.prefix}-error-container, #ffdad6)`,
                },
                '.bg-on-error-container': {
                    'background-color': `var(--${this.prefix}-on-error-container, #410002)`,
                },
                '.text-on-error-container': {
                    'color': `var(--${this.prefix}-on-error-container, #410002)`,
                },
                '.bg-outline': {
                    'background-color': `var(--${this.prefix}-outline, #727785)`,
                },
                '.text-outline': {
                    'color': `var(--${this.prefix}-outline, #727785)`,
                },
                '.bg-outline-variant': {
                    'background-color': `var(--${this.prefix}-outline-variant, #c2c6d6)`,
                },
                '.text-outline-variant': {
                    'color': `var(--${this.prefix}-outline-variant, #c2c6d6)`,
                },
                '.bg-shadow': {
                    'background-color': `var(--${this.prefix}-shadow, #000000)`,
                },
                '.text-shadow': {
                    'color': `var(--${this.prefix}-shadow, #000000)`,
                },
            })

            /**
             * Border color
             */
            addUtilities({
                '.border-outline': {
                    'border-color': `var(--${this.prefix}-outline, #727785)`,
                },
                '.border-outline-variant': {
                    'border-color': `var(--${this.prefix}-outline-variant, #c2c6d6)`,
                },
            })

            /**
             * Containers, background-color only.
             */
            addUtilities({
                '.bg-surface-container-lowest': {
                    'background-color': `var(--${this.prefix}-surface-container-lowest, #ffffff)`,
                },
                '.bg-surface-container-low': {
                    'background-color': `var(--${this.prefix}-surface-container-low, #f1f3ff)`,
                },
                '.bg-surface-container': {
                    'background-color': `var(--${this.prefix}-surface-container, #ebedfa)`,
                },
                '.bg-surface-container-high': {
                    'background-color': `var(--${this.prefix}-surface-container-high, #e5e8f5)`,
                },
                '.bg-surface-container-highest': {
                    'background-color': `var(--${this.prefix}-surface-container-highest, #dfe2ef)`,
                },
            })

            /**
             * Fixed colors
             */
            addUtilities({
                '.bg-primary-fixed': {
                    'background-color': `var(--${this.prefix}-primary-fixed, #d8e2ff)`,
                },
                '.text-primary-fixed': {
                    'color': `var(--${this.prefix}-primary-fixed, #d8e2ff)`,
                },
                '.bg-primary-fixed-dim': {
                    'background-color': `var(--${this.prefix}-primary-fixed-dim, #adc6ff)`,
                },
                '.text-primary-fixed-dim': {
                    'color': `var(--${this.prefix}-primary-fixed-dim, #adc6ff)`,
                },
                '.bg-on-primary-fixed': {
                    'background-color': `var(--${this.prefix}-on-primary-fixed, #001a41)`,
                },
                '.text-on-primary-fixed': {
                    'color': `var(--${this.prefix}-on-primary-fixed, #001a41)`,
                },
                '.bg-on-primary-fixed-variant': {
                    'background-color': `var(--${this.prefix}-on-primary-fixed-variant, #004494)`,
                },
                '.text-on-primary-fixed-variant': {
                    'color': `var(--${this.prefix}-on-primary-fixed-variant, #004494)`,
                },
                '.bg-secondary-fixed': {
                    'background-color': `var(--${this.prefix}-secondary-fixed, #dfe0ff)`,
                },
                '.text-secondary-fixed': {
                    'color': `var(--${this.prefix}-secondary-fixed, #dfe0ff)`,
                },
                '.bg-secondary-fixed-dim': {
                    'background-color': `var(--${this.prefix}-secondary-fixed-dim, #c1c4eb)`,
                },
                '.text-secondary-fixed-dim': {
                    'color': `var(--${this.prefix}-secondary-fixed-dim, #c1c4eb)`,
                },
                '.bg-on-secondary-fixed': {
                    'background-color': `var(--${this.prefix}-on-secondary-fixed, #151937)`,
                },
                '.text-on-secondary-fixed': {
                    'color': `var(--${this.prefix}-on-secondary-fixed, #151937)`,
                },
                '.bg-on-secondary-fixed-variant': {
                    'background-color': `var(--${this.prefix}-on-secondary-fixed-variant, #414465)`,
                },
                '.text-on-secondary-fixed-variant': {
                    'color': `var(--${this.prefix}-on-secondary-fixed-variant, #414465)`,
                },
                '.bg-tertiary-fixed': {
                    'background-color': `var(--${this.prefix}-tertiary-fixed, #e7deff)`,
                },
                '.text-tertiary-fixed': {
                    'color': `var(--${this.prefix}-tertiary-fixed, #e7deff)`,
                },
                '.bg-tertiary-fixed-dim': {
                    'background-color': `var(--${this.prefix}-tertiary-fixed-dim, #ccbff8)`,
                },
                '.text-tertiary-fixed-dim': {
                    'color': `var(--${this.prefix}-tertiary-fixed-dim, #ccbff8)`,
                },
                '.bg-on-tertiary-fixed': {
                    'background-color': `var(--${this.prefix}-on-tertiary-fixed, #1e1341)`,
                },
                '.text-on-tertiary-fixed': {
                    'color': `var(--${this.prefix}-on-tertiary-fixed, #1e1341)`,
                },
                '.bg-on-tertiary-fixed-variant': {
                    'background-color': `var(--${this.prefix}-on-tertiary-fixed-variant, #4a4070)`,
                },
                '.text-on-tertiary-fixed-variant': {
                    'color': `var(--${this.prefix}-on-tertiary-fixed-variant, #4a4070)`,
                },
            })

            /**
             * Key colors
             */
            addUtilities({
                '.bg-primary-palette-key-color': {
                    'background-color': `var(--${this.prefix}-primary-palette-key-color, #047aff)`,
                },
                '.text-primary-palette-key-color': {
                    'color': `var(--${this.prefix}-primary-palette-key-color, #047aff)`,
                },
                '.bg-secondary-palette-key-color': {
                    'background-color': `var(--${this.prefix}-secondary-palette-key-color, #727598)`,
                },
                '.text-secondary-palette-key-color': {
                    'color': `var(--${this.prefix}-secondary-palette-key-color, #727598)`,
                },
                '.bg-tertiary-palette-key-color': {
                    'background-color': `var(--${this.prefix}-tertiary-palette-key-color, #7b70a3)`,
                },
                '.text-tertiary-palette-key-color': {
                    'color': `var(--${this.prefix}-tertiary-palette-key-color, #7b70a3)`,
                },
                '.bg-neutral-palette-key-color': {
                    'background-color': `var(--${this.prefix}-neutral-palette-key-color, #737782)`,
                },
                '.text-neutral-palette-key-color': {
                    'color': `var(--${this.prefix}-neutral-palette-key-color, #737782)`,
                },
                '.bg-neutral-variant-palette-key-color': {
                    'background-color': `var(--${this.prefix}-neutral-variant-palette-key-color, #727785)`,
                },
                '.text-neutral-variant-palette-key-color': {
                    'color': `var(--${this.prefix}-neutral-variant-palette-key-color, #727785)`,
                },
            })
        })
    }

}

/**
 * @example
 * ```typescript
 * const color = provideColor()
 * 
 * export default {
 *     plugins: [
 *         color.getPlugin()
 *     ]
 * }
 * ```
 */
export const provideColor = (params: TColorProviderConstructor = {
    prefix: 'md-sys-color'
}) => new ColorProvider(params)
