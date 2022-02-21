import React, {useState, useEffect} from 'react';
import {Text, Dimensions, View, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import WebView from 'react-native-webview';
import {PropsNavigation} from '@navigation/interfaceNavigation';

import useStyles from './styles';
import Header from '@components/Header/Header';
interface Props {}

const {width, height} = Dimensions.get('window');
const WebViewReddit: React.FC<Props & PropsNavigation> = props => {
  const {route, navigation} = props;
  const styles = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    clearTimeout(1);
  }, []);

  const backToPublications = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={backToPublications} />
      {loading ? (
        <View style={styles.container}>
          <View style={styles.boxLoading}>
            <ActivityIndicator size="large" color="#ff4500" />
            <Text style={styles.textLoading}>Cargando publicación...</Text>
          </View>
        </View>
      ) : (
        <WebView
          source={{uri: `${route.params?.urlSubReddit}`}}
          style={{width, height}}
        />
      )}
    </SafeAreaView>
  );
};

export default WebViewReddit;
