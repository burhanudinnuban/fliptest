import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {wp} from '../../../configs/styles';
import {colors} from '../../../constants';

const ButtonOutline = ({
  title,
  onPress,
  borderRadius,
  titleColor,
  titleAlign,
  borderColor,
  height,
  disabled,
  width,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.conatiner(
        borderRadius,
        borderColor,
        height,
        width,
        backgroundColor,
      )}
      onPress={onPress}>
      <Text
        allowFontScaling={false}
        style={styles.title(titleColor, titleAlign)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;

const styles = StyleSheet.create({
  title: (titleColor, titleAlign) => ({
    fontSize: wp(3.9),
    color: titleColor ? titleColor : colors.primary,
    textAlign: titleAlign ? 'center' : null,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  }),
  conatiner: (borderRadius, borderColor, height, width, backgroundColor) => ({
    borderWidth: 1,
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    height: height ? height : 44,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor ? backgroundColor : colors.secondary,
    borderRadius: borderRadius ? borderRadius : 10,
    borderColor: borderColor ? borderColor : colors.secondary,
  }),
});
