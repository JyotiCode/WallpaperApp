import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen1 from './views/Screen1';
import {RecoilRoot} from 'recoil';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen2 from './views/Screen2';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="S1">
          <Stack.Screen
            name="S1"
            component={Screen1}
            options={{
              headerStyle: {
                backgroundColor: '#42f5b0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
              title: 'Home',
            }}
            //options={{headerShown:false}}
          />
          <Stack.Screen
            name="S2"
            component={Screen2}
            options={{
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
              title: 'Back',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    //flex:1,

    width: '100%',
    height: '100%',
    //backgroundColor:'blue',
    alignItems: 'center',
    //justifyContent:'center'
  },
});
