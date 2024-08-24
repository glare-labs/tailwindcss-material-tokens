import plugin from 'tailwindcss/plugin'

/**
 * @deprecated
 * Use provideShape() instead of Shape
 */
export class Shape {

    public static readonly plugin = plugin(({ addUtilities }) => {
        addUtilities({
            '.shape-full': {
                'border-radius': '9999px'
            },
            '.shape-full-t': {
                'border-top-left-radius': '9999px',
                'border-top-right-radius': '9999px'
            },
            '.shape-full-tl': {
                'border-top-left-radius': '9999px'
            },
            '.shape-full-tr': {
                'border-top-right-radius': '9999px'
            },
            '.shape-full-b': {
                'border-bottom-left-radius': '9999px',
                'border-bottom-right-radius': '9999px'
            },
            '.shape-full-bl': {
                'border-bottom-left-radius': '9999px'
            },
            '.shape-full-br': {
                'border-bottom-right-radius': '9999px'
            },

            '.shape-extra': {
                'border-radius': '28px'
            },
            '.shape-extra-t': {
                'border-top-left-radius': '28px',
                'border-top-right-radius': '28px'
            },
            '.shape-extra-tl': {
                'border-top-left-radius': '28px'
            },
            '.shape-extra-tr': {
                'border-top-right-radius': '28px'
            },
            '.shape-extra-b': {
                'border-bottom-left-radius': '28px',
                'border-bottom-right-radius': '28px'
            },
            '.shape-extra-bl': {
                'border-bottom-left-radius': '28px'
            },
            '.shape-extra-br': {
                'border-bottom-right-radius': '28px'
            },

            '.shape-large': {
                'border-radius': '16px'
            },
            '.shape-large-t': {
                'border-top-left-radius': '16px',
                'border-top-right-radius': '16px'
            },
            '.shape-large-tl': {
                'border-top-left-radius': '16px'
            },
            '.shape-large-tr': {
                'border-top-right-radius': '16px'
            },
            '.shape-large-b': {
                'border-bottom-left-radius': '16px',
                'border-bottom-right-radius': '16px'
            },
            '.shape-large-bl': {
                'border-bottom-left-radius': '16px'
            },
            '.shape-large-br': {
                'border-bottom-right-radius': '16px'
            },

            '.shape-medium': {
                'border-radius': '12px'
            },
            '.shape-medium-t': {
                'border-top-left-radius': '12px',
                'border-top-right-radius': '12px'
            },
            '.shape-medium-tl': {
                'border-top-left-radius': '12px'
            },
            '.shape-medium-tr': {
                'border-top-right-radius': '12px'
            },
            '.shape-medium-b': {
                'border-bottom-left-radius': '12px',
                'border-bottom-right-radius': '12px'
            },
            '.shape-medium-bl': {
                'border-bottom-left-radius': '12px'
            },
            '.shape-medium-br': {
                'border-bottom-right-radius': '12px'
            },

            '.shape-small': {
                'border-radius': '8px'
            },
            '.shape-small-t': {
                'border-top-left-radius': '8px',
                'border-top-right-radius': '8px'
            },
            '.shape-small-tl': {
                'border-top-left-radius': '8px'
            },
            '.shape-small-tr': {
                'border-top-right-radius': '8px'
            },
            '.shape-small-b': {
                'border-bottom-left-radius': '8px',
                'border-bottom-right-radius': '8px'
            },
            '.shape-small-bl': {
                'border-bottom-left-radius': '8px'
            },
            '.shape-small-br': {
                'border-bottom-right-radius': '8px'
            },

            '.shape-extra-small': {
                'border-radius': '4px'
            },
            '.shape-extra-small-t': {
                'border-top-left-radius': '4px',
                'border-top-right-radius': '4px'
            },
            '.shape-extra-small-tl': {
                'border-top-left-radius': '4px'
            },
            '.shape-extra-small-tr': {
                'border-top-right-radius': '4px'
            },
            '.shape-extra-small-b': {
                'border-bottom-left-radius': '4px',
                'border-bottom-right-radius': '4px'
            },
            '.shape-extra-small-bl': {
                'border-bottom-left-radius': '4px'
            },
            '.shape-extra-small-br': {
                'border-bottom-right-radius': '4px'
            },

            '.shape-none': {
                'border-radius': 'none'
            },
        })
    })

}
