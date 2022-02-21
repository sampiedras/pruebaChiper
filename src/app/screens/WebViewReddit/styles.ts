import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxLoading: {
      alignItems: 'center',
      marginTop: -60,
    },
    textLoading: {
      fontSize: 16,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
};
