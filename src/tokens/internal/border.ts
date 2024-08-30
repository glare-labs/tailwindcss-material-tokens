import plugin from "tailwindcss/plugin"
import type { IProvider } from "../../declaration/provider.interface"
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
    readonly excludedTokens: Array<(keyof IBorderTokens) | {}>

}

interface IBorderTokens {
    outline: string
    outlineVariant: string
}

class DefaultBorderTokens implements IBorderTokens {
    /**
     * Colors
     */
    outline = '#727785'
    outlineVariant = '#c2c6d6'

    public get defaultTokenRecord() {
        return {
            outline: this.outline,
            outlineVariant: this.outlineVariant,
        }
    }
}

export class BorderProvider extends DefaultBorderTokens implements IProvider {
    private prefix
    private tokens
    private customTokens
    private excludedTokens
    private hardcodeDefaultValue

    constructor(params: Partial<TBorderProviderConstructorParams>) {
        super()
        this.prefix = params.prefix ?? 'md-sys-color'
        this.hardcodeDefaultValue = params.hardcodeDefaultValue ?? true
        this.customTokens = params.customTokens ?? {}
        this.excludedTokens = params.excludedTokens ?? []
        this.tokens = this.validate([this.customTokens as Record<string, string>, this.defaultTokenRecord, this.excludedTokens])
    }

    private validate(params: Parameters<typeof Validates.validate>) {
        return Validates.validate(...params)
    }

    protected transformTokensToCssRuleObject(prefix: string, tokens: Record<string, string>, hardcodeDefaultValue: boolean) {
        const cssPropertyComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${prefix}-${Strings.toKebabCase(name)}, ${hardcodeDefaultValue ? value : ''})` : `${value}`

        const borderTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => `.border-${Strings.toKebabCase(name)}`,
            (name, value) => ({
                'border-color': cssPropertyComputed(name, value)
            })
        )
        const outlineTokens = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => `.outline-${Strings.toKebabCase(name)}`,
            (name, value) => ({
                'outline-color': cssPropertyComputed(name, value)
            })
        )
        return Object.assign({}, borderTokens, outlineTokens)
    }

    getPlugin() {
        const tokens = this.transformTokensToCssRuleObject(this.prefix, this.tokens, this.hardcodeDefaultValue)
        return plugin(({ addUtilities }) => {
            addUtilities(tokens)
        })
    }

}
