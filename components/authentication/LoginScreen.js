
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,StyleSheet,Text,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../buttons/CustomButton';
import BackArrowIcon from 'react-native-vector-icons/Ionicons'

// import { Text } from 'react-native-paper';

const LogIn= props =>{
  const{navigation} = props;

  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return(
    
    <View>
       <Pressable onPress={() =>{
            navigation.navigate('Start')
          }} style={{marginTop:10,marginLeft:10}}>
          <BackArrowIcon name="chevron-back"
          size={24}
          color="black"
          />
          </Pressable>
       <TextInput
        multiline
        maxLength={40}
        placeholder="Username"
        style={TextStyles.username}
        
/>
  <TextInput
    secureTextEntry={!isPasswordVisible}
    // Other TextInput props...
    style={TextStyles.password}
    placeholder='Password'
  />
  
  <TouchableOpacity
    style={{ position: 'absolute', top: 185, right: 32 }}
    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
  >
    <Icon
      name={isPasswordVisible ? 'eye-slash' : 'eye'}
      size={20}
      color="gray"
    />
  </TouchableOpacity>
  <TouchableOpacity
  onPress={()=> {
    navigation.navigate('ForgetPassword');
  }}>
  <Text style={TextStyles.text}>Forget Password?</Text>
  </TouchableOpacity>
  <CustomButton title={'Login'}></CustomButton>
  
</View>

  );
}

const TextStyles = StyleSheet.create({
  username: {
    position: 'absolute',
    height: 48,
    left: 24,
    right: 24,
    top: 90,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E5E6',
    borderRadius: 8,
    paddingLeft:10,
    
  },

  password:{
    position: 'absolute',
    height: 48,
    left: 24,
    right: 24,
    top: 154,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E5E6',
    borderRadius: 8,
    paddingLeft:10,
  },
  text:{
    position: 'absolute',
  height: 48,
  left: 130,
  right: 34,
  bottom: 528,
  borderRadius: 48,
  // backgroundColor: 'white',
  top:228,
  color:'blue',
  }
});

export default LogIn;