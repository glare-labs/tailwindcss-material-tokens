import plugin from "tailwindcss/plugin";
import type { IProvider } from "../../declaration/provider.interface";
import { Tokens } from "../../declaration/token.interface";
import { Strings } from "../../utils/strings";
import { Validates } from "../../utils/validates";

export type TElevationProviderConstructorParams = {

    /**
     * @description
     * The shadows are divided into three layers.
     * Normally, keep the default.
     * 
     * @example
     * ```typescript
     * const color = provideElevation({
     *     shadowColorCssVariable: {
     *         layer1: 'red',
     *         layer2: 'green',
     *         layer3: 'yellow'
     *     }
     * })
     * ```
     */
    readonly shadowColorCssVariable: Partial<{
        layer1: string
        layer2: string
        layer3: string
    }>

    /**
     * @description
     * Variables used to control the internal use of shadow.
     * Note that this option is usually used together with [prefix].
     * 
     * @default 'md-sys-color'
     * 
     * @example If the value of prefix is 'your-prefix'.
     * ```css
     * .elevation-1 {
     *     box-shadow: var(--md-sys-elevation-level-1, var(--your-prefix-shadow, rgba(0, 0, 0, 0.2)) 0px 2px 1px -1px, var(--your-prefix-shadow, rgba(0, 0, 0, 0.14)) 0px 1px 1px 0px, var(--your-prefix-shadow, rgba(0, 0, 0, 0.12)) 0px 1px 3px 0px);
     * }
     * ```
     */
    readonly shadowColorTokenPrefix: string

    /**
     * @description
     * For managed or public CSS variables.
     * Note that this option is usually used together with [shadowColorTokenPrefix].
     * 
     * @default 'md-sys-elevation'
     * 
     * @example If the value of prefix is 'your-prefix'.
     * ```css
     * .elevation-1 {
     *     box-shadow: var(--your-prefix-level-1, var(--md-sys-color-shadow, rgba(0, 0, 0, 0.2)) 0px 2px 1px -1px, var(--md-sys-color-shadow, rgba(0, 0, 0, 0.14)) 0px 1px 1px 0px, var(--md-sys-color-shadow, rgba(0, 0, 0, 0.12)) 0px 1px 3px 0px);
     * }
     * ```
     */
    readonly classNamePrefix: string

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
     * const color = provideElevation({
     *     customTokens: {
     *         // .elevation-1 { box-shadow: red 0px 5px 10px 10px; }
     *         'level1': 'red 0px 5px 10px 10px'
     *     },
     * })
     * ```
     */
    readonly customTokens: IElevation | Record<string, string>

    /**
     * @description
     * When set to true, each token contains a default value.
     * 
     * @default true
     * 
     * @example
     * ```typescript
     * const color = provideElevation({
     *     // .elevation-1 { box-shadow: var(--md-sys-elevation-level-1, var(--md-sys-color-shadow, rgba(0, 0, 0, 0.2)) 0px 2px 1px -1px, var(--md-sys-color-shadow, rgba(0, 0, 0, 0.14)) 0px 1px 1px 0px, var(--md-sys-color-shadow, rgba(0, 0, 0, 0.12)) 0px 1px 3px 0px); }
     *     hardcodeDefaultValue: true,
     * 
     *     // .elevation-1 { box-shadow: var(--md-sys-elevation-level-1, ); }
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
     * const color = provideElevation({
     *     excludedTokens: [
     *         // remove .elevation-5
     *         'level5',
     *     ],
     * })
     * ```
     */
    readonly excludedTokens: Array<(keyof IElevation) | {}>
}

export interface IElevation {
    readonly levelNone: string
    readonly level1: string
    readonly level2: string
    readonly level3: string
    readonly level4: string
    readonly level5: string
}

class DefaultElevationTokens extends Tokens<IElevation> {
    protected readonly levelNone = 'none'
    protected readonly level1
    protected readonly level2
    protected readonly level3
    protected readonly level4
    protected readonly level5

    constructor(shadowColorCssVariableLayer1: string, shadowColorCssVariableLayer2: string, shadowColorCssVariableLayer3: string) {
        super()
        this.level1 = `${shadowColorCssVariableLayer1} 0px 2px 1px -1px, ${shadowColorCssVariableLayer2} 0px 1px 1px 0px, ${shadowColorCssVariableLayer3} 0px 1px 3px 0px`
        this.level2 = `${shadowColorCssVariableLayer1} 0px 3px 3px -2px, ${shadowColorCssVariableLayer2} 0px 3px 4px 0px, ${shadowColorCssVariableLayer3} 0px 1px 8px 0px`
        this.level3 = `${shadowColorCssVariableLayer1} 0px 3px 5px -1px, ${shadowColorCssVariableLayer2} 0px 6px 10px 0px, ${shadowColorCssVariableLayer3} 0px 1px 18px 0px`
        this.level4 = `${shadowColorCssVariableLayer1} 0px 5px 5px -3px, ${shadowColorCssVariableLayer2} 0px 8px 10px 1px, ${shadowColorCssVariableLayer3} 0px 3px 14px 2px`
        this.level5 = `${shadowColorCssVariableLayer1} 0px 7px 8px -4px, ${shadowColorCssVariableLayer2} 0px 12px 17px 2px, ${shadowColorCssVariableLayer3} 0px 5px 22px 4px`
    }
    public get values() {
        return {
            levelNone: this.levelNone,
            level1: this.level1,
            level2: this.level2,
            level3: this.level3,
            level4: this.level4,
            level5: this.level5,
        }
    }
}

export class ElevationProvider extends DefaultElevationTokens implements IProvider {
    public readonly classNamePrefix
    public readonly cssVariableTokenPrefix
    public readonly hardcodeDefaultValue
    public readonly excludedTokens
    public readonly tokens
    public readonly customTokens

    constructor(params: Partial<TElevationProviderConstructorParams>) {
        const shadowColorCssVariableLayer1 = params.shadowColorCssVariable?.layer1 ?? `var(--${params.shadowColorTokenPrefix ?? 'md-sys-color'}-shadow, rgba(0, 0, 0, 0.2))`
        const shadowColorCssVariableLayer2 = params.shadowColorCssVariable?.layer2 ?? `var(--${params.shadowColorTokenPrefix ?? 'md-sys-color'}-shadow, rgba(0, 0, 0, 0.14))`
        const shadowColorCssVariableLayer3 = params.shadowColorCssVariable?.layer3 ?? `var(--${params.shadowColorTokenPrefix ?? 'md-sys-color'}-shadow, rgba(0, 0, 0, 0.12))`
        super(shadowColorCssVariableLayer1, shadowColorCssVariableLayer2, shadowColorCssVariableLayer3)

        this.classNamePrefix = params.classNamePrefix ?? ''
        this.cssVariableTokenPrefix = params.cssVariableTokenPrefix ?? 'md-sys-elevation'
        this.hardcodeDefaultValue = params.hardcodeDefaultValue ?? true
        this.excludedTokens = params.excludedTokens ?? []
        this.customTokens = params.customTokens ?? {}
        this.tokens = Validates.validate(this.customTokens as Record<string, string>, this.values, this.excludedTokens)
    }

    protected transformTokensToCssRuleObject(classNamePrefix: string, cssVariableTokenPrefix: string, tokens: Record<string, string>, hardcodeDefaultValue: boolean) {
        const cssPropertyComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${cssVariableTokenPrefix}-${Strings.toKebabCase(name)}, ${hardcodeDefaultValue ? value : ''})` : `${value}`

        return Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => Validates.className(['elevation', classNamePrefix, name], {
                preProcessingCallback: (before) => before.replace('level', ''),
            }),
            (name, value) => ({
                'box-shadow': cssPropertyComputed(name, value)
            })
        )
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
