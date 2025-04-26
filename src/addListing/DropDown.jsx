import React from "react";

function Dropdown({ item, className, handleInputChange, editCarInfo, errorMessage }) {
  return (
    <div className="relative w-full max-w-[300px]">
      <select
        className={`w-full border rounded-md py-2 text-base ${className} ${
          errorMessage ? "border-red-500" : "border-gray-300"
        } md:max-w-[250px] lg:max-w-[300px]`} // Adjust width based on screen size
        defaultValue={editCarInfo?.[item?.name] || ""}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
        required={item.required}
      >
        <option value="">Select {item.label}</option>
        {item?.options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Display error message just below the dropdown */}
      {errorMessage && (
        <span className="absolute text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default Dropdown;
