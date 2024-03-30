import plugin from "tailwindcss/plugin"

export class ShapeTokens {

    public static BaseTokens = plugin(({ addUtilities }) => {
        addUtilities({
            'shape-full': {
                'border-radius': '9999px'
            },
            'shape-extra': {
                'border-radius': '28px'
            },
            'shape-large': {
                'border-radius': '16px'
            },
            'shape-medium': {
                'border-radius': '12px'
            },
            'shape-small': {
                'border-radius': '8px'
            },
            'shape-extra-small': {
                'border-radius': '4px'
            },
            'shape-none': {
                'border-radius': 'none'
            },
        })
    })

    public static readonly FullTokens = [this.BaseTokens]

}