import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-between',
      paddingHorizontal: '2.5%',
      height: 56,
      width: '100%',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    logo: {
      width: 46,
      height: 46,
    },
    viewEmpty: {
      width: 25,
    },
  });
};
