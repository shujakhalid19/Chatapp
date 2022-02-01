import { StatusBar } from 'expo-status-bar';
import {SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Messages from './src/home';
import Profile from './src/profile';
import ChatScreen from './src/chatscreen';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF'
  },
};


export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#FFF", paddingTop: Platform.OS === 'android' && 30 }}>
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home"options={{headerShown:false}}>
          {(props)=><Messages {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Chat"options={{headerShown:false}}>
          {(props)=><ChatScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Profile"options={{headerShown:false}}>
            {(props)=><Profile {...props} />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>    
    
  );
}