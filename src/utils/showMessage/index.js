import Toast from 'react-native-toast-message';

export const showError = (message, description, onPress, time, position) => {
  Toast.show({
    type: 'error',
    text1: message ? message : 'Something Wrong.',
    text2: description,
    position: position ? position : 'top',
    visibilityTime: time ? time : 3000,
    onPress: () => {
      Toast.hide();
      onPress && onPress();
    },
  });
};

export const showSuccess = (message, description, onPress, time) => {
  Toast.show({
    type: 'success',
    text1: message ? message : 'Success.',
    text2: description,
    position: 'top',
    visibilityTime: time ? time : 3000,
    onPress: () => {
      Toast.hide();
      onPress && onPress();
    },
  });
};

export const showInfo = (message, description, onPress, time) => {
  Toast.show({
    type: 'info',
    text1: message ? message : 'Information',
    text2: description,
    position: 'top',
    visibilityTime: time ? time : 3000,
    onPress: () => {
      Toast.hide();
      onPress && onPress();
    },
  });
};
