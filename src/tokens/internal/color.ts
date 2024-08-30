import plugin from "tailwindcss/plugin"
import type { IMaterialDesignThemeTokens } from "../../declaration/material-design-theme-token.interface"
import type { IProvider } from "../../declaration/provider.interface"
import { Strings } from "../../utils/strings"
import { Validates } from "../../utils/validates"

export type TColorProviderConstructorParams = {
    /**
     * @description
     * For managed or public CSS variables.
     * 
     * @default 'md-sys-color'
     * 
     * @example If the value of prefix is 'your-prefix'.
     * ```css
     * .text-on-surface {
     *     color: var(--your-prefix-on-surface, #181c25);
     * }
     * ```
     */
    readonly prefix: string

    /**
     * @description
     * This option can customize the CSS value corresponding to certain tokens.
     * Note that this option ignores [hardcodeDefaultValue] and [prefix].
     * 
     * @default []
     * 
     * @example
     * ```typescript
     * const color = provideColor({
     *     customTokens: {
     *         // .bg-background { background-color: red; }
     *         // .text-background { color: red; }
     *         background: 'red',
     *         // .bg-background { background-color: var(--my-color-surface, green); }
     *         // .text-background { color: var(--my-color-surface, green); }
     *         surface: 'var(--my-color-surface, green)'
     *     },
     * })
     * ```
     */
    readonly customTokens: IMaterialDesignThemeTokens | Record<string, string>

    /**
     * @description
     * When set to true, each token contains a default value.
     * 
     * @default true
     * 
     * @example
     * ```typescript
     * const color = provideColor({
     *     // .text-on-surface { color: var(--md-sys-color-on-surface, #181c25) }
     *     hardcodeDefaultValue: true,
     * 
     *     // .text-on-surface { color: var(--md-sys-color-on-surface) }
     *     hardcodeDefaultValue: false,
     * })
     * ```
     */
    readonly hardcodeDefaultValue: boolean

    /**
     * @description
     * Exclude some unnecessary tokens.
     * 
     * @default []
     * 
     * @example
     * ```typescript
     * const color = provideColor({
     *     excludedTokens: [
     *         // remove .bg-background and .text-background
     *         'background',
     *     ],
     * })
     * ```
     */
    readonly excludedTokens: Array<(keyof IMaterialDesignThemeTokens) | {}>
}

class DefaultMaterialDesignThemeTokens implements IMaterialDesignThemeTokens {
    /**
     * Key colors
     */
    primaryPaletteKeyColor = '#047aff'
    secondaryPaletteKeyColor = '#727598'
    tertiaryPaletteKeyColor = '#7b70a3'
    neutralPaletteKeyColor = '#737782'
    neutralVariantPaletteKeyColor = '#727785'

    /**
     * Base colors
     */
    background = '#f9f9ff'
    onBackground = '#181c25'
    surface = '#f9f9ff'
    surfaceDim = '#d7d9e6'
    surfaceBright = '#f9f9ff'
    surfaceContainerLowest = '#ffffff'
    surfaceContainerLow = '#f1f3ff'
    surfaceContainer = '#ebedfa'
    surfaceContainerHigh = '#e5e8f5'
    surfaceContainerHighest = '#dfe2ef'
    onSurface = '#181c25'
    surfaceVariant = '#dee2f2'
    onSurfaceVariant = '#424753'
    inverseSurface = '#2c303a'
    inverseOnSurface = '#eef0fd'
    shadow = '#000000'
    scrim = '#000000'
    surfaceTint = '#005ac1'
    primary = '#005ac1'
    onPrimary = '#ffffff'
    primaryContainer = '#d8e2ff'
    onPrimaryContainer = '#001a41'
    inversePrimary = '#adc6ff'
    secondary = '#595c7e'
    onSecondary = '#ffffff'
    secondaryContainer = '#dfe0ff'
    onSecondaryContainer = '#151937'
    tertiary = '#625789'
    onTertiary = '#ffffff'
    tertiaryContainer = '#e7deff'
    onTertiaryContainer = '#1e1341'
    error = '#ba1a1a'
    onError = '#ffffff'
    errorContainer = '#ffdad6'
    onErrorContainer = '#410002'

    /**
     * Border as bg/text
     */
    outline = '#727785'
    outlineVariant = '#c2c6d6'

    /**
     * Fixed colors
     */
    primaryFixed = '#d8e2ff'
    primaryFixedDim = '#adc6ff'
    onPrimaryFixed = '#001a41'
    onPrimaryFixedVariant = '#004494'
    secondaryFixed = '#dfe0ff'
    secondaryFixedDim = '#c1c4eb'
    onSecondaryFixed = '#151937'
    onSecondaryFixedVariant = '#414465'
    tertiaryFixed = '#e7deff'
    tertiaryFixedDim = '#ccbff8'
    onTertiaryFixed = '#1e1341'
    onTertiaryFixedVariant = '#4a4070'

