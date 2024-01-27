import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TrashIcon } from 'react-native-heroicons/outline';

const GoalItem = ({displayItem, deleteItem}) => {

    function deleteCurrentItem() {
        deleteItem(displayItem.id)
    }  


  return (
    <View className='flex-row justify-between w-full mt-2 p-2 bg-gray-200 rounded-lg'>
          <Text 
          className = 'font-bold text-lg'
          >
          {displayItem.text}
          </Text>
          <TouchableOpacity onPress={deleteCurrentItem}>
            <TrashIcon color={'black'}/>
          </TouchableOpacity>
          
          </View>
  )
}

export default GoalItem