import { SizingProvider, type TSizingProviderConstructorParams } from "./internal/sizing";

export const provideSizing = (params?: Partial<TSizingProviderConstructorParams>) => new SizingProvider(params ?? {})
