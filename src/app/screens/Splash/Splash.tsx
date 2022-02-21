import React, {useEffect, useState} from 'react';
import {Image, LayoutAnimation, UIManager, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StackActions} from '@react-navigation/native';
import {PropsNavigation} from '@navigation/interfaceNavigation';

import useStyles from './styles';
import {LOGO} from '@assets/media';

interface Props {}

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const boxWidth = 120;
const Splash: React.FC<Props & PropsNavigation> = props => {
  const {navigation} = props;
  const styles = useStyles();

  const [scaled, setScale] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setScale(true);
    }, 2000);
    clearTimeout(1);
    if (scaled) {
      const resetAction = StackActions.replace('Publications');
      navigation.dispatch(resetAction);
    }
  }, [scaled, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={LOGO}
        style={{
          height: scaled ? boxWidth * 2 : boxWidth,
          width: scaled ? boxWidth * 2 : boxWidth,
        }}
      />
    </SafeAreaView>
  );
};

export default Splash;
