
import { colors } from './colors';
import { keyframes } from './keyframes';
import { animations } from './animations';
import { fontFamily } from './fonts';
import { backgroundImage } from './backgrounds';

export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px'
    }
  },
  extend: {
    fontFamily,
    colors,
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    keyframes,
    animation: animations,
    backgroundImage
  }
};

export { colors, keyframes, animations, fontFamily, backgroundImage };
