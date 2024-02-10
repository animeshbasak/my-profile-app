import React from 'react';
import useInputHook from './useInputHook'; // Ensure this path is correct
import './PersonalInfoForm.css';

interface CustomInputProps {
  label: string;
  size: 'small' | 'medium' | 'large';
  placeholder?: string
  type?: string
}

const CustomInput: React.FC<CustomInputProps> = ({ label, size, placeholder, type }) => {
  const [value, bind] = useInputHook('');

  return (
    <div className={`input-container ${size}`}>
      <input
        type={type}
        {...bind}
        required
        className={`input-field ${value && 'filled'}`}
        placeholder={placeholder}
      />
      <label className={`floating-label ${value && 'active'}`}>{label}</label>
    </div>
  );
};

export default CustomInput;
