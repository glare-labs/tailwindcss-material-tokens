import plugin from "tailwindcss/plugin"
import type { IProvider } from "../../declaration/provider.interface"
import { Tokens } from "../../declaration/token.interface"
import { Strings } from "../../utils/strings"
import { Validates } from "../../utils/validates"

export type TBorderProviderConstructorParams = {

    /**
     * @description
     * For managed or public CSS variables.
     * 
     * @default 'md-sys-color'
     * 
     * @example If the value of prefix is 'your-prefix'.
     * ```css
     * .border-outline {
     *     border-color: var(--your-prefix-outline, #727785);
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
    * const color = provideBorder({
    *     customTokens: {
    *         // .border-outline { border-color: red; }
    *         'outline': 'red'
    *     },
    * })
    * ```
    */
    readonly customTokens: IBorderTokens | Record<string, string>

    /**
     * @description
     * When set to true, each token contains a default value.
     * 
     * @default true
     * 
     * @example
     * ```typescript
     * const color = provideBorder({
     *     // .border-outline { border-color: var(--md-sys-color-outline, #727785); }
     *     hardcodeDefaultValue: true,
     * 
     *     // .border-outline { border-color: var(--md-sys-color-outline, ); }
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
     * const color = provideBorder({
     *     excludedTokens: [
     *         // remove .border-outline-variant and .outline-outline-variant
     *         'outlineVariant',
     *     ],
     * })
     * ```
     */
    readonly excludedTokens: Array<keyof IBorderTokens | {}>

}

export interface IBorderTokens {
    readonly outline: string
    readonly outlineVariant: string
}

class DefaultBorderTokens extends Tokens<IBorderTokens> {
    protected outline = '#727785'
    protected outlineVariant = '#c2c6d6'

    public get values() {
        return {
            outline: this.outline,
            outlineVariant: this.outlineVariant,
        }
    }
}

export class BorderProvider extends DefaultBorderTokens implements IProvider {
    private readonly cssVariableTokenPrefix
    private readonly classNamePrefix
    private readonly tokens
    private readonly customTokens
    private readonly excludedTokens
    private readonly hardcodeDefaultValue

    constructor(params: Partial<TBorderProviderConstructorParams>) {
        super()
        this.classNamePrefix = params.classNamePrefix ?? ''
        this.cssVariableTokenPrefix = params.cssVariableTokenPrefix ?? 'md-sys-color'
        this.hardcodeDefaultValue = params.hardcodeDefaultValue ?? true
        this.customTokens = params.customTokens ?? {}
        this.excludedTokens = params.excludedTokens ?? []
        this.tokens = Validates.validate(this.customTokens as Record<string, string>, this.values, this.excludedTokens)
    }

    protected transformTokensToCssRuleObject(classNamePrefix: string, cssVariableTokenPrefix: string, tokens: Record<string, string>, hardcodeDefaultValue: boolean) {
        const cssPropertyComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${cssVariableTokenPrefix}-${Strings.toKebabCase(name)}, ${hardcodeDefaultValue ? value : ''})` : `${value}`

        const borderTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => Validates.className(['border', classNamePrefix, name]),
            (name, value) => ({
                'border-color': cssPropertyComputed(name, value)
            })
        )
        const outlineTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => Validates.className(['outline', classNamePrefix, name]),
            (name, value) => ({
                'outline-color': cssPropertyComputed(name, value)
            })
        )
        return Object.assign({}, borderTokens, outlineTokens)
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
