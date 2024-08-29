import { MotionProvider, type TMotionProviderConstructorParams } from './internal/motion'

/**
 * @example
 * ```typescript
 * const elevation = provideMotion()
 * 
 * export default {
 *     plugins: [
 *         elevation.getPlugin()
 *     ]
 * }
 * ```
 */
export const provideMotion = (params: TMotionProviderConstructorParams = {
    prefix: 'md-sys-motion'
}) => new MotionProvider(params)
