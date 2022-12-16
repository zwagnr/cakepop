import { vars } from '../../contract/contact';
import { style } from '@macaron-css/core';
import { recipe, RecipeVariants, createVar } from '@macaron-css/core';

export const bgVar = createVar();
export const pVar = createVar();

export const containerVars = { bgVar, pVar };

export const containerRecipe = recipe({
  base: {},
  variants: {
    overrides: {
      false: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'blue',
      },
    },
    mode: {
      fluid: {},
      responsive: {},
    },
    maxSize: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
  },
  defaultVariants: {
    overrides: false,
  },
  compoundVariants: [
    {
      variants: {
        mode: 'fluid',
        maxSize: 'xs',
      },
      style: { maxWidth: vars.fluidContainerSizes.xs },
    },
    {
      variants: {
        mode: 'fluid',
        maxSize: 'sm',
      },
      style: {
        maxWidth: vars.fluidContainerSizes.sm,
      },
    },
    {
      variants: {
        mode: 'fluid',
        maxSize: 'md',
      },
      style: { maxWidth: vars.fluidContainerSizes.md },
    },
    {
      variants: {
        mode: 'fluid',
        maxSize: 'lg',
      },
      style: {
        maxWidth: vars.fluidContainerSizes.lg,
      },
    },
    {
      variants: {
        mode: 'fluid',
        maxSize: 'xl',
      },
      style: {
        maxWidth: vars.fluidContainerSizes.xl,
      },
    },
    {
      variants: {
        mode: 'responsive',
        maxSize: 'xs',
      },
      style: {
        maxWidth: vars.breakpoints.xs,
      },
    },
    {
      variants: {
        mode: 'responsive',
        maxSize: 'sm',
      },
      style: {
        '@media': {
          //[`screen and (min-width: ${breakpoints.xs}px)`]: {
          //  maxWidth: vars.breakpoints.xs,
          // },
          'screen and (min-width: 320px)': {
            maxWidth: vars.breakpoints.xs,
          },
          'screen and (min-width: 480px)': {
            maxWidth: vars.breakpoints.sm,
          },
        },
      },
    },
    {
      variants: {
        mode: 'responsive',
        maxSize: 'md',
      },
      style: {
        '@media': {
          'screen and (min-width: 320px)': {
            maxWidth: vars.breakpoints.xs,
          },
          'screen and (min-width: 480px)': {
            maxWidth: vars.breakpoints.sm,
          },
          'screen and (min-width: 768px)': {
            maxWidth: vars.breakpoints.md,
          },
        },
      },
    },
    {
      variants: {
        mode: 'responsive',
        maxSize: 'lg',
      },
      style: {
        '@media': {
          'screen and (min-width: 320px)': {
            maxWidth: vars.breakpoints.xs,
          },
          'screen and (min-width: 480px)': {
            maxWidth: vars.breakpoints.sm,
          },
          'screen and (min-width: 768px)': {
            maxWidth: vars.breakpoints.md,
          },
          'screen and (min-width: 1200px)': {
            maxWidth: vars.breakpoints.lg,
          },
        },
      },
    },
    {
      variants: {
        mode: 'responsive',
        maxSize: 'xl',
      },
      style: {
        '@media': {
          'screen and (min-width: 320px)': {
            maxWidth: vars.breakpoints.xs,
          },
          'screen and (min-width: 480px)': {
            maxWidth: vars.breakpoints.sm,
          },
          'screen and (min-width: 768px)': {
            maxWidth: vars.breakpoints.md,
          },
          'screen and (min-width: 1200px)': {
            maxWidth: vars.breakpoints.lg,
          },
          'screen and (min-width: 1536px)': {
            maxWidth: vars.breakpoints.xl,
          },
        },
      },
    },
    //
    //
    //
  ],
});
export type ContainerVariants = RecipeVariants<typeof containerRecipe>;
