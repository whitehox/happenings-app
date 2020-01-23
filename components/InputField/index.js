import React, { useState } from 'react';
import { TextInput } from './styles';

function InputField({ changeHandler, overloadStyles }) {
  const [value, setValue] = useState(null);

  return (
    <TextInput
      value={value}
      onChange={changeHandler}
      style={overloadStyles}
    ></TextInput>
  );
}

export default InputField;
