import plugin from "tailwindcss/plugin";
import type { IProvider } from "../../declaration/provider.interface";
import type { IWindowSizing } from "../../declaration/window-sizing.interface";
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
    readonly prefix: string

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

abstract class DefaultWindowSizing implements IWindowSizing {
    compact = '600px'
    medium = '840px'
    expanded = '1200px'
    large = '1600px'

    /**
     * extraLarge: width >= 1600px
     * @deprecated
     */
    extraLarge = '1600px'
}

class DefaultSizingTokens extends DefaultWindowSizing {
    public get defaultTokensRecord() {
        return {
            compact: this.compact,
            medium: this.medium,
            expanded: this.expanded,
            large: this.large
        }
    }
}

export class SizingProvider extends DefaultSizingTokens implements IProvider {
    public prefix
    public tokens
    public hardcodeDefaultValue
    public excludedTokens
    public customTokens

    constructor(params: Partial<TSizingProviderConstructorParams>) {
        super()
        this.prefix = params.prefix ?? 'md-sys-sizing'
        this.hardcodeDefaultValue = params.hardcodeDefaultValue ?? true
        this.excludedTokens = params.excludedTokens ?? []
        this.customTokens = params.customTokens ?? {}
        this.tokens = this.validate([this.customTokens, this.defaultTokensRecord, this.excludedTokens])
    }

    private validate(params: Parameters<typeof Validates.validate>) {
        return Validates.validate(...params)
    }

    protected transformTokensToCssRuleObject(prefix: string, tokens: Record<string, string>, hardcodeDefaultValue: boolean) {
        const cssPropertyComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${prefix}-width-${Strings.toKebabCase(name)}, ${hardcodeDefaultValue ? value : ''})` : `${value}`

        const width = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => `.w-${Strings.toKebabCase(name)}`,
            (name, value) => ({
                'width': cssPropertyComputed(name, value)
            })
        )
        const maxWidthScreen = Validates.transformTokenRecordToCssRuleObject(
            tokens,
            (name) => `.max-w-screen-${Strings.toKebabCase(name)}`,
            (name, value) => ({
                'max-width': cssPropertyComputed(name, value)
            })
        )
        return Object.assign({}, width, maxWidthScreen)
    }

    getPlugin() {
        const tokens = this.transformTokensToCssRuleObject(this.prefix, this.tokens, this.hardcodeDefaultValue)
        console.log(tokens);

        return plugin(({ addUtilities }) => {
            addUtilities(tokens)
        })
    }

}
