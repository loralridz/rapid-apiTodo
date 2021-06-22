import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from "./styles"

export const UserDetail = ({ route }) => {
    const { userId } = route.params;
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(json => setUser(json))
    }, [])
    return (
        <View style={styles.container}>
            {user ?
                <>
                    <Text style={styles.text}>Name : {user.name}</Text>
                    <Text style={styles.text}>Username : {user.username}</Text>
                    <Text style={styles.text}>Email : {user.email}</Text>
                    <Text style={styles.text}>Address : {user.address?.street}, {user.address?.suite} {user.address?.city}</Text>
                </> : null}
        </View>
    )
}
