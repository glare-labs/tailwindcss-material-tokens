import type { TBorderProviderConstructorParams } from "./internal/border";
import type { TColorProviderConstructorParams } from "./internal/color";
import type { TElevationProviderConstructorParams } from "./internal/elevation";
import type { TMotionProviderConstructorParams } from "./internal/motion";
import type { TShapeProviderConstructorParams } from "./internal/shape";
import type { TSizingProviderConstructorParams } from "./internal/sizing";
import type { TTypographyProviderConstructorParams } from "./internal/typography";
import { provideBorder } from "./provide-border";
import { provideColor } from "./provide-color";
import { provideElevation } from "./provide-elevation";
import { provideMotion } from "./provide-motion";
import { provideShape } from "./provide-shape";
import { provideSizing } from "./provide-sizing";
import { provideTypography } from "./provide-typography";

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
        allPlugins() {
            return ([
                this.color.getPlugin(),
                this.elevation.getPlugin(),
                this.motion.getPlugin(),
                this.shape.getPlugin(),
                this.typography.getPlugin(),
                this.border.getPlugin(),
            ])
        }
    })
}
