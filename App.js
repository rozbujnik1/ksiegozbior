import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ListItem} from "react-native-elements";

function HomeScreen({ navigation }) {
    const list = [
        {
            id: '1',
            title: 'Książka 1'
        },
        {
            id: '2',
            title: 'Książka 2'
        },
        {
            id: '3',
            title: 'Książka 3'
        },
        {
            id: '4',
            title: 'Książka 4'
        },
        {
            id: '5',
            title: 'Książka 5'
        },
    ];
  return (
    <View>
        {
            list.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    onPress={() => navigation.navigate('Details')}
                    bottomDivider
                    chevron
                />
            ))
        }
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;