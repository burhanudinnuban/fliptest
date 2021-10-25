import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {texts, pages, wp} from '../../configs/styles';
import {Gap} from '../../components';
import {IMGFlip} from '../../assets/images';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);

  return (
    <View style={{...pages.center, ...pages.flexPrimary}}>
      <Image source={IMGFlip} style={pages.hpwp(wp(35), wp(35))} />
    </View>
  );
};

export default Splash;
