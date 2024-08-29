import type { TColorProviderConstructorParams } from "./internal/color";
import type { TElevationProviderConstructorParams } from "./internal/elevation";
import type { TMotionProviderConstructorParams } from "./internal/motion";
import type { TShapeProviderConstructorParams } from "./internal/shape";
import type { TTypographyProviderConstructorParams } from "./internal/typography";
import { provideColor } from "./provide-color";
import { provideElevation } from "./provide-elevation";
import { provideMotion } from "./provide-motion";
import { provideShape } from "./provide-shape";
import { provideTypography } from "./provide-typography";

export function provideAll(params: {
    color?: TColorProviderConstructorParams,
    elevation?: TElevationProviderConstructorParams,
    motion?: TMotionProviderConstructorParams,
    shape?: TShapeProviderConstructorParams,
    typography?: TTypographyProviderConstructorParams,
} = {
        color: { prefix: 'md-sys-color' },
        elevation: { shadowToken: 'md-sys-color-shadow' },
        motion: { prefix: 'md-sys-motion' },
        shape: { prefix: 'md-sys-shape', defaultUnit: '1' },
        typography: { prefix: 'md-sys-typescale' }
    }) {
    return ({
        color: provideColor(params.color),
        elevation: provideElevation(params.elevation),
        motion: provideMotion(params.motion),
        shape: provideShape(params.shape),
        typography: provideTypography(params.typography),
        allPlugins() {
            return ([
                this.color.getPlugin(),
                this.elevation.getPlugin(),
                this.motion.getPlugin(),
                this.shape.getPlugin(),
                this.typography.getPlugin(),
            ])
        }
    })
}
