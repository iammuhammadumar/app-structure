import snakeCase from 'lodash/snakeCase';
/**
 * palette contains the basic colors set
 */

const palette = {
  Orange: '#FF8400',
  Red: '#F13733',
  White: '#FFFFFF',
  Green: '#21B780',
  Black: '#1A1A1A',
  Yellow: '#F3C835',
  Pink: '#9E56CA',
};

/**
 * colors use palette to define
 * different components and base colors
 */

export const color = {
  // other colors
  orange: palette.Orange,
  red: palette.Red,
  white: palette.White,
  green: palette.Green,
  black: palette.Black,
  yellow: palette.Yellow,
  pink: palette.Pink,
};

/**
 * generate color consts from color pallette
 * @param {*} colors
 */
const generateColorPalleteConstants = colors => {
  const colorsList = {};
  Object.keys(colors).forEach(colorKey => {
    colorsList[snakeCase(colorKey).toUpperCase()] = colors[colorKey];
  });
  return colorsList;
};

export const APP_COLORS = generateColorPalleteConstants(color);
