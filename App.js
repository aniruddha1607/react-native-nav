import { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {


  const[modalVisible, setModalVisible] = useState(false);
  const[goals, setGoals] = useState([]);

  function handlePress(enteredGoalText) {
    setGoals((prevValue) => [...prevValue, { text: enteredGoalText, id: Math.random().toString()}]); 
  }


  function deleteGoalItem(id) {
    setGoals((prevValue) => {
      return prevValue.filter((goal) => goal.id !== id)
    });
  }

  function modalVisibility() {
    setModalVisible(true);
  }

  function modalDisable() {
    setModalVisible(false);
  }


  return (
    <View className='pt-7 px-4 flex-1 flex-col'>
      <Button title='Add new Goal' onPress={modalVisibility}/>
      <GoalInput pressAction={handlePress} modalState={modalVisible} disableModal={modalDisable}/>
      <View> 
      <FlatList

        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              displayItem={itemData.item}
              deleteItem={deleteGoalItem}
            />
          )
        }}
        
        keyExtractor={(item, index) => {
          return item.id; 
        }}
      />
        
         
      </View>
      
    </View>
  );
}


