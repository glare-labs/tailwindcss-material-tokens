# tailwindcss-material-tokens
Import the tokens of web components in material 3 into tailwindcss and use them through plugins.

+ ESM Supported Only
+ Typescript Supported

```
npm i -D @glare-labs/tailwindcss-material-tokens
```

```javascript
import { provideAll } from '@glare-labs/tailwindcss-material-tokens'

const all = provideAll()

/** @type {import('tailwindcss').Config} */
export default {
    // ...

    plugins: [
        ...all.allPlugins()
    ],
}
```
_If you don’t want to be troubled by the original styles of tailwindcss, please try to turn off the styles that come with tailwindcss (color, rounded, shadow, text)._

![Screenshot1](https://github.com/glare-labs/tailwindcss-material-tokens/blob/main/imgs/Part-1.png?raw=true)
![Screenshot2](https://github.com/glare-labs/tailwindcss-material-tokens/blob/main/imgs/Part-2.png?raw=true)

## Usage

For example:
```html
<div class="w-24 h-24 shape-large elevation-1 bg-primary">
    <p class="text-title-large text-on-primary">Title</p>
</div>
```

### provideColor & provide*
```typescript
import { provideColor, provideElevation, provideMotion, provideShape, provideTypography } from '@glare-labs/tailwindcss-material-tokens'

const color = provideColor()
const elevation = provideElevation()
const motion = provideMotion()
const shape = provideShape()
const typography = provideTypography()

/** @type {import('tailwindcss').Config} */
export default {
    // ...

    plugins: [
        color.plugin(),
        elevation.plugin(),
        motion.plugin(),
        shape.plugin(),
        typography.plugin(),
    ],
}
```

### provideAll
provideAll includes:
- color
- elevation
- motion
- shape
- typography

```typescript
import { provideAll } from '@glare-labs/tailwindcss-material-tokens'

const all = provideAll()

/** @type {import('tailwindcss').Config} */
export default {
    // ...

    plugins: [
        ...all.allPlugins()
    ],
}
```

## Default Value

_Contains only color._
```javascript
{
  primaryPaletteKeyColor: '#047aff',
  secondaryPaletteKeyColor: '#727598',
  tertiaryPaletteKeyColor: '#7b70a3',
  neutralPaletteKeyColor: '#737782',
  neutralVariantPaletteKeyColor: '#727785',
  background: '#f9f9ff',
  onBackground: '#181c25',
  surface: '#f9f9ff',
  surfaceDim: '#d7d9e6',
  surfaceBright: '#f9f9ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f1f3ff',
  surfaceContainer: '#ebedfa',
  surfaceContainerHigh: '#e5e8f5',
  surfaceContainerHighest: '#dfe2ef',
  onSurface: '#181c25',
  surfaceVariant: '#dee2f2',
  onSurfaceVariant: '#424753',
  inverseSurface: '#2c303a',
  inverseOnSurface: '#eef0fd',
  outline: '#727785',
  outlineVariant: '#c2c6d6',
  shadow: '#000000',
  scrim: '#000000',
  surfaceTint: '#005ac1',
  primary: '#005ac1',
  onPrimary: '#ffffff',
  primaryContainer: '#d8e2ff',
  onPrimaryContainer: '#001a41',
  inversePrimary: '#adc6ff',
  secondary: '#595c7e',
  onSecondary: '#ffffff',
  secondaryContainer: '#dfe0ff',
  onSecondaryContainer: '#151937',
  tertiary: '#625789',
  onTertiary: '#ffffff',
  tertiaryContainer: '#e7deff',
  onTertiaryContainer: '#1e1341',
  error: '#ba1a1a',
  onError: '#ffffff',
  errorContainer: '#ffdad6',
  onErrorContainer: '#410002',
  primaryFixed: '#d8e2ff',
  primaryFixedDim: '#adc6ff',
  onPrimaryFixed: '#001a41',
  onPrimaryFixedVariant: '#004494',
  secondaryFixed: '#dfe0ff',
  secondaryFixedDim: '#c1c4eb',
  onSecondaryFixed: '#151937',
  onSecondaryFixedVariant: '#414465',
  tertiaryFixed: '#e7deff',
  tertiaryFixedDim: '#ccbff8',
  onTertiaryFixed: '#1e1341',
  onTertiaryFixedVariant: '#4a4070'
}
```
