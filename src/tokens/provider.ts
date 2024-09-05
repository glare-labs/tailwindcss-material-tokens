import { type TBorderProviderConstructorParams, BorderProvider } from "./internal/border"
import { type TColorProviderConstructorParams, ColorProvider } from "./internal/color"
import { type TElevationProviderConstructorParams, ElevationProvider } from "./internal/elevation"
import { type TMotionProviderConstructorParams, MotionProvider } from "./internal/motion"
import { type TShapeProviderConstructorParams, ShapeProvider } from "./internal/shape"
import { type TSizingProviderConstructorParams, SizingProvider } from "./internal/sizing"
import { type TTypographyProviderConstructorParams, TypographyProvider } from "./internal/typography"
import { WindowMediaQueryProvider } from "./internal/window-media-query"

export const provideBorder = (param?: Partial<TBorderProviderConstructorParams>) => new BorderProvider(param ?? {})

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

/**
 * @example
 * ```typescript
 * const elevation = provideElevation()
 * 
 * export default {
 *     plugins: [
 *         elevation.getPlugin()
 *     ]
 * }
 * ```
 */
export const provideElevation = (params?: Partial<TElevationProviderConstructorParams>) => new ElevationProvider(params ?? {})

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
export const provideShape = (param?: Partial<TShapeProviderConstructorParams>) => new ShapeProvider(param ?? {})

export const provideSizing = (params?: Partial<TSizingProviderConstructorParams>) => new SizingProvider(params ?? {})

export const provideWindowMediaQuery = () => new WindowMediaQueryProvider()

/**
 * @example
 * ```typescript
 * const elevation = provideTypography()
 * 
 * export default {
 *     plugins: [
 *         elevation.getPlugin()
 *     ]
 * }
 * ```
 */
export const provideTypography = (param: TTypographyProviderConstructorParams = {
    prefix: 'md-sys-typescale'
}) => new TypographyProvider(param)

export function provideAll(params?: Partial<{
    color: Partial<TColorProviderConstructorParams>,
    elevation: Partial<TElevationProviderConstructorParams>,
    motion: TMotionProviderConstructorParams,
    shape: TShapeProviderConstructorParams,
    typography: TTypographyProviderConstructorParams,
    border: Partial<TBorderProviderConstructorParams>,
    sizing: Partial<TSizingProviderConstructorParams>,
}>) {
    return ({
        color: provideColor(params?.color),
        elevation: provideElevation(params?.elevation),
        motion: provideMotion(params?.motion),
        shape: provideShape(params?.shape),
        typography: provideTypography(params?.typography),
        border: provideBorder(params?.border),
        sizing: provideSizing(params?.sizing),
        windowMediaQuery: provideWindowMediaQuery(),
        getAllPlugins() {
            return ([
                this.color.getPlugin(),
                this.elevation.getPlugin(),
                this.motion.getPlugin(),
                this.shape.getPlugin(),
                this.sizing.getPlugin(),
                this.typography.getPlugin(),
                this.border.getPlugin(),
                this.windowMediaQuery.getPlugin(),
            ])
        }
    })
}
