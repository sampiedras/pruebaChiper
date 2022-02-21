import {
  RouteProp,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';

export interface PropsNavigation {
  route: RouteProp<ParamListBase>;
  navigation: NavigationProp<ParamListBase, string, any, any>;
}
