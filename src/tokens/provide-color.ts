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
 * 
 * @example
 * ```typescript
 * const color = provideColor({
 *     hardcodeDefaultValue: true,
 *     customTokens: {
 *          background: '#00ff00',
 *          onBackground: '#ff00ff',
 *     },
 * })
 * ```
 */
export const provideColor = (params?: Partial<TColorProviderConstructorParams>) => new ColorProvider(params ?? {})
