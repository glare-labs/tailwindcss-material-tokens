import plugin from 'tailwindcss/plugin'
import { type IProvider } from '../../declaration/provider.interface'
import { Tokens } from '../../declaration/token.interface'
import { Strings } from '../../utils/strings'
import { Validates } from '../../utils/validates'

export type TShapeProviderConstructorParams = {
    readonly cssVariableTokenPrefix: string
    readonly classNamePrefix: string
    readonly hardcodeDefaultValue: boolean
    readonly customTokens: IShapeTokens | Record<string, string>
    readonly excludedTokens: Array<(keyof IShapeTokens)>
    readonly unit: string
    readonly unitSize: number
}

export interface IShapeTokens {
    readonly full: string
    readonly extra: string
    readonly large: string
    readonly medium: string
    readonly small: string
    readonly extraSmall: string
    readonly none: string
}

class DefaultShapeTokens extends Tokens<IShapeTokens> {
    private readonly full
    private readonly extra
    private readonly large
    private readonly medium
    private readonly small
    private readonly extraSmall
    private readonly none

    constructor(unit: string, unitSize: number) {
        super()
        this.full = `${(9999 * unitSize)}${unit}`
        this.extra = `${(28 * unitSize)}${unit}`
        this.large = `${(16 * unitSize)}${unit}`
        this.medium = `${(12 * unitSize)}${unit}`
        this.small = `${(8 * unitSize)}${unit}`
        this.extraSmall = `${(4 * unitSize)}${unit}`
        this.none = '0'
    }

    public get values() {
        return {
            full: this.full,
            extra: this.extra,
            large: this.large,
            medium: this.medium,
            small: this.small,
            extraSmall: this.extraSmall,
            none: this.none,
        }
    }
}

export class ShapeProvider extends DefaultShapeTokens implements IProvider {
    private readonly classNamePrefix
    private readonly cssVariableTokenPrefix
    private readonly hardcodeDefaultValue
    private readonly excludedTokens
    private readonly customTokens

    constructor(params?: Partial<TShapeProviderConstructorParams>) {
        super(params?.unit ?? 'px', params?.unitSize ?? 1)
        this.classNamePrefix = params?.classNamePrefix ?? ''
        this.cssVariableTokenPrefix = params?.cssVariableTokenPrefix ?? 'md-sys-shape'
        this.hardcodeDefaultValue = params?.hardcodeDefaultValue ?? true
        this.excludedTokens = params?.excludedTokens ?? []
        this.customTokens = params?.customTokens ?? {}
    }

    private get tokens() {
        return Validates.merge(Validates.filter(this.values, this.excludedTokens), this.customTokens) as Record<string, string>
    }

    public get cssString() {
        const cssComputed = (name: string, value: string) => !Object.hasOwn(this.customTokens, name) ? `var(--${this.cssVariableTokenPrefix}-${Strings.toKebabCase(name)}, ${this.hardcodeDefaultValue ? value : ''})` : value

        const shapes = Validates.transformTokenRecordToCssRuleObject(
            this.tokens,
            (name) => Validates.className(['shape', this.classNamePrefix, name], {}),
            (name, value) => ({
                'border-radius': cssComputed(name, value)
            })
        )

        const shapeTypes = [
            {
                css: 't', prop: [
                    'border-top-left-radius',
                    'border-top-right-radius',
                ]
            },
            {
                css: 'r', prop: [
                    'border-top-right-radius',
                    'border-bottom-right-radius',
                ]
            },
            {
                css: 'b', prop: [
                    'border-bottom-left-radius',
                    'border-bottom-right-radius',
                ]
            },
            {
                css: 'l', prop: [
                    'border-top-left-radius',
                    'border-bottom-left-radius',
                ]
            },
            {
                css: 'tl', prop: ['border-top-left-radius']
            },
            {
                css: 'tr', prop: ['border-top-right-radius']
            },
            {
                css: 'bl', prop: ['border-bottom-left-radius']
            },
            {
                css: 'br', prop: ['border-bottom-right-radius']
            }
        ]

        const shapesVariants = shapeTypes.map((type) => {
            return Validates.transformTokenRecordToCssRuleObject(
                this.tokens,
                (name) => Validates.className(['shape', this.classNamePrefix, name, type.css]),
                (name, value) => type.prop.map(p => ({
                    [p]: cssComputed(name, value)
                })).reduce((pre, cur) => Object.assign(pre, cur))
            )
        })

        return Object.assign({}, shapes, ...shapesVariants)
    }

    public getPlugin() {
        return plugin(({ addComponents }) => {
            addComponents(this.cssString)
        })
    }

}
