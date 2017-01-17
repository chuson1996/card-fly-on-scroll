import { spring, presets } from 'react-motion';

export const moveFaster = (val) => spring(val, {
  ...presets.noWobble,
  stiffness: 250
});

export const moveFast = (val) => spring(val, {
  ...presets.noWobble,
  stiffness: 200
});

export const move = (val) => spring(val, {
  ...presets.noWobble,
  stiffness: 170
});

export const moveSlow = (val) => spring(val, {
  ...presets.noWobble,
  stiffness: 140
});

export const moveSlower = (val) => spring(val, {
  ...presets.noWobble,
  stiffness: 100
});

export const moveSlowerer = (val) => spring(val, {
  ...presets.noWobble,
  stiffness: 60
});
