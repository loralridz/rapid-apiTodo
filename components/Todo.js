import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native';
import { styles } from "./styles";
import { Item } from "./Item"

export const Todo = ({navigation}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const onPress = (id) => {
        navigation.navigate('Todo Details', {
            id: id
        })
    }

    const renderItem = ({ item }) => <Item data={item} onPress={onPress} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}
