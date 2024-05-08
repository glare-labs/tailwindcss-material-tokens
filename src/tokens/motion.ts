import plugin from 'tailwindcss/plugin'

export class Motion {
    private static motionPrefix = 'md-sys-motion'
    public static setDefaultVariantPrefix(prefix: string) {
        this.motionPrefix = prefix
        return this
    }

    public static readonly plugin = plugin(({ addComponents, addUtilities }) => {
        addComponents({
            '.motion-easing-emphasized': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-emphasized, ease-in-out)`,
                'animation-timing-function': `var(--${this.motionPrefix}-easing-emphasized, ease-in-out)`,
            },
            '.motion-easing-emphasized-decelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
                'animation-timing-function': `var(--${this.motionPrefix}-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
            },
            '.motion-easing-emphasized-accelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
                'animation-timing-function': `var(--${this.motionPrefix}-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
            },

            '.motion-easing-standard': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
                'animation-timing-function': `var(--${this.motionPrefix}-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
            },
            '.motion-easing-standard-decelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
                'animation-timing-function': `var(--${this.motionPrefix}-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
            },
            '.motion-easing-standard-accelerate': {
                'transition-timing-function': `var(--${this.motionPrefix}-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
                'animation-timing-function': `var(--${this.motionPrefix}-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
            },
        })

        addUtilities({
            /**
             * 	Begin and end on screen
             */
            '.motion-duration-emphasized': {
                'transition-duration': '500ms',
            },
            /**
             * 	Enter the screen
             */
            '.motion-duration-emphasized-decelerate': {
                'transition-duration': '400ms',
            },
            /**
             * 	Exit the screen
             */
            '.motion-duration-emphasized-accelerate': {
                'transition-duration': '200ms',
            },
            /**
             * 	Begin and end on screen
             */
            '.motion-duration-standard': {
                'transition-duration': '300ms',
            },
            /**
             * 	Enter the screen
             */
            '.motion-duration-standard-decelerate': {
                'transition-duration': '250ms',
            },
            /**
             * 	Exit the screen
             */
            '.motion-duration-standard-accelerate': {
                'transition-duration': '200ms',
            },
        })
    })

}