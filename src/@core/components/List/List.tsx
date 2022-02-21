import React from 'react';
import {ListRenderItem, Text, View, VirtualizedList} from 'react-native';
import {List as ImmutableList, Map as ImmutableMap} from 'immutable';

import useStyles from './styles';

interface Props {
  dataSource: ImmutableList<ImmutableMap<string, any>>;
  renderItem: ListRenderItem<ImmutableMap<string, any>> | null | undefined;
  refreshing?: boolean;
  onEndReached?: () => void;
  onRefresh?: () => void;
  extraData: any;
}

const List: React.FC<Props> = props => {
  const styles = useStyles();

  const {dataSource} = props;
  const getItem = (data: any, index: number) => data.get(index);
  const getItemCount = () => dataSource.size;
  const keyExtractor = (item: ImmutableMap<string, any>, index: number) =>
    `${item.size}-${index}`;
  const noFoundData = () => (
    <Text style={styles.text}>No hay información *</Text>
  );

  return (
    <View style={styles.container}>
      <VirtualizedList
        {...props}
        decelerationRate="fast"
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={5}
        initialNumToRender={1}
        getItem={getItem}
        getItemCount={getItemCount}
        data={dataSource}
        keyExtractor={keyExtractor}
        ListEmptyComponent={noFoundData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default List;
