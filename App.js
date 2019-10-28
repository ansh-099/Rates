import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import ResultList from './src/components/ResultList';

const navigator = createStackNavigator(
  {
    Screen : SearchScreen,
    ResultsShow: ResultsShowScreen,
  
  },
  {
    initialRouteName: 'Screen',
    defaultNavigationOptions: {
      title: 'Explore Food'
    }
  }
);

export default createAppContainer(navigator);
