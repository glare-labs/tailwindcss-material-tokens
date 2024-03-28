# tailwindcss-material-tokens
Import the tokens of web components in material 3 into tailwindcss and use them through plugins.

+ ESM Supported
+ CommonJs Supported
+ Typescript Supported


```
npm i -D @glare-labs/tailwindcss-material-tokens
```

```javascript
import { TailwindcssMaterialTokens, TypographyTokens } from '@glare-labs/tailwindcss-material-tokens'

/** @type {import('tailwindcss').Config} */
export default {
    // ...

    plugins: [
        ...TailwindcssMaterialTokens.FullTokens,
        ...TypographyTokens.FullTokens,
    ],
}
```

## Usage

For example:
```html
<div class="border border-outline primary">
    <p class="on-primary">Title</p>
</div>
```

## Mapping
|Tailwindcss Util Name|CSS Property|Value|
|:--|--:|:--|
|background|background-color|var(--md-sys-color-background)|
|on-background|color|var(--md-sys-color-on-background)|
|surface|background-color|var(--md-sys-color-surface)|
|surface-dim|background-color|var(--md-sys-color-surface-dim)|
|surface-bright|background-color|var(--md-sys-color-surface-bright)|
|surface-container-lowest|background-color|var(--md-sys-color-surface-container-lowest)|
|surface-container-low|background-color|var(--md-sys-color-surface-container-low)|
|surface-container|background-color|var(--md-sys-color-surface-container)|
|surface-container-high|background-color|var(--md-sys-color-surface-container-high)|
|surface-container-highest|background-color|var(--md-sys-color-surface-container-highest)|
|on-surface|color|var(--md-sys-color-on-surface)|
|surface-variant|background-color|var(--md-sys-color-surface-variant)|
|on-surface-variant|color|var(--md-sys-color-on-surface-variant)|
|inverse-surface|background-color|var(--md-sys-color-inverse-surface)|
|inverse-on-surface|color|var(--md-sys-color-inverse-on-surface)|
|border-outline|border-color|var(--md-sys-color-outline)|
|border-outline-variant|border-color|var(--md-sys-color-outline-variant)|
|shadow|--tw-shadow-color|var(--md-sys-color-shadow)|
|scrim|background-color|var(--md-sys-color-scrim)|
|surface-tint|background-color|var(--md-sys-color-surface-tint)|
|primary|background-color|var(--md-sys-color-primary)|
|on-primary|color|var(--md-sys-color-on-primary)|
|primary-container|background-color|var(--md-sys-color-primary-container)|
|on-primary-container|color|var(--md-sys-color-on-primary-container)|
|inverse-primary|background-color|var(--md-sys-color-inverse-primary)|
|secondary|background-color|var(--md-sys-color-secondary)|
|on-secondary|color|var(--md-sys-color-on-secondary)|
|secondary-container|background-color|var(--md-sys-color-secondary-container)|
|on-secondary-container|color|var(--md-sys-color-on-secondary-container)|
|tertiary|background-color|var(--md-sys-color-tertiary)|
|on-tertiary|color|var(--md-sys-color-on-tertiary)|
|tertiary-container|background-color|var(--md-sys-color-tertiary-container)|
|on-tertiary-container|color|var(--md-sys-color-on-tertiary-container)|
|error|background-color|var(--md-sys-color-error)|
|on-error|color|var(--md-sys-color-on-error)|
|error-container|background-color|var(--md-sys-color-error-container)|
|on-error-container|color|var(--md-sys-color-on-error-container)|
|primary-fixed|background-color|var(--md-sys-color-primary-fixed)|
|primary-fixed-dim|background-color|var(--md-sys-color-primary-fixed-dim)|
|on-primary-fixed|color|var(--md-sys-color-on-primary-fixed)|
|on-primary-fixed-variant|color|var(--md-sys-color-on-primary-fixed-variant)|
|secondary-fixed|background-color|var(--md-sys-color-secondary-fixed)|
|secondary-fixed-dim|background-color|var(--md-sys-color-secondary-fixed-dim)|
|on-secondary-fixed|color|var(--md-sys-color-on-secondary-fixed)|
|on-secondary-fixed-variant|color|var(--md-sys-color-on-secondary-fixed-variant)|
|tertiary-fixed|background-color|var(--md-sys-color-tertiary-fixed)|
|tertiary-fixed-dim|background-color|var(--md-sys-color-tertiary-fixed-dim)|
|on-tertiary-fixed|color|var(--md-sys-color-on-tertiary-fixed)|
|on-tertiary-fixed-variant|color|var(--md-sys-color-on-tertiary-fixed-variant)|

## Default Value

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