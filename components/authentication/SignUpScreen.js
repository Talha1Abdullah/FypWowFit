import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../buttons/Button'
import axios from 'axios';
import BackArrowIcon from 'react-native-vector-icons/Ionicons'

const SignUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please Enter Valid Email')
    .required('Email is required'),
  password: yup
  .string()
  .max(14, ({max}) => `Password must be ${max} characters long`)
  .min(8, ({min}) => `Password must be atleast ${min} characters`)
  .required('Password is required')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,14}$/,
    'Must be between 8 to 14 characters long,one Lowercase,one digit and one special character'
  )
});
const SignUpScreen = props => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {navigation}=props;
  return (
    <Formik
    //   initialValues={{email: '', password: ''}}
    //   validateOnMount={true}
    //   validationSchema={SignUpValidationSchema}
    //   onSubmit={(values, {setSubmitting}) => {
    //     const {email, password} = values;
    //     axios
    //       .post('http://10.141.73.144:9000/register', values)
    //       .then(res => {
    //         setSubmitting(false);
    //         alert(res.data.message);
    //       })
    //       .catch(err => {
    //         setSubmitting(false);
    //         alert(err.response.data.message);
    //       });
    //   }}>
    initialValues={{ email: '', password: '' }}
    validateOnMount={true}
    validationSchema={SignUpValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      const { email, password } = values;
      axios
        .post('http://10.141.6.209:9000/register', values)
        .then(res => {
          setSubmitting(false);
          alert(res.data.message);
        })
        .catch(err => {
          setSubmitting(false);
          if (err.response && err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert('An error occurred while registering');
          }
        });
    }}>
  
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isValid,
        errors,
      }) => (
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
            placeholder="Email"
            keyboardType="email-address"
            style={TextStyles.email}
            name="email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          {errors.email && touched.email && (
            <Text style={TextStyles.errors}>{errors.email}</Text>
          )}
          <TextInput
            secureTextEntry={!isPasswordVisible}
            style={TextStyles.password}
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            name="password"
          />
          {errors.password && touched.password && (
            <Text
              style={[
                TextStyles.errorspass,
                !errors.email && {marginTop: 250},
              ]}>
              {errors.password}
            </Text>
          )}
          <TouchableOpacity
            style={{position: 'absolute', top: 200, right: 32}}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-slash'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
          <Button
            title={'Register'}
            onPress={handleSubmit}
            disabled={!isValid}
            isValid={isValid}
          />
        </View>
      )}
    </Formik>
  );
};
const TextStyles = StyleSheet.create({
  email: {
    position: 'absolute',
    height: 48,
    left: 24,
    right: 24,
    top: 108,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
  },
  password: {
    position: 'absolute',
    height: 48,
    right: 24,
    left: 24,
    top: 190,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E5E6',
    borderRadius: 8,
  },
  errors: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 160,
    paddingLeft: 27,
  },
  errorspass: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 70,
    textAlign: 'justify',
    paddingLeft: 27,
    paddingRight: 27,
  },
});
export default SignUpScreen;
