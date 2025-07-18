import React from 'react';

interface EditTextProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'number' | 'tel';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
}

const EditText: React.FC<EditTextProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  name,
  id,
  ...props
}) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-button-1 focus:border-transparent transition-colors duration-200 bg-global-4';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    />
  );
};

export default EditText;