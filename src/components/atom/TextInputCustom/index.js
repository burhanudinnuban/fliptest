import React, {forwardRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {texts, pages, wp} from '../../../configs/styles';
import {colors} from '../../../constants';
import Gap from '../Gap';

const TextInputForward = forwardRef((props, ref) => {
  return <TextInput ref={ref} {...props} />;
});

const TextInputCustom = ({
  value,
  onChangeText,
  numberOfLines,
  multiline,
  placeholder,
  placeholderTextColor,
  iconLeft,
  iconRight,
  onPressIn,
  onPressOut,
  onPress,
  editable,
  onPressIconRight,
  onPressIconLeft,
  refProf,
  secureTextEntry,
  autoFocus,
  onSubmitEditing,
}) => {
  return (
    <View
      style={[pages.roundedBg(colors.white, 0, 0, 10, null, wp(96), 44), pages.rowCenterBetween, pages.alignCenter]}>
      {iconLeft ? (
        <View onPress={onPressIconLeft} style={pages.padding(0, wp(1))}>
          {iconLeft && iconLeft}
        </View>
      ) : (
        <Gap wp={wp(4)} />
      )}

      {editable === false || onPress ? (
        <TouchableOpacity onPress={onPress && onPress} style={pages.flex}>
          <TextInput
            editable={false}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            allowFontScaling={false}
            style={texts.primary}
            value={value}
            numberOfLines={numberOfLines ? numberOfLines : 1}
          />
        </TouchableOpacity>
      ) : (
        <TextInputForward
          ref={refProf}
          onPressIn={onPressIn}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          onPressOut={onPressOut}
          allowFontScaling={false}
          style={[texts.secondaryBold, pages.hpwp(null, iconRight ? wp(55) : wp(76))]}
          placeholder={placeholder ? placeholder : 'type in here...'}
          // placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.silver}
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
          numberOfLines={numberOfLines ? numberOfLines : 1}
          multiline={multiline ? true : false}
        />
      )}

      <TouchableOpacity onPress={onPressIconRight} style={pages.padding(0, wp(1))}>
        {iconRight && iconRight}
      </TouchableOpacity>
    </View>
  );
};

export default TextInputCustom;
