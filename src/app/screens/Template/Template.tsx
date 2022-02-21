import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useStyles from './styles';
interface Props {}

const Template: React.FC<Props> = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Template</Text>
    </SafeAreaView>
  );
};

export default Template;
