import React from 'react'
import { PixelRatio, Text, TextInput, View } from 'react-native'
import Field from '../Field'
import ActionButton from '../Home/ActionButton'
import RegButton from './RegButton'

const SignUpForm = () => {
  return (
    <View>
        <Field name='name' />
        <Field name='lastname' />
        <Field name='phone' />
        <RegButton textColor='white' backgroundColor='#3aa3dc' name='Continue' border = {false}/>
    </View>
  )
}

export default SignUpForm