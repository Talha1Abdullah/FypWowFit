import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SignUpScreen from '../authentication/SignUpScreen';
import axios from 'axios';

const ApiCall = props => {
//   const {navigation} = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        console.log(JSON.stringify(response, null, 2));
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  return <SignUpScreen data={data} />;
};

export default ApiCall;
