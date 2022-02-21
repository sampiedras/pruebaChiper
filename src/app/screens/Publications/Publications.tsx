import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  View,
  ListRenderItemInfo,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {isEmpty} from 'ramda';
import {format} from 'date-fns';
import {fromJS, Map as ImmutableMap} from 'immutable';

import {useDispatch, useSelector} from 'react-redux';
import {getSubReddit} from '@presenter/io/subRedditSlice';
import {PropsNavigation} from '@navigation/interfaceNavigation';

import Header from '@components/Header/Header';
import List from '@components/List/List';

import useStyles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Publications: FC<Props & PropsNavigation> = props => {
  const {navigation} = props;
  const styles = useStyles();
  const dispatch = useDispatch();
  const itemReddit = useSelector(
    ({subReddit}: {subReddit: any}) => subReddit.subReddit,
  );
  const [loading, setLoading] = useState(false);
  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [dataSubReddit, setDataSubReddit] = useState<any>(fromJS([]));

  useEffect(() => {
    setLoading(true);
    async function fetch() {
      await getSubReddit(dispatch);
      setLoading(false);
    }
    fetch();
  }, [dispatch]);

  useEffect(() => {
    if (itemReddit?.data?.children.length > 0) {
      setDataSubReddit(fromJS(itemReddit?.data?.children));
    }
  }, [itemReddit?.data?.children]);

  const onRefresh = async () => {
    setLoadingRefresh(true);
    await getSubReddit(dispatch);
    setLoadingRefresh(false);
  };

  const goToWebView = (urlSubReddit: string) => () => {
    navigation.navigate('WebViewReddit', {urlSubReddit});
  };

  const renderItem = ({
    item,
  }: ListRenderItemInfo<ImmutableMap<string, any>>): JSX.Element => {
    return (
      <Pressable
        style={styles.contentRender}
        onPress={goToWebView(`${item.getIn(['data', 'url'])}`)}>
        <Text style={styles.textDate}>
          {format(new Date(item.getIn(['data', 'created_utc'])), 'eeee dd ')}
          of {format(new Date(item.getIn(['data', 'created_utc'])), 'MMM yyyy')}
        </Text>
        <View style={styles.boxRow}>
          {item.getIn(['data', 'thumbnail']) ? (
            <Image
              source={{uri: `${item.getIn(['data', 'thumbnail'])}`}}
              style={styles.thumbnail}
            />
          ) : (
            <MaterialCommunityIcons
              name="image-off"
              color="#ff4500"
              size={70}
            />
          )}
          <View style={styles.boxText}>
            <Text numberOfLines={4} style={styles.textAuthor}>
              {item.getIn(['data', 'author'])}{' '}
              <Text style={styles.textTitle}>
                shared {item.getIn(['data', 'title'])}
              </Text>
            </Text>
          </View>
        </View>
        <View style={[styles.boxRow, styles.boxBetween]}>
          <View style={styles.boxRow}>
            <MaterialCommunityIcons name="star" color="#ff4500" size={20} />
            <Text>{`${item.getIn(['data', 'score'])}`}</Text>
          </View>
          <Text>comments: {item.getIn(['data', 'num_comments'])}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isEmpty(itemReddit?.data?.children) && !loading && (
        <View style={styles.flex}>
          <Header hidden />
          <List
            dataSource={dataSubReddit}
            renderItem={renderItem}
            extraData={itemReddit}
            onRefresh={onRefresh}
            refreshing={loadingRefresh}
          />
        </View>
      )}
      {loading && (
        <View style={styles.boxLoading}>
          <ActivityIndicator size="large" color="#ff4500" />
          <Text style={styles.textLoading}>Cargando publicaciones...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Publications;
