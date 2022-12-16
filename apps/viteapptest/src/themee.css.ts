import { createTheme } from '@vanilla-extract/css';
import { vars } from '@cakepop/react'
import { pallete } from '@cakepop/react';

export const customTheme = createTheme(vars, {
  color: {
    background: '0deg 0% 45%',
    text: 'black',
    textContrast: 'white',
    focus: pallete.blue300,
    //
    neutral: pallete.neutral500,
    neutralHover: pallete.neutral600,
    neutralShadow: pallete.neutral400,
    //
    primary: 'green',
    primaryHover: pallete.blue600,
    primaryShadow: pallete.blue400,
    //
    accent: pallete.purple500,
    accentHover: pallete.purple600,
    accentShadow: pallete.purple400,
    //
    success: pallete.green500,
    successHover: pallete.green600,
    successShadow: pallete.green400,
    //
    info: pallete.sky500,
    infoHover: pallete.sky600,
    infoShadow: pallete.sky400,
    //
    warning: pallete.orange500,
    warningHover: pallete.orange600,
    warningShadow: pallete.orange400,
    //
    danger: pallete.red500,
    dangerHover: pallete.red600,
    dangerShadow: pallete.red400,
    //
    secondary: 'red',
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '32px',
  },
  fluidContainerSizes: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1200px',
    xl: '1536px',
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1200px',
    xl: '1536px',
  },
  media: {
    xs: 'only screen and (min-width: 320px) and (max-width: 479px)',
    sm: 'only screen and (min-width: 480px) and (max-width: 769px)',
    md: 'only screen and (min-width: 768px) and (max-width: 1023px)',
    lg: 'only screen and (min-width: 768px) and (max-width: 1023px)',
    xl: 'only screen and (min-width: 768px) and (max-width: 1023px)',
  },
});
