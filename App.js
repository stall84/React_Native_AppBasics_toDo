import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  };

  const cancelAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelAddHandler} />
        <View>
          <FlatList data={courseGoals} renderItem={itemData => (
              <GoalItem id={itemData.item.id} goalItem={itemData.item.value} 
                        onDelete={removeGoalHandler} />
              )} 
          />                 
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
});
