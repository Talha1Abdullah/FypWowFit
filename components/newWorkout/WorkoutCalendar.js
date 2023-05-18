import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Agenda, Calendar } from 'react-native-calendars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WorkoutCalendar = () => {
  return (
    <View  >
  
     <TouchableOpacity  >
      <Icon
      size={30}
      name={'calendar-month-outline'}
      color={'black'}
      />
      </TouchableOpacity>
      <View style={Styles.container} >
      <Agenda></Agenda>
      </View>
     </View>
    
 

  )
}
const Styles = StyleSheet.create({
   
    container: {
     
        flex: 1,
        backgroundColor: '#E8EAED',
    },
});
export default WorkoutCalendar;