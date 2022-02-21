import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    flex: {
      flex: 1,
    },
    contentRender: {
      backgroundColor: 'white',
      alignSelf: 'center',
      paddingVertical: 16,
      paddingHorizontal: 8,
      borderTopWidth: 1,
      borderTopColor: '#B7BECD',
      width: '95%',
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
    thumbnail: {
      width: 80,
      height: 80,
      borderRadius: 16,
    },
    boxRow: {
      flexDirection: 'row',
    },
    boxText: {
      width: '78%',
      marginLeft: 6,
    },
    textDate: {
      color: '#333333',
      textAlign: 'right',
      fontSize: 10,
      marginBottom: 4,
      fontWeight: 'normal',
    },
    boxBetween: {
      justifyContent: 'space-between',
      marginTop: 4,
    },
    textAuthor: {
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
    },
    textTitle: {
      fontWeight: '400',
      textAlign: 'left',
      fontSize: 16,
    },
  });
};