    public get defaultTokenRecord() {
        return {
            primaryPaletteKeyColor: this.primaryPaletteKeyColor,
            secondaryPaletteKeyColor: this.secondaryPaletteKeyColor,
            tertiaryPaletteKeyColor: this.tertiaryPaletteKeyColor,
            neutralPaletteKeyColor: this.neutralPaletteKeyColor,
            neutralVariantPaletteKeyColor: this.neutralVariantPaletteKeyColor,
            background: this.background,
            onBackground: this.onBackground,
            surface: this.surface,
            surfaceDim: this.surfaceDim,
            surfaceBright: this.surfaceBright,
            surfaceContainerLowest: this.surfaceContainerLowest,
            surfaceContainerLow: this.surfaceContainerLow,
            surfaceContainer: this.surfaceContainer,
            surfaceContainerHigh: this.surfaceContainerHigh,
            surfaceContainerHighest: this.surfaceContainerHighest,
            onSurface: this.onSurface,
            surfaceVariant: this.surfaceVariant,
            onSurfaceVariant: this.onSurfaceVariant,
            inverseSurface: this.inverseSurface,
            inverseOnSurface: this.inverseOnSurface,
            outline: this.outline,
            outlineVariant: this.outlineVariant,
            shadow: this.shadow,
            scrim: this.scrim,
            surfaceTint: this.surfaceTint,
            primary: this.primary,
            onPrimary: this.onPrimary,
            primaryContainer: this.primaryContainer,
            onPrimaryContainer: this.onPrimaryContainer,
            inversePrimary: this.inversePrimary,
            secondary: this.secondary,
            onSecondary: this.onSecondary,
            secondaryContainer: this.secondaryContainer,
            onSecondaryContainer: this.onSecondaryContainer,
            tertiary: this.tertiary,
            onTertiary: this.onTertiary,
            tertiaryContainer: this.tertiaryContainer,
            onTertiaryContainer: this.onTertiaryContainer,
            error: this.error,
            onError: this.onError,
            errorContainer: this.errorContainer,
            onErrorContainer: this.onErrorContainer,
            primaryFixed: this.primaryFixed,
            primaryFixedDim: this.primaryFixedDim,
            onPrimaryFixed: this.onPrimaryFixed,
            onPrimaryFixedVariant: this.onPrimaryFixedVariant,
            secondaryFixed: this.secondaryFixed,
            secondaryFixedDim: this.secondaryFixedDim,
            onSecondaryFixed: this.onSecondaryFixed,
            onSecondaryFixedVariant: this.onSecondaryFixedVariant,
            tertiaryFixed: this.tertiaryFixed,
            tertiaryFixedDim: this.tertiaryFixedDim,
            onTertiaryFixed: this.onTertiaryFixed,
            onTertiaryFixedVariant: this.onTertiaryFixedVariant,
        }
    }
}

export class ColorProvider extends DefaultMaterialDesignThemeTokens implements IProvider {
    public prefix
    public tokens
    public hardcodeDefaultValue
    public excludedTokens
    public customTokens

    constructor(params: Partial<TColorProviderConstructorParams>) {
        super()
        this.prefix = params.prefix ?? 'md-sys-color'
        this.hardcodeDefaultValue = params.hardcodeDefaultValue ?? true
        this.excludedTokens = params.excludedTokens ?? []
        this.customTokens = params.customTokens ?? {}
        this.tokens = this.validate([(this.customTokens) as Record<string, string>, this.defaultTokenRecord, this.excludedTokens])
    }

    protected validate(params: Parameters<typeof Validates.validate>) {
        return Validates.validate(...params)
    }

    protected transformTokensToCssRuleObject(prefix: string, tokens: Record<string, string>, hardcodeDefaultValue: boolean) {
        const cssPropertyComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${prefix}-${Strings.toKebabCase(name)}, ${hardcodeDefaultValue ? value : ''})` : `${value}`

        const textTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => `.text-${Strings.toKebabCase(name)}`,
            (name, value) => ({
                'color': cssPropertyComputed(name, value)
            })
        )
        const bgTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => `.bg-${Strings.toKebabCase(name)}`,
            (name, value) => ({
                'background-color': cssPropertyComputed(name, value)
            })
        )
        return Object.assign({}, textTokens, bgTokens)
    }

    getPlugin() {
        const tokens = this.transformTokensToCssRuleObject(this.prefix, this.tokens, this.hardcodeDefaultValue)
        return plugin(({ addUtilities }) => {
            addUtilities(tokens)
        })
    }

}

