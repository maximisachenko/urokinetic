import React from 'react';

interface TextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  required = false,
  className = '',
  name,
  id,
  ...props
}) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-button-1 focus:border-transparent transition-colors duration-200 bg-global-4 resize-vertical';
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    />
  );
};

export default TextArea;