import plugin from "tailwindcss/plugin"
import type { IProvider } from "../../declaration/provider.interface"
import { Tokens } from "../../declaration/token.interface"
import { Strings } from "../../utils/strings"
import { Validates } from "../../utils/validates"

export type TColorProviderConstructorParams = {
    /**
     * @description
     * For managed or public CSS variables.
     * 
     * @default 'md-sys-color'
     * 
     * @example If the value of cssVariableTokenPrefix is 'your-prefix'.
     * ```css
     * .text-on-surface {
     *     color: var(--your-prefix-on-surface, #181c25);
     * }
     * ```
     */
    readonly cssVariableTokenPrefix: string

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
    readonly customTokens: IColorTokens | Record<string, string>

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
    readonly excludedTokens: Array<(keyof IColorTokens) | {}>

    /**
     * @default ''
     */
    readonly classNamePrefix: string
}

export interface IColorTokens {
    readonly primaryPaletteKeyColor: string
    readonly secondaryPaletteKeyColor: string
    readonly tertiaryPaletteKeyColor: string
    readonly neutralPaletteKeyColor: string
    readonly neutralVariantPaletteKeyColor: string
    readonly background: string
    readonly onBackground: string
    readonly surface: string
    readonly surfaceDim: string
    readonly surfaceBright: string
    readonly surfaceContainerLowest: string
    readonly surfaceContainerLow: string
    readonly surfaceContainer: string
    readonly surfaceContainerHigh: string
    readonly surfaceContainerHighest: string
    readonly onSurface: string
    readonly surfaceVariant: string
    readonly onSurfaceVariant: string
    readonly inverseSurface: string
    readonly inverseOnSurface: string
    readonly outline: string
    readonly outlineVariant: string
    readonly shadow: string
    readonly scrim: string
    readonly surfaceTint: string
    readonly primary: string
    readonly onPrimary: string
    readonly primaryContainer: string
    readonly onPrimaryContainer: string
    readonly inversePrimary: string
    readonly secondary: string
    readonly onSecondary: string
    readonly secondaryContainer: string
    readonly onSecondaryContainer: string
    readonly tertiary: string
    readonly onTertiary: string
    readonly tertiaryContainer: string
    readonly onTertiaryContainer: string
    readonly error: string
    readonly onError: string
    readonly errorContainer: string
    readonly onErrorContainer: string
    readonly primaryFixed: string
    readonly primaryFixedDim: string
    readonly onPrimaryFixed: string
    readonly onPrimaryFixedVariant: string
    readonly secondaryFixed: string
    readonly secondaryFixedDim: string
    readonly onSecondaryFixed: string
    readonly onSecondaryFixedVariant: string
    readonly tertiaryFixed: string
    readonly tertiaryFixedDim: string
    readonly onTertiaryFixed: string
    readonly onTertiaryFixedVariant: string
}

class DefaultColorTokens extends Tokens<IColorTokens> {
    /**
     * Key colors
     */
    protected readonly primaryPaletteKeyColor = '#047aff'
    protected readonly secondaryPaletteKeyColor = '#727598'
    protected readonly tertiaryPaletteKeyColor = '#7b70a3'
    protected readonly neutralPaletteKeyColor = '#737782'
    protected readonly neutralVariantPaletteKeyColor = '#727785'

