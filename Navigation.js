import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import screens
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";

// Bottom Tab
const Tab = createBottomTabNavigator(); 

function TabGroup() {
  <Tab.Navigator>
    {/* <Tab.Screen name="Feed" component={Feed}></Tab.Screen>
    <Tab.Screen name="Notifications" component={Notifications}></Tab.Screen> */}
    <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
  </Tab.Navigator>;
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
