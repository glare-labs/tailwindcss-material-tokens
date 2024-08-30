import type { CSSRuleObject } from "tailwindcss/types/config"

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
}
