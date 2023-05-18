import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'

const WorkoutDate = () => {


    const [date,setDate]= useState(new Date());
    const onChanege = date =>{
        setDate(date);
    }
    return (
    <View>
      <Calendar onChanege={onChanege} value={date} />     
    </View>
  )
}

export default WorkoutDate