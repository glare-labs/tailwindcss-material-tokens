import { ShapeProvider, type TShapeProviderConstructorParams } from './internal/shape'

/**
 * @example
 * ```typescript
 * const elevation = provideShape()
 * 
 * export default {
 *     plugins: [
 *         elevation.getPlugin()
 *     ]
 * }
 * ```
 */
export const provideShape = (param: TShapeProviderConstructorParams = {
    prefix: 'md-sys-shape',
    defaultUnit: '1',
}) => new ShapeProvider(param)
