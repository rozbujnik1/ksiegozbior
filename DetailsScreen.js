import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';
import * as React from "react";
import {ListItem} from "react-native-elements";

export function DetailsScreen({route, navigation }) {
    const{item} = route.params;



    return (
        <View>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(item.id)}</Text>
            <Text>itemId: {JSON.stringify(item.title)}</Text>
            <TextInput
            placeholder="id"/>
       


        </View>
    );
}