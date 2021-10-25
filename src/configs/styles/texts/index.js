import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import {wp} from '../size';

const texts = StyleSheet.create({
  capitalize: {textTransform: 'capitalize'},
  uppercase: {textTransform: 'uppercase'},
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  left: {textAlign: 'left'},
  lineThrough: {textDecorationLine: 'line-through'},
  silver: {
    color: colors.silver,
    fontSize: wp(3.5),
  },
  silverBold: {
    color: colors.silver,
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  secondary: {
    color: colors.darkGray,
    fontSize: wp(3.7),
  },
  secondaryMedium: {
    color: colors.darkGray,
    fontSize: wp(4.5),
  },
  secondarySmall: {
    color: colors.darkGray,
    fontSize: wp(3.0),
  },
  secondaryBold: {
    color: colors.darkGray,
    fontSize: wp(3.7),
    fontWeight: 'bold',
  },
  secondaryBoldCenter: {
    color: colors.darkGray,
    fontSize: wp(3.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryExtraBold: {
    color: colors.darkGray,
    fontSize: wp(8),
    fontWeight: 'bold',
  },
  secondaryBoldMedium: {
    color: colors.darkGray,
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  red: {
    color: colors.red,
    fontSize: wp(3.5),
  },
  redMedium: {
    color: colors.red,
    fontSize: wp(4.9),
  },
  redSmall: {
    color: colors.red,
    fontSize: wp(3.0),
  },
  redBold: {
    color: colors.red,
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  redLargeBold: {
    color: colors.red,
    fontSize: wp(5.9),
    fontWeight: 'bold',
  },
  primary: {
    color: colors.primary,
    fontSize: wp(3.5),
  },
  primarySmall: {
    color: colors.primary,
    fontSize: wp(3.0),
  },
  primaryBoldSmall: {
    color: colors.primary,
    fontSize: wp(3.0),
    fontWeight: 'bold',
  },
  primaryBold: {
    color: colors.primary,
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  primaryLargeBold: {
    color: colors.primary,
    fontSize: wp(5.9),
    fontWeight: 'bold',
  },
  primaryExtraLargeBold: {
    color: colors.primary,
    fontSize: wp(8),
    fontWeight: 'bold',
  },
  blue: {
    color: colors.blue,
    fontSize: wp(3.5),
  },
  blueSmall: {
    color: colors.blue,
    fontSize: wp(3.0),
  },
  blueBold: {
    color: colors.blue,
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  blueMedium: {
    color: colors.blue,
    fontSize: wp(4.9),
    marginHorizontal: 10,
  },
  blueMediumBold: {
    color: colors.blue,
    fontSize: wp(4.9),
    fontWeight: 'bold',
  },
  blueLarge: {
    color: colors.blue,
    fontSize: wp(5.9),
  },
  blueLargeBold: {
    color: colors.blue,
    fontSize: wp(5.9),
    fontWeight: 'bold',
  },
  blueExtraLargeBold: {
    color: colors.blue,
    fontSize: wp(8),
    fontWeight: 'bold',
  },
  whiteBoldMedium: {
    fontSize: wp(4.9),
    color: colors.white,
    fontWeight: 'bold',
  },
  white: {
    fontSize: wp(3.5),
    color: colors.white,
  },
  whiteBoldSmall: {
    fontSize: wp(3.0),
    color: colors.white,
    fontWeight: 'bold',
  },
  whiteBold: {
    fontSize: wp(3.5),
    color: colors.white,
    fontWeight: 'bold',
  },
  whiteBoldBig: {
    fontSize: wp(5.9),
    color: colors.white,
    fontWeight: 'bold',
  },
  orange: {
    color: colors.secondary,
    fontSize: wp(4),
  },
  orangeMedium: {
    color: colors.secondary,
    fontSize: wp(4.5),
  },
  orangeSmall: {
    color: colors.secondary,
    fontSize: wp(3.0),
  },
  orangeBold: {
    color: colors.secondary,
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  orangeBoldCenter: {
    color: colors.secondary,
    fontSize: wp(3.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orangeExtraBold: {
    color: colors.secondary,
    fontSize: wp(8),
    fontWeight: 'bold',
  },
  orangeBoldMedium: {
    color: colors.secondary,
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
});

export default texts;
