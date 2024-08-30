import { BorderProvider, type TBorderProviderConstructorParams } from './internal/border'

/**
 * @example
 * ```typescript
 * const border = provideBorder()
 * 
 * export default {
 *     plugins: [
 *         border.getPlugin()
 *     ]
 * }
 * ```
 */
export const provideBorder = (param?: Partial<TBorderProviderConstructorParams>) => new BorderProvider(param ?? {})
