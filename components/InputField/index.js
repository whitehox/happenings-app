import React, { useState } from 'react';
import { TextInput } from './styles';

function InputField({ changeHandler, overloadStyles, value }) {
  return (
    <TextInput
      value={value}
      onChangeText={changeHandler}
      style={overloadStyles}
      testID="input"
    ></TextInput>
  );
}

export default InputField;
