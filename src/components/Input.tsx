import React from "react";

interface InputProps {
  icon: React.ReactNode;
  placeholder: string;
  className: string;
  values: string;
  name: string;
  inputType: string;
  onChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ icon, placeholder, className, values, name, onChanges, inputType}: InputProps) {
  return (
    <div className={className}>
      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-input-black border-l border-b  border-input-focus text-gray-500 shadow-sm text-sm">
        {icon}
      </span>
      <input
        name={name}
        onChange={onChanges}
        value={values}
        type={inputType}
        id="sign-in-email"
        className="rounded-r-lg flex-1 appearance-none border border-input-focus w-full py-2 px-4 bg-input-black text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-light-blue focus:border-transparent"
        placeholder={placeholder}
      />
       
    </div>  
  );
}

export default Input;
