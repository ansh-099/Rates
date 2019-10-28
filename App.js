import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Screen : SearchScreen,
  
  },
  {
    initialRouteName: 'Screen',
    defaultNavigationOptions: {
      title: 'Food'
    }
  }
);

export default createAppContainer(navigator);
