/**
 * The available spacing.
 * Please stick with these, and not freestyle it everywhere.
 *
 * 0 = none    - nothing. only here to bust out of a zero-based array.
 * 1 = xsmall  - elements contextually close to each other
 * 2 = small   - for groups of closely related items or perhaps borders
 * 3 = medium  - less than default
 * 4 = default - default spacing beween components
 * 5 = large   - between groups of content that aren't related?
 * 6 = huge    - huge space around components
 */

import {scale} from '../utils/media';

export const spacing = {
  xsmall: scale(4),
  small: scale(8),
  medium: scale(12),
  default: scale(16),
  large: scale(24),
  xlarge: scale(32),
  huge: scale(48),
};

export const radius = {
  default: scale(14),
  double: scale(8),
  half: scale(30),
  full: scale(50),
};
