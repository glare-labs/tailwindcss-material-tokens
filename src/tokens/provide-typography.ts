import { TypographyProvider, type TTypographyProviderConstructorParams } from './internal/typography'

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
