import plugin from 'tailwindcss/plugin'
import { type IProvider } from '../../declaration/provider.interface'

export type TMotionProviderConstructorParams = {
    readonly prefix?: string
}

export class MotionProvider implements IProvider {
    public prefix

    constructor(params: TMotionProviderConstructorParams) {
        this.prefix = params.prefix
    }

    public getPlugin() {
        return plugin(({ addUtilities }) => {
            addUtilities({
                '.transition-easing-emphasized': {
                    'transition-timing-function': `var(--${this.prefix}-easing-emphasized, ease-in-out)`,
                },
                '.animation-easing-emphasized': {
                    'animation-timing-function': `var(--${this.prefix}-easing-emphasized, ease-in-out)`,
                },
                '.transition-easing-emphasized-decelerate': {
                    'transition-timing-function': `var(--${this.prefix}-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
                },
                '.animation-easing-emphasized-decelerate': {
                    'animation-timing-function': `var(--${this.prefix}-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))`,
                },
                '.transition-easing-emphasized-accelerate': {
                    'transition-timing-function': `var(--${this.prefix}-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
                },
                '.animation-easing-emphasized-accelerate': {
                    'animation-timing-function': `var(--${this.prefix}-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))`,
                },

                '.transition-easing-standard': {
                    'transition-timing-function': `var(--${this.prefix}-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
                },
                '.animation-easing-standard': {
                    'animation-timing-function': `var(--${this.prefix}-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))`,
                },
                '.transition-easing-standard-decelerate': {
                    'transition-timing-function': `var(--${this.prefix}-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
                },
                '.animation-easing-standard-decelerate': {
                    'animation-timing-function': `var(--${this.prefix}-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))`,
                },
                '.transition-easing-standard-accelerate': {
                    'transition-timing-function': `var(--${this.prefix}-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
                },
                '.animation-easing-standard-accelerate': {
                    'animation-timing-function': `var(--${this.prefix}-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))`,
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
}
