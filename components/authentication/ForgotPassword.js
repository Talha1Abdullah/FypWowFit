import { View, TextInput, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import CustomButton from '../buttons/CustomButton'
import BackArrowIcon from 'react-native-vector-icons/Ionicons'
const ForgotPassword = props => {
  const{navigation} = props;
  return (
    <View>
      <Pressable onPress={() =>{
            navigation.navigate('Login')
          }} style={{marginTop:10,marginLeft:10}}>
          <BackArrowIcon name="chevron-back"
          size={24}
          color="black"
          />
          </Pressable>
      <TextInput
        multiline
        maxLength={40}
        placeholder="Your Email"
        style={TextStyles.email}
        
/>
<CustomButton title={'Reset Password'}></CustomButton>
    </View>
  )
}
const TextStyles = StyleSheet.create({
    email: {
      position: 'absolute',
      height: 48,
      left: 24,
      right: 24,
      top: 50,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#E3E5E6',
      borderRadius: 8,
      paddingLeft:10,
      
    },

});
export default ForgotPassword;