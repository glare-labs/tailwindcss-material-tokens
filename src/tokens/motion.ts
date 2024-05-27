import plugin from 'tailwindcss/plugin'

export class Motion {
    private static motionPrefix = 'md-sys-motion'
    public static setDefaultVariantPrefix(prefix: string) {
        this.motionPrefix = prefix
        return this
    }

    public static readonly plugin = plugin(({ addComponents, addUtilities }) => {
        addComponents({
            '.transition-easing-emphasized': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-emphasized, ease-in-out)`,
            },
            '.animation-easing-emphasized': {
                'animation-timing-function': `var(--${this.motionPrefix}-easing-emphasized, ease-in-out)`,
            },
            '.transition-easing-emphasized-decelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
            },
            '.animation-easing-emphasized-decelerate': {
                'animation-timing-function': `var(--${this.motionPrefix}-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
            },
            '.transition-easing-emphasized-accelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
            },
            '.animation-easing-emphasized-accelerate': {
                'animation-timing-function': `var(--${this.motionPrefix}-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
            },

            '.transition-easing-standard': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
            },
            '.animation-easing-standard': {
                'animation-timing-function': `var(--${this.motionPrefix}-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
            },
            '.transition-easing-standard-decelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
            },
            '.animation-easing-standard-decelerate': {
                'animation-timing-function': `var(--${this.motionPrefix}-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
            },
            '.transition-easing-standard-accelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
            },
            '.animation-easing-standard-accelerate': {
                'animation-timing-function': `var(--${this.motionPrefix}-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
            },
        })

        addUtilities({
            /**
             * 	Begin and end on screen
             */
            '.transition-duration-emphasized': {
                'transition-duration': '500ms',
            },
            '.animation-duration-emphasized': {
                'animation-duration': '500ms',
            },
            /**
             * 	Enter the screen
             */
            '.transition-duration-emphasized-decelerate': {
                'transition-duration': '400ms',
            },
            '.animation-duration-emphasized-decelerate': {
                'animation-duration': '400ms',
            },
            /**
             * 	Exit the screen
             */
            '.transition-duration-emphasized-accelerate': {
                'transition-duration': '200ms',
            },
            '.animation-duration-emphasized-accelerate': {
                'animation-duration': '200ms',
            },
            /**
             * 	Begin and end on screen
             */
            '.transition-duration-standard': {
                'transition-duration': '300ms',
            },
            '.animation-duration-standard': {
                'animation-duration': '300ms',
            },
            /**
             * 	Enter the screen
             */
            '.transition-duration-standard-decelerate': {
                'transition-duration': '250ms',
            },
            '.animation-duration-standard-decelerate': {
                'animation-duration': '250ms',
            },
            /**
             * 	Exit the screen
             */
            '.transition-duration-standard-accelerate': {
                'transition-duration': '200ms',
            },
            '.animation-duration-standard-accelerate': {
                'animation-duration': '200ms',
            },
        })
    })

}