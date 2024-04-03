import plugin from "tailwindcss/plugin";

export class MotionTokens {
    private static Prefix = 'md-sys-color'
    public static SetPrefix(prefix: string) {
        this.Prefix = prefix
    }

    public static readonly EasingTokens = plugin(({ addComponents }) => {
        addComponents({
            '.motion-easing-emphasized': {
                'transition-timing-function': `var(--${this.Prefix}-motion-easing-emphasized, ease-in-out)`,
                'animation-timing-function': `var(--${this.Prefix}-motion-easing-emphasized, ease-in-out)`,
            },
            '.motion-easing-emphasized-decelerate': {
                'transition-timing-function': `var(--${this.Prefix}-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
                'animation-timing-function': `var(--${this.Prefix}-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
            },
            '.motion-easing-emphasized-accelerate': {
                'transition-timing-function': `var(--${this.Prefix}-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
                'animation-timing-function': `var(--${this.Prefix}-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
            },

            '.motion-easing-standard': {
                'transition-timing-function': `var(--${this.Prefix}-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
                'animation-timing-function': `var(--${this.Prefix}-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
            },
            '.motion-easing-standard-decelerate': {
                'transition-timing-function': `var(--${this.Prefix}-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
                'animation-timing-function': `var(--${this.Prefix}-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
            },
            '.motion-easing-standard-accelerate': {
                'transition-timing-function': `var(--${this.Prefix}-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
                'animation-timing-function': `var(--${this.Prefix}-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
            },
        })
    })

    public static readonly DurationTokens = plugin(({ addUtilities }) => {
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

    public static readonly FullTokens = [this.EasingTokens, this.DurationTokens]
}