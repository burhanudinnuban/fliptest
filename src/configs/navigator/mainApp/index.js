import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {Root} from '../';
import {pages} from '../../styles';
import {colors} from '../../../constants';
import Toast from 'react-native-toast-message';

const MainApp = () => {
  return (
    <SafeAreaView style={pages.flexPrimary}>
      <StatusBar backgroundColor={colors.primary} />
      <Root />
      <Toast ref={ref => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default MainApp;
