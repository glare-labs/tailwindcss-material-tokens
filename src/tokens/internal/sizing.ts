import plugin from "tailwindcss/plugin";
import type { IProvider } from "../../declaration/provider.interface";
import { Tokens } from "../../declaration/token.interface";
import { Strings } from "../../utils/strings";
import { Validates } from "../../utils/validates";

export type TSizingProviderConstructorParams = {

    /**
     * @description
     * tokens' prefix.
     * 
     * @default 'md-sys-sizing'
     * 
     * @example If the value of prefix is 'your-prefix'.
     * ```css
     * .w-compact {
     *     width: var(--your-prefix-width-compact, 600px);
     * }
     * ```
     */
    readonly classNamePrefix: string

    readonly cssVariableTokenPrefix: string

    /**
     * @description
     * When set to true, each token contains a default value.
     * 
     * @default true
     * 
     * @example
     * ```typescript
     * const color = provideSizing({
     *     // .w-compact { width: var(--md-sys-sizing-width-compact, 600px); }
     *     hardcodeDefaultValue: true,
     * 
     *     // .w-compact { width: var(--md-sys-sizing-width-compact, ); }
     *     hardcodeDefaultValue: false,
     * })
     * ```
     */
    readonly hardcodeDefaultValue: boolean

    /**
    * @description
    * This option can customize the CSS value corresponding to certain tokens.
    * Note that this option ignores [hardcodeDefaultValue] and [prefix].
    * 
    * @default []
    * 
    * @example
    * ```typescript
    * const color = provideSizing({
    *     customTokens: {
    *         // .w-compact { var(--md-sys-sizing-width-compact, 100px); }
    *         'compact': '100px'
    *     },
    * })
    * ```
    */
    readonly customTokens: Omit<IWindowSizing, 'extraLarge'> | Record<string, string>

    /**
     * @description
     * Exclude some unnecessary tokens.
     * 
     * @default []
     * 
     * @example
     * ```typescript
     * const color = provideSizing({
     *     excludedTokens: [
     *         // remove .w-compact and .max-w-screen-compact
     *         'compact',
     *     ],
     * })
     * ```
     */
    readonly excludedTokens: Array<keyof (Omit<IWindowSizing, 'extraLarge'>) | {}>
}

export interface IWindowSizing {
    readonly compact: string
    readonly medium: string
    readonly expanded: string
    readonly large: string
    readonly extraLarge: string
}

class DefaultSizingTokens extends Tokens<Omit<IWindowSizing, 'extraLarge'>> {
    protected readonly compact = '600px'
    protected readonly medium = '840px'
    protected readonly expanded = '1200px'
    protected readonly large = '1600px'

    /**
     * extraLarge: width >= 1600px
     * @deprecated
     */
    private readonly extraLarge = '1600px'

    public get values() {
        return {
            compact: this.compact,
            medium: this.medium,
            expanded: this.expanded,
            large: this.large
        }
    }
}


export class SizingProvider extends DefaultSizingTokens implements IProvider {
    private readonly classNamePrefix
    private readonly cssVariableTokenPrefix
    private readonly tokens
    private readonly hardcodeDefaultValue
    private readonly excludedTokens
    private readonly customTokens

    constructor(params: Partial<TSizingProviderConstructorParams>) {
        super()
        this.classNamePrefix = params.classNamePrefix ?? ''
        this.cssVariableTokenPrefix = params.cssVariableTokenPrefix ?? 'md-sys-sizing'
        this.hardcodeDefaultValue = params.hardcodeDefaultValue ?? true
        this.excludedTokens = params.excludedTokens ?? []
        this.customTokens = params.customTokens ?? {}
        this.tokens = Validates.validate(this.customTokens, this.values, this.excludedTokens)
    }

    protected transformTokensToCssRuleObject(classNamePrefix: string, cssVariableTokenPrefix: string, tokens: Record<string, string>, hardcodeDefaultValue: boolean) {
        const cssPropertyComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${cssVariableTokenPrefix}-width-${Strings.toKebabCase(name)}, ${hardcodeDefaultValue ? value : ''})` : `${value}`

        const width = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => Validates.className(['.w', classNamePrefix, name]),
            (name, value) => ({
                'width': cssPropertyComputed(name, value)
            })
        )
        const maxWidthScreen = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => Validates.className(['.max-w-screen', classNamePrefix, name]),
            (name, value) => ({
                'max-width': cssPropertyComputed(name, value)
            })
        )
        return Object.assign({}, width, maxWidthScreen)
    }

    public get cssString() {
        return this.transformTokensToCssRuleObject(this.classNamePrefix, this.cssVariableTokenPrefix, this.tokens, this.hardcodeDefaultValue)
    }

    getPlugin() {
        return plugin(({ addUtilities }) => {
            addUtilities(this.cssString)
        })
    }

}
