import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-reanimated';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';

// function MyDrawer() {
//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="SignIn" component={SignIn} />
//       <Drawer.Screen name="SignUp" component={SignUp} />
//     </Drawer.Navigator>
//   );
// }

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <>
      {/* <NavigationContainer>
        <MyDrawer />
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Login">
          <Tab.Screen
            options={{
              tabBarLabel: 'signin',
              tabBarIcon: ({focused}) => {
                return <Icon name="ios-book" color="#4F8EF7" size={30} />;
              },
            }}
            name="SignIn"
            component={SignIn}
          />
          <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

{
  /* <Tab.Screen
              options={{
          tabBarLabel: 'signin',
            tabBarIcon: ({focused}) =>
                <Icon name=“search” color=“#808080" size={30}/>
          }}
          name="SignIn"
            component={SignIn}></Tab.Screen> */
}
