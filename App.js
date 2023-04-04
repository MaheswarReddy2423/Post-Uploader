import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PostScreen from "./src/PostScreen";
import DetailsScreen from "./src/DetailsScreen";
import HomeScreen from "./src/HomeScreen";
import EditScreen from "./src/EditScreen";
const navigator = createStackNavigator(
  {
      Post : PostScreen,
      Details : DetailsScreen,
      Home : HomeScreen,
      Edit : EditScreen,
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions : {
      title : "New Post"
    }
  }
);

export default createAppContainer(navigator);