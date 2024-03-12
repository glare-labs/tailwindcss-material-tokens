import plugin from 'tailwindcss/plugin'

class MaterialTokens {

  public static readonly FixedTokens = plugin(({ addUtilities }) => {
    addUtilities({
      '.primary-fixed': {
        'background-color': 'var(--md-sys-color-primary-fixed)',
      },
      '.primary-fixed-dim': {
        'background-color': 'var(--md-sys-color-primary-fixed-dim)',
      },
      '.on-primary-fixed': {
        'color': 'var(--md-sys-color-on-primary-fixed)',
      },
      '.on-primary-fixed-variant': {
        'color': 'var(--md-sys-color-on-primary-fixed-variant)',
      },
      '.secondary-fixed': {
        'background-color': 'var(--md-sys-color-secondary-fixed)',
      },
      '.secondary-fixed-dim': {
        'background-color': 'var(--md-sys-color-secondary-fixed-dim)',
      },
      '.on-secondary-fixed': {
        'color': 'var(--md-sys-color-on-secondary-fixed)',
      },
      '.on-secondary-fixed-variant': {
        'color': 'var(--md-sys-color-on-secondary-fixed-variant)',
      },
      '.tertiary-fixed': {
        'background-color': 'var(--md-sys-color-tertiary-fixed)',
      },
      '.tertiary-fixed-dim': {
        'background-color': 'var(--md-sys-color-tertiary-fixed-dim)',
      },
      '.on-tertiary-fixed': {
        'color': 'var(--md-sys-color-on-tertiary-fixed)',
      },
      '.on-tertiary-fixed-variant': {
        'color': 'var(--md-sys-color-on-tertiary-fixed-variant)',
      },
    })
  })

  public static readonly ContainerTokens = plugin(({ addUtilities }) => {
    addUtilities({
      '.surface-container-lowest': {
        'background-color': 'var(--md-sys-color-surface-container-lowest)'
      },
      '.surface-container-low': {
        'background-color': 'var(--md-sys-color-surface-container-low)'
      },
      '.surface-container': {
        'background-color': 'var(--md-sys-color-surface-container)'
      },
      '.surface-container-high': {
        'background-color': 'var(--md-sys-color-surface-container-high)'
      },
      '.surface-container-highest': {
        'background-color': 'var(--md-sys-color-surface-container-highest)'
      },
    })
  })

  public static readonly BaseTokens = plugin(({ addUtilities }) => {
    addUtilities({
    '.background': {
      'background-color': 'var(--md-sys-color-background)'
    },
    '.on-background': {
      'color': 'var(--md-sys-color-on-background)'
    },
    '.surface': {
      'background-color': 'var(--md-sys-color-surface)'
    },
    '.surface-dim': {
      'background-color': 'var(--md-sys-color-surface-dim)'
    },
    '.surface-bright': {
      'background-color': 'var(--md-sys-color-surface-bright)'
    },
    '.on-surface': {
      'color': 'var(--md-sys-color-on-surface)',
    },
    '.surface-variant': {
      'background-color': 'var(--md-sys-color-surface-variant)',
    },
    '.on-surface-variant': {
      'color': 'var(--md-sys-color-on-surface-variant)',
    },
    '.inverse-surface': {
      'background-color': 'var(--md-sys-color-inverse-surface)',
    },
    '.inverse-on-surface': {
      'color': 'var(--md-sys-color-inverse-on-surface)',
    },
    '.border-outline': {
      'border-color': 'var(--md-sys-color-outline)',
    },
    '.border-outline-variant': {
      'border-color': 'var(--md-sys-color-outline-variant)',
    },
    '.shadow': {
      '--tw-shadow-color': 'var(--md-sys-color-shadow)',
    },
    '.scrim': {
      'background-color': 'var(--md-sys-color-scrim)',
    },
    '.surface-tint': {
      'background-color': 'var(--md-sys-color-surface-tint)',
    },

    '.primary': {
      'background-color': 'var(--md-sys-color-primary)',
    },
    '.on-primary': {
      'color': 'var(--md-sys-color-on-primary)',
    },
    '.primary-container': {
      'background-color': 'var(--md-sys-color-primary-container)',
    },
    '.on-primary-container': {
      'color': 'var(--md-sys-color-on-primary-container)',
    },
    '.inverse-primary': {
      'background-color': 'var(--md-sys-color-inverse-primary)',
    },
    '.secondary': {
      'background-color': 'var(--md-sys-color-secondary)',
    },
    '.on-secondary': {
      'color': 'var(--md-sys-color-on-secondary)',
    },
    '.secondary-container': {
      'background-color': 'var(--md-sys-color-secondary-container)',
    },
    '.on-secondary-container': {
      'color': 'var(--md-sys-color-on-secondary-container)',
    },
    '.tertiary': {
      'background-color': 'var(--md-sys-color-tertiary)',
    },
    '.on-tertiary': {
      'color': 'var(--md-sys-color-on-tertiary)',
    },
    '.tertiary-container': {
      'background-color': 'var(--md-sys-color-tertiary-container)',
    },
    '.on-tertiary-container': {
      'color': 'var(--md-sys-color-on-tertiary-container)',
    },
    '.error': {
      'background-color': 'var(--md-sys-color-error)',
    },
    '.on-error': {
      'color': 'var(--md-sys-color-on-error)',
    },
    '.error-container': {
      'background-color': 'var(--md-sys-color-error-container)',
    },
    '.on-error-container': {
      'color': 'var(--md-sys-color-on-error-container)',
    },
    })
  })

  public static readonly PaletteTokens = plugin(({ addUtilities }) => {
    addUtilities({
      'primary-palette-key-color': 'var(--md-sys-color-primary-palette-key-color)',
      'secondary-palette-key-color': 'var(--md-sys-color-secondary-palette-key-color)',
      'tertiary-palette-key-color': 'var(--md-sys-color-tertiary-palette-key-color)',
      'neutral-palette-key-color': 'var(--md-sys-color-neutral-palette-key-color)',
      'neutral-variant-palette-key-color': 'var(--md-sys-color-neutral-variant-palette-key-color)',
    })
  })

  public static readonly FullTokens = [this.FixedTokens, this.ContainerTokens, this.BaseTokens, this.PaletteTokens]

}

export default {
  MaterialTokens
}