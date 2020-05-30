import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, ListItem } from 'react-native-elements'
import * as React from "react";

export function DetailsScreen({route, navigation }) {
    const{item} = route.params;



    return (
        <View>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(item.id)}</Text>
            <Text>itemId: {JSON.stringify(item.title)}</Text>
       


        </View>
    );
}