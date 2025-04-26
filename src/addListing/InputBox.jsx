import React from 'react';

function InputBox({ placeholder, value, className, name, item, handleInputChange ,editCarInfo }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      name={name}
      className={`w-[300px] border border-gray-300 rounded-md py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      required={item.required}
      defaultValue={editCarInfo?.[item?.name]}
      onChange={(e)=>handleInputChange(item.name, e.target.value)}
    />
  );
}

export default InputBox;
