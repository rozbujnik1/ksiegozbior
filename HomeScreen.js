import {Button, Text, View} from "react-native";
import {ListItem} from "react-native-elements";
import * as React from "react";
import Data from './Data';

export function HomeScreen({ navigation }) {
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
            <Button
                title="Go to Camera"
                onPress={() => navigation.navigate('Camera')}
            />
            {
                Data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        onPress={() => navigation.navigate('Details',{item:item})}
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