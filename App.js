import React from 'react';
import { Todo } from './components/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoDetail } from './components/TodoDetail';
import { UserDetail } from './components/UserDetail';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todo's List" component={Todo} />
      <Stack.Screen name="Todo Details" component={TodoDetail} />
      <Stack.Screen name="User Details" component={UserDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}