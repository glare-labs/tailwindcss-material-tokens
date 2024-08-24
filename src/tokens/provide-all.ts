import { provideColor, type TColorProviderConstructor } from "./provide-color";
import { provideElevation, type TElevationProviderConstructor } from "./provide-elevation";
import { provideMotion, type TMotionProviderConstructor } from "./provide-motion";
import { provideShape, type TShapeProviderConstructor } from "./provide-shape";
import { provideTypography, type TTypographyProviderConstructor } from "./provide-typography";

export function provideAll(params: {
    color?: TColorProviderConstructor,
    elevation?: TElevationProviderConstructor,
    motion?: TMotionProviderConstructor,
    shape?: TShapeProviderConstructor,
    typography?: TTypographyProviderConstructor,
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
