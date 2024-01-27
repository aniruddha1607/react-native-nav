import { View, Text, TextInput, Button, Modal, Image  } from 'react-native'
import React from 'react'
import { useState } from 'react';

const GoalInput = ({pressAction, modalState, disableModal}) => {

  const[enteredGoalText, setEnteredGoalText] = useState('');  

  function handleChange(input) {
    setEnteredGoalText(input)
  }

  function handlePress() {
    pressAction(enteredGoalText)
    setEnteredGoalText('')
  }


  return (
    <Modal visible={modalState} animationType='slide'>
    <View className=' flex-1 justify-center space-x-2 items-center border-b-2 pb-6 border-gray-400 p-10 bg-slate-600'>
        <Image source={require('../assets/goal.png')} className='h-20 w-20'/>
        <TextInput 
        placeholder='Enter your goals' 
        className='w-80 h-14 border-gray-400 border-2 rounded-lg p-2' 
        onChangeText={handleChange}
        value={enteredGoalText} 
        ></TextInput>
        <View className='mt-5'>
        <View className='bg-gray-400 p-1 rounded-lg mb-3'><Button title='Add goal' onPress={handlePress} color={'black'}/></View>
        <View className='bg-gray-400 p-1 rounded-lg mb-3'><Button title='Cancel' onPress={disableModal} color={'black'}/></View>
        </View>
        
      </View>
    </Modal>
  )
}

export default GoalInput
