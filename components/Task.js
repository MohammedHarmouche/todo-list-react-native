import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
            
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding:15,
        borderRadius:10,
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText: {
        maxWidth: '100%'
    },
    circular: {
        width: 11,
        height: 11,
        borderColor: '#250041',
        borderWidth: 2,
        borderRadius: 5
    },
})
