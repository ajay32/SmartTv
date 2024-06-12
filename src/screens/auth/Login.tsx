import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {rS} from '../../styles/responsive';

import FormInputController from '../../components/controllers/FormInputController';
import {yupResolver} from '@hookform/resolvers/yup';
import {fromSchema} from '../../constants/authSchema';
import MainButon from '../../components/buttons/MainButon';
import Bread from '../../assets/svg/Bread';
import PlusIcon from '../../assets/svg/PlusIcon';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(fromSchema),
  });

  // format the errors Json.stringify
  console.log(JSON.stringify(errors, null, 3));

  const submit = data => {
    console.log(data);
    Alert.alert(JSON.stringify(data));
  };
  return (
    <SafeAreaView style={styles.container}>

        <Bread width={200} height={200} opacity={0.4}/>

        <PlusIcon width={100} height={100} />

      <FormInputController
        control={control}
        name={'email'}
        placeholder={'Email'}
        props={{
          keyboardType: 'email-address',
        }}
        errors={errors}
      />

      <FormInputController
        control={control}
        name={'password'}
        placeholder={'Password'}
        props={{
          secureTextEntry: true,
        }}
        errors={errors}
      />

      {/* submit button will not work until above form has validation errors * */}

      <MainButon
        onPress={handleSubmit(submit)}
        title="Sign In"
        style={{
          marginTop: 20,
        }}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: rS(20),
  },
});

// while adding svg if you have any issue you can resolve it using below steps
// The below steps solved my issue.

// npm install react-native-svg
// npm install react-native-svg-transformer
// Uninstall your exist app

// react-native-run-android


