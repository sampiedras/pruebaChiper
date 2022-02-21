import React from 'react';
import {Pressable, View, Image} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useStyles from './styles';
import {LOGO} from '@assets/media';

interface Props {
  hidden?: boolean;
  onPress?: () => void;
}

const Header: React.FC<Props> = props => {
  const {hidden = false, onPress} = props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {hidden ? (
        <View style={styles.viewEmpty} />
      ) : (
        <Pressable onPress={onPress}>
          <MaterialCommunityIcons
            name="chevron-left"
            color="#ff4500"
            size={30}
          />
        </Pressable>
      )}
      <Image style={styles.logo} source={LOGO} />
      <View style={styles.viewEmpty} />
    </View>
  );
};

export default Header;
