# tailwindcss-material-tokens

_If you wish, you are welcome to submit a document update request_

---

Import the Material Design tokens into tailwindcss and use them through plugins.

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

---

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
import { provideBorder, provideColor, provideElevation, provideMotion, provideShape, provideSizing, provideTypography, provideWindowMediaQuery } from '@glare-labs/tailwindcss-material-tokens'


const border = provideBorder()
const color = provideColor()
const elevation = provideElevation()
const motion = provideMotion()
const shape = provideShape()
const sizing = provideSizing()
const typography = provideTypography()
const width = provideSizing()
const mq = provideWindowMediaQuery()

/** @type {import('tailwindcss').Config} */
export default {
    // ...

    plugins: [
        border.getPlugin(),
        color.getPlugin(),
        elevation.getPlugin(),
        motion.getPlugin(),
        shape.getPlugin(),
        sizing.getPlugin(),
        typography.getPlugin(),
        width.getPlugin(),
        mq.getPlugin(),
    ],
}
```

### provideAll
provideAll includes:
- border
- color
- elevation
- motion
- shape
- sizing
- typography

```typescript
import { provideAll } from '@glare-labs/tailwindcss-material-tokens'

const all = provideAll()

/** @type {import('tailwindcss').Config} */
export default {
    // ...

    plugins: [
        ...all.getAllPlugins()
    ],
}
```

## APIs

Most plugins support `prefix`, `hardcodeDefaultValue`, `excludeTokens` and `customTokens` options.

### prefix
prefix represents a public CSS variable:

```typescript
const color = provideColor({
    prefix: 'my-product-prefix'
})
```

the result:
```css
.bg-primary {
    background-color: var(--my-product-prefix-primary, #005ac1);
}
```

### hardcodeDefaultValue
If hardcodeDefaultValue is true, the CSS contains a default value.

```typescript
const color = provideColor({
    prefix: 'my-product-prefix',
    hardcodeDefaultValue: false,
})
```

the result:
```css
.bg-primary {
    background-color: var(--my-product-prefix-primary,);
}
```

### excludeTokens
excludeTokens is a token blacklist, including unnecessary token groups.

```typescript
const color = provideColor({
    excludeTokens: [
        // remove .bg-primary and .text-primary
        'primary'
    ]
})
```

## Default Color Values

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
