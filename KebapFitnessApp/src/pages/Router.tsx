import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import MemberSign from './MemberSign';
import MemberResult from './MemberResult';
import { RootStackParamList } from '../types/RootStackParamList';


const Stack = createNativeStackNavigator<RootStackParamList>();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="MemberSignScreen" component={MemberSign} />
                <Stack.Screen name="MemberResultScreen" component={MemberResult} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
