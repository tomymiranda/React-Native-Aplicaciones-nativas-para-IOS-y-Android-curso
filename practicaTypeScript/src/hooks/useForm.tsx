import React, { useState } from 'react'

export const useForm =<T extends Object> (fomulario: T) => {
  const [state, setState] = useState(fomulario);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    onChange,
  };
}
