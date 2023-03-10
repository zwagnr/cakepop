import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../contract/contract.css';

export const cbRootRecipe = recipe({
  base: {
    all: 'unset',
    backgroundColor: 'lightgray',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':focus-visible': { outline: '2px solid blue' },
  },
  variants: {
    size: {
      xs: { width: 14, height: 14 },
      sm: { width: 16, height: 16 },
      md: { width: 20, height: 20 },
      lg: { width: 24, height: 24 },
      xl: { width: 28, height: 28 },
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

export const cbIndicatorRecipe = recipe({
  base: {
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    variant: {
      neutral: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.neutral,
          },
        },
      },
      primary: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.primary,
          },
        },
      },
      accent: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.accent,
          },
        },
      },
      success: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.success,
          },
        },
      },
      info: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.info,
          },
        },
      },
      warning: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.warning,
          },
        },
      },
      danger: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.danger,
          },
        },
      },
    },
    size: {
      xs: { width: 14, height: 14 },
      sm: { width: 16, height: 16 },
      md: { width: 20, height: 20 },
      lg: { width: 24, height: 24 },
      xl: { width: 28, height: 28 },
    },
  },
});

export type checkboxRootVariants = RecipeVariants<typeof cbRootRecipe>;
export type checkboxIndicatorVariants = RecipeVariants<typeof cbIndicatorRecipe>;
