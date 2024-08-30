import { ElevationProvider, type TElevationProviderConstructorParams } from "./internal/elevation";

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
