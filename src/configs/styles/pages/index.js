import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import {wp} from '../size';

const pages = StyleSheet.create({
  flex: {flex: 1},
  right: {justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end'},
  flexPrimary: {flex: 1, backgroundColor: colors.silver},
  flexStartRow: {justifyContent: 'center', alignItems: 'flex-start'},
  flexCenterRow: {justifyContent: 'center', alignItems: 'center'},
  flexEndRow: {justifyContent: 'center', alignItems: 'flex-end'},
  barView: {
    height: wp(12),
    width: wp(100),
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(2),
  },
  absolute: {position: 'absolute'},
  transparant: {backgroundColor: 'rgba(70, 70, 70, 0.8)'},
  centerAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopLeftAbsolute: {
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopRightAbsolute: {
    position: 'absolute',
    top: 1,
    right: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {flexDirection: 'row'},
  padding: (padding, paddingHorizontal, paddingVertical) => ({
    padding: padding,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
  }),
  margin: (margin, marginHorizontal, marginVertical) => ({
    margin: margin,
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
  }),
  marginLeft: (marginLeft) => ({
    marginLeft: marginLeft,
  }),
  padding10: {padding: 10},
  padding15: {padding: 15},
  paddingHorizontal15: {paddingHorizontal: 15},
  borderBottom: (borderBottomLeftRadius, borderBottomRightRadius) => ({
    borderBottomLeftRadius: borderBottomLeftRadius,
    borderBottomRightRadius: borderBottomRightRadius,
  }),
  backgoundColor: (backgroundColor) => ({backgroundColor: backgroundColor}),
  roundedBg: (borderColor, padding, margin, borderRadius, backgroundColor, width, height) => ({
    borderRadius: borderRadius ? borderRadius : 0,
    padding: padding && padding,
    margin: margin && margin,
    borderColor: borderColor && borderColor,
    borderWidth: borderColor && 1,
    backgroundColor: backgroundColor ? backgroundColor : colors.white,
    width: width && width,
    height: height && height,
  }),
  borderRadius: (borderRadius, borderLeftRadius, borderRightRadius) => ({
    borderBottomLeftRadius: borderLeftRadius,
    borderBottomRightRadius: borderRightRadius,
    borderTopLeftRadius: borderLeftRadius,
    borderTopRightRadius: borderRightRadius,
    borderRadius: borderRadius,
  }),
  padding5: {paddingHorizontal: 10, paddingVertical: 5},
  paddingHorizontal10: {paddingHorizontal: 10},
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenterAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowCenterBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex_end: {justifyContent: 'flex-end', alignItems: 'center'},
  flex_end_column: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: wp(2),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  hpwp: (height, width) => ({
    width: width ? width : null,
    height: height ? height : null,
  }),
  top: (top) => ({
    top: top,
  }),
  bottom: (bottom) => ({
    bottom: bottom,
  }),
});

export default pages;