    /**
     * Base colors
     */
    protected readonly background = '#f9f9ff'
    protected readonly onBackground = '#181c25'
    protected readonly surface = '#f9f9ff'
    protected readonly surfaceDim = '#d7d9e6'
    protected readonly surfaceBright = '#f9f9ff'
    protected readonly surfaceContainerLowest = '#ffffff'
    protected readonly surfaceContainerLow = '#f1f3ff'
    protected readonly surfaceContainer = '#ebedfa'
    protected readonly surfaceContainerHigh = '#e5e8f5'
    protected readonly surfaceContainerHighest = '#dfe2ef'
    protected readonly onSurface = '#181c25'
    protected readonly surfaceVariant = '#dee2f2'
    protected readonly onSurfaceVariant = '#424753'
    protected readonly inverseSurface = '#2c303a'
    protected readonly inverseOnSurface = '#eef0fd'
    protected readonly shadow = '#000000'
    protected readonly scrim = '#000000'
    protected readonly surfaceTint = '#005ac1'
    protected readonly primary = '#005ac1'
    protected readonly onPrimary = '#ffffff'
    protected readonly primaryContainer = '#d8e2ff'
    protected readonly onPrimaryContainer = '#001a41'
    protected readonly inversePrimary = '#adc6ff'
    protected readonly secondary = '#595c7e'
    protected readonly onSecondary = '#ffffff'
    protected readonly secondaryContainer = '#dfe0ff'
    protected readonly onSecondaryContainer = '#151937'
    protected readonly tertiary = '#625789'
    protected readonly onTertiary = '#ffffff'
    protected readonly tertiaryContainer = '#e7deff'
    protected readonly onTertiaryContainer = '#1e1341'
    protected readonly error = '#ba1a1a'
    protected readonly onError = '#ffffff'
    protected readonly errorContainer = '#ffdad6'
    protected readonly onErrorContainer = '#410002'

    /**
     * Border as bg/text
     */
    protected readonly outline = '#727785'
    protected readonly outlineVariant = '#c2c6d6'

    /**
     * Fixed colors
     */
    protected readonly primaryFixed = '#d8e2ff'
    protected readonly primaryFixedDim = '#adc6ff'
    protected readonly onPrimaryFixed = '#001a41'
    protected readonly onPrimaryFixedVariant = '#004494'
    protected readonly secondaryFixed = '#dfe0ff'
    protected readonly secondaryFixedDim = '#c1c4eb'
    protected readonly onSecondaryFixed = '#151937'
    protected readonly onSecondaryFixedVariant = '#414465'
    protected readonly tertiaryFixed = '#e7deff'
    protected readonly tertiaryFixedDim = '#ccbff8'
    protected readonly onTertiaryFixed = '#1e1341'
    protected readonly onTertiaryFixedVariant = '#4a4070'

    public get values() {
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

export class ColorProvider extends DefaultColorTokens implements IProvider {
    private readonly tokens
    private readonly hardcodeDefaultValue
    private readonly excludedTokens
    private readonly customTokens
    private readonly cssVariableTokenPrefix
    private readonly classNamePrefix

    constructor(params: Partial<TColorProviderConstructorParams>) {
        super()
        this.cssVariableTokenPrefix = params.cssVariableTokenPrefix ?? 'md-sys-color'
        this.classNamePrefix = params.classNamePrefix ?? ''
        this.hardcodeDefaultValue = params.hardcodeDefaultValue ?? true
        this.excludedTokens = params.excludedTokens ?? []
        this.customTokens = params.customTokens ?? {}
        this.tokens = Validates.validate((this.customTokens) as Record<string, string>, this.values, this.excludedTokens)
    }

    protected transformTokensToCssRuleObject(classNamePrefix: string, cssVariableTokenPrefix: string, tokens: Record<string, string>, hardcodeDefaultValue: boolean) {
        const cssPropertyComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${cssVariableTokenPrefix}-${Strings.toKebabCase(name)}, ${hardcodeDefaultValue ? value : ''})` : `${value}`

        const textTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => Validates.className([`.text`, classNamePrefix, name], {}),
            (name, value) => ({
                'color': cssPropertyComputed(name, value)
            })
        )
        const bgTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => Validates.className([`.bg`, classNamePrefix, name], {}),
            (name, value) => ({
                'background-color': cssPropertyComputed(name, value)
            })
        )
        return Object.assign({}, textTokens, bgTokens)
    }

    public get cssString() {
        return this.transformTokensToCssRuleObject(this.classNamePrefix, this.cssVariableTokenPrefix, this.tokens, this.hardcodeDefaultValue)
    }

    public getPlugin() {
        return plugin(({ addUtilities }) => {
            addUtilities(this.cssString)
        })
    }

}

