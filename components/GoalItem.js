import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
            <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
              <View style={styles.listItem}>
                <Text>{props.goalItem}</Text>
              </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#e9e9e9',
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
      }
});


export default GoalItem;