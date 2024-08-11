import React from 'react'
import { PixelRatio, Text, TextInput, View } from 'react-native'
import Field from '../Field'
import ActionButton from '../Home/ActionButton'
import RegButton from './RegButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { updateLast, updateName, updatePhone } from '../../redux/regSlice'

const SignUpForm = () => {
  const regName = useSelector((state: RootState) => state.regSlice.name);
  const regLast = useSelector((state: RootState) => state.regSlice.lastname);
  const regPhone = useSelector((state: RootState) => state.regSlice.phone);
  return (
    <View>
        <Field name='name' state={regName} setState={updateName}/>
        <Field name='lastname' state={regLast} setState={updateLast}/>
        <Field name='phone' state={regPhone} setState={updatePhone}/>
        <RegButton name='Continue'/>
    </View>
  )
}

export default SignUpForm