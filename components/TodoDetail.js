import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from "./styles";

export const TodoDetail = ({ route, navigation }) => {

    const { id } = route.params;
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => setItem(json))
    }, [])

    const onPress = (id) => {
        navigation.navigate('User Details', {
            userId: id
        })
    }

    return (
        <View style={styles.container1}>
            {item ? <><Text style={styles.text}>Title : {item.title}</Text>
                <Text style={styles.text}>Completion Status : {item.completed?.toString()}</Text>
                <Text style={styles.text} onPress={() => onPress(item.userId)}>User :{item.userId}</Text></> : null}
        </View>
    )
}
