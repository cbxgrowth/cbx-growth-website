
export const keyframes = {
  'accordion-down': {
    from: {
      height: '0'
    },
    to: {
      height: 'var(--radix-accordion-content-height)'
    }
  },
  'accordion-up': {
    from: {
      height: 'var(--radix-accordion-content-height)'
    },
    to: {
      height: '0'
    }
  },
  'fade-in': {
    '0%': {
      opacity: '0',
      transform: 'translateY(10px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'fade-out': {
    '0%': {
      opacity: '1',
      transform: 'translateY(0)'
    },
    '100%': {
      opacity: '0',
      transform: 'translateY(10px)'
    }
  },
  'pulse-glow': {
    '0%, 100%': {
      opacity: '1',
      transform: 'scale(1)'
    },
    '50%': {
      opacity: '0.8',
      transform: 'scale(1.03)'
    }
  },
  'rotate-slow': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  'float': {
    '0%, 100%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-10px)'
    }
  },
  'shimmer': {
    '0%': {
      backgroundPosition: '-500px 0'
    },
    '100%': {
      backgroundPosition: '500px 0'
    }
  },
  'float-gentle': {
    '0%, 100%': {
      transform: 'translateY(0) rotate(0deg)'
    },
    '25%': {
      transform: 'translateY(-5px) rotate(1deg)'
    },
    '75%': {
      transform: 'translateY(5px) rotate(-1deg)'
    }
  },
  'glow-pulse': {
    '0%, 100%': {
      opacity: '0.8',
      transform: 'scale(1)'
    },
    '50%': {
      opacity: '1',
      transform: 'scale(1.05)'
    }
  },
  'slide-up-fade': {
    '0%': {
      opacity: '0',
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'sparkle': {
    '0%, 100%': {
      opacity: '0'
    },
    '50%': {
      opacity: '1',
      filter: 'brightness(1.5) blur(2px)'
    }
  },
  'bounce-subtle': {
    '0%, 100%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-5px)'
    }
  },
  'breathe': {
    '0%, 100%': {
      boxShadow: '0 0 20px 5px rgba(100, 255, 218, 0.3)'
    },
    '50%': {
      boxShadow: '0 0 30px 8px rgba(100, 255, 218, 0.5)'
    }
  },
  'pulse-subtle': {
    '0%, 100%': {
      opacity: '0.8'
    },
    '50%': {
      opacity: '1'
    }
  }
};
