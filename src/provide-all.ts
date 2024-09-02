import { provideWindowMediaQuery } from "./media-queries";
import type { TBorderProviderConstructorParams } from "./tokens/internal/border";
import type { TColorProviderConstructorParams } from "./tokens/internal/color";
import type { TElevationProviderConstructorParams } from "./tokens/internal/elevation";
import type { TMotionProviderConstructorParams } from "./tokens/internal/motion";
import type { TShapeProviderConstructorParams } from "./tokens/internal/shape";
import type { TSizingProviderConstructorParams } from "./tokens/internal/sizing";
import type { TTypographyProviderConstructorParams } from "./tokens/internal/typography";
import { provideBorder } from "./tokens/provide-border";
import { provideColor } from "./tokens/provide-color";
import { provideElevation } from "./tokens/provide-elevation";
import { provideMotion } from "./tokens/provide-motion";
import { provideShape } from "./tokens/provide-shape";
import { provideSizing } from "./tokens/provide-sizing";
import { provideTypography } from "./tokens/provide-typography";

export function provideAll(params: {
    color?: Partial<TColorProviderConstructorParams>,
    elevation?: Partial<TElevationProviderConstructorParams>,
    motion?: TMotionProviderConstructorParams,
    shape?: TShapeProviderConstructorParams,
    typography?: TTypographyProviderConstructorParams,
    border?: Partial<TBorderProviderConstructorParams>,
    sizing?: Partial<TSizingProviderConstructorParams>,
}) {
    return ({
        color: provideColor(params.color),
        elevation: provideElevation(params.elevation),
        motion: provideMotion(params.motion),
        shape: provideShape(params.shape),
        typography: provideTypography(params.typography),
        border: provideBorder(params.border),
        sizing: provideSizing(params.sizing),
        windowMediaQuery: provideWindowMediaQuery(),
        getAllPlugins() {
            return ([
                this.color.getPlugin(),
                this.elevation.getPlugin(),
                this.motion.getPlugin(),
                this.shape.getPlugin(),
                this.typography.getPlugin(),
                this.border.getPlugin(),
                this.windowMediaQuery.getPlugin(),
            ])
        }
    })
}
