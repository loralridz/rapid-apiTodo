import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

export const Item = ({ data,onPress }) => (
    <View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => onPress(data.id)}
        >
            <Text   style={styles.todo}>{data.id} : {data.title}</Text>
        </TouchableOpacity>
    </View>
);