import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles';

import { space, pallete } from './tokens';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  dynamicProperties: {
    display: true,
    flexDirection: true,
    alignItems: true,
    justifyContent: true,
    flexWrap: true,
    flexGrow: true,
    gap: space,
    padding: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    paddingBottom: space,
    width: space,
    height: space,
    borderRadius: space,
    fontFamily: space,
    fontSize: space,
    lineHeight: space,
    textAlign: true,
    zIndex: true,
    position: true,
    top: space,
    left: space,
    right: space,
    bottom: space,
    verticalAlign: true,
    margin: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    marginTop: space,
    transform: true,
    transition: true,
    animation: true,
    overflow: true,
    filter: true,
    scale: true,
    rotate: true,
    translate: true,
    border: true,
    outline: true,
  },
  staticProperties: {
    display: ['block', 'flex', 'inline-block', 'inline-flex'],
  },
  shorthands: {
    direction: ['flexDirection'],
    ai: ['alignItems'],
    justify: ['justifyContent'],
    wrap: ['flexWrap'],
    grow: ['flexGrow'],
    place: ['alignItems', 'justifyContent'],
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    typeSize: ['fontSize', 'lineHeight'],
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    x: ['height'],
    y: ['width'],
  },
});

const interactiveProperties = defineProperties({
  conditions: {
    base: {},
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
    hoverStrict: { selector: '&:hover:not(:disabled):not(:focus)' },
  },
  defaultCondition: 'base',
  dynamicProperties: {
    color: pallete,
    backgroundColor: pallete,
    borderColor: pallete,
  },
  shorthands: {
    bg: ['backgroundColor'],
  },
});

export const RealrainbowSprinkles = createRainbowSprinkles(
  responsiveProperties,
  interactiveProperties
);

export type rbSprinklesTypes = Parameters<typeof RealrainbowSprinkles>[0];
