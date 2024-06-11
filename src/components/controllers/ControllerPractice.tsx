
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import FormInputController from './FormInputController';

const ControllerPractice = () => {

    const { control, handleSubmit, formState: {errors} } = useForm();

    const sumbit = data => {
        console.log(data);
        Alert.alert(JSON.stringify(data));
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>React Hook Form example</Text>

        <FormInputController
        control={control}
        name={"email"}
        placeholder={"Email"}
        props={{
          keyboardType: 'email-address',
        }}
      />

        <View style={{marginTop:20}}>
        <Button title='Sumit'  onPress={handleSubmit(sumbit)} />
        </View>

   
    </View>
  )
}

export default ControllerPractice

const styles = StyleSheet.create({
    container: {
      marginTop: 100,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input : {
        padding : 10,
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 18,
        height: 40
      
    },
    title: {
        fontSize: 20,
        color: 'black' 
      },
      textError : {
        color : 'red'
      }
  });
     // control - to manage its validation rules  (input and form state connection)
   //handle - handle form sumission
   // formSate - handle state or form + errors
   // render - we pass event handlers


   //==============      
   {/* 
   <Controller 
      name= 'username'
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput 
        style={styles.input}
        placeholder='Enter name'
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        />
      )}
      rules={{required: true, minLength: 3}}
      />

      {/* after applying rules if we have will not able to sumbit you will not see any logs.. error u can see */}
      {/* {errors.username && <Text style={styles.textError}> name is required</Text>}

<Controller 
      name= 'email'
      control={control}
      rules={{required:true, pattern: /^\S+@\S+\.\S+$/}}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput 
        style={styles.input}
        placeholder='Enter email'
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        />
      )}
      />
        {errors.email && <Text style={styles.textError}>Email is required</Text>} */} 



