import { ColorProvider, type TColorProviderConstructorParams } from "./internal/color";

/**
 * @example
 * ```typescript
 * const color = provideColor()
 * 
 * export default {
 *     plugins: [
 *         color.getPlugin()
 *     ]
 * }
 * ```
 * 
 * @description
 * Only colors are provided, with default values.
 * The developer needs to generate the Material Design theme color matching token into HTML or plug-in.
 */
export const provideColor = (params: TColorProviderConstructorParams = {
    prefix: 'md-sys-color',
}) => new ColorProvider(params)
