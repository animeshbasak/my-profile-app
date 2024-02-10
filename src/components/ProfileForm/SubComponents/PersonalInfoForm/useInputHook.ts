import { useState } from 'react';

interface InputHook {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useInputHook(initialValue: string): [string, InputHook, () => void] {
  const [value, setValue] = useState(initialValue);

  const bind: InputHook = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  const reset = () => {
    setValue('');
  };

  return [value, bind, reset];
}

export default useInputHook;
