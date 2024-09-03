import type { CSSRuleObject } from "tailwindcss/types/config"
import { Strings } from "./strings"

export class Validates {

    public static transformTokenRecordToCssRuleObject = <RV>(record: Record<string, RV>, classNameCallback: (recordName: string, recordValue: RV) => string, cssPropertiesCallback: (recordName: string, recordValue: RV) => CSSRuleObject) => {
        const newTokens = {} as CSSRuleObject
        for (const [name, value] of Object.entries(record)) {
            const className = classNameCallback(name, value)

            newTokens[className] = cssPropertiesCallback(name, value)
        }
        return newTokens
    }

    /**
     * @returns customTokens + defaultTokens - unsupportedTokens
     */
    public static validate = <TokenRecordType>(customTokens: Record<string, string>, defaultTokens: Record<keyof TokenRecordType, string>, unsupportedTokens: Array<(keyof TokenRecordType) | {}>) => {
        const newTokens = {} as Record<string, unknown>
        for (const [name, value] of Object.entries(defaultTokens)) {
            if (unsupportedTokens.includes(name)) {
                continue
            }
            if (Object.hasOwn(customTokens, name)) {
                newTokens[name] = customTokens[name]
                continue
            }
            newTokens[name] = value
        }
        return newTokens as Record<string, string>
    }

    public static className(names: Array<string>, options?: Partial<{ toKebabCase: boolean, singleConnectionSymbol: boolean, preProcessingCallback: (prefix: string) => string, postProcessingCallback: (infix: string) => string }>) {
        const processing = {
            pre: options?.preProcessingCallback ?? ((e) => e),
            post: options?.postProcessingCallback ?? ((e) => e),
        }

        let className = ''

        if (options?.toKebabCase ?? true) {
            className = names.map(name => processing.post(Strings.toKebabCase(processing.pre(name)))).reduce((pre: string, cur: string, index) => `${pre}-${cur}`)
        } else {
            className = names.map(name => processing.post(processing.pre(name))).reduce((pre: string, cur: string, index) => `${pre}-${cur}`)
        }

        let res = ''
        if (options?.singleConnectionSymbol ?? true) {
            let lastChar: string | null = null
            for (const char of className) {
                if (char === '-' && lastChar === '-') {
                    continue
                }
                res += char
                lastChar = char
            }
        }

        return res
    }
}
