import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { FC } from 'react'
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import { rS , rVS} from '../../styles/responsive';

interface FormInputControllerProps {
  control:  Control<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  name: string,
  placeholder: string;
  props?: TextInputProps;
}


const FormInputController: FC<FormInputControllerProps> = ({
  control,
  errors,
  name,
  placeholder,
  props
}) => {
  return (
    <>
      <Controller 
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput 
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        {...props}
        />
      )}
      />
        {errors && errors[name] && <Text style={styles.textError}>{errors[name]?.message}</Text>} 
    </>
  )
}

export default FormInputController



const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: rS(8),
    padding: 10,
    width: '100%',
    marginTop: 50,
    borderColor: 'gray',
    height: rVS(35)
  },
  textError: {
    color: 'red',
  },
});