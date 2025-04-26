// import React, { useRef } from "react";

// function TextareaField({ label, placeholder, value, className,item, handleInputChange ,editCarInfo }) {
//   const textareaRef = useRef(null);
//   const  maxRows = 5;
//   const handleInput = (e) => {
//     const textarea = textareaRef.current;
//     const content = e.target.value;
//     const lines = content.split("\n").length;

//     if (lines > maxRows) {
//       e.target.value = value; 
//     }   
//     if (textarea) {
//       textarea.style.height = "auto";
//       textarea.style.height = `${textarea.scrollHeight}px`; 
//     }
//   };

//   return (
//     <div className={`flex flex-col ${className}`}>
//       {label && <label className="mb-2 text-gray-700 font-medium">{label}</label>}
//       <textarea
//         ref={textareaRef}
//         placeholder={placeholder || "Type something..."}
//         typeof={item?.filedType}
//         name={item?.name}
//         onInput={handleInput}
//         className={`w-[300px] border border-gray-300 rounded-md p-2 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-black-500 ${className}`}
//         style={{ overflow: "hidden" }}
//         required={item?.required}
//         defaultValue={editCarInfo?.[item?.name]}
//         onChange={(e) => handleInputChange(item.name, e.target.value)}
        
//       ></textarea>
//     </div>
//   );
// }

// export default TextareaField;

import React, { useRef } from "react";

function TextareaField({ label, placeholder, value, className, item, handleInputChange, editCarInfo }) {
  const textareaRef = useRef(null);
  const maxRows = 5;

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    const content = e.target.value;
    const lines = content.split("\n").length;

    if (lines > maxRows) {
      e.target.value = value; 
    }
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`; 
    }
  };

  return (
    <div className={`flex flex-col w-full ${className} md:w-[400px] lg:w-[400px]`}>
      
      {label && <label className="mb-2 text-gray-700 font-medium">{label}</label>}

      
      <textarea
        ref={textareaRef}
        placeholder={placeholder || "Type something..."}
        typeof={item?.filedType}
        name={item?.name}
        onInput={handleInput}
        className={`w-full border border-gray-300 rounded-md p-2 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-black ${
          className ? className : ""
        }`}
        style={{ overflow: "hidden" }}
        required={item?.required}
        defaultValue={editCarInfo?.[item?.name]}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      ></textarea>
    </div>
  );
}

export default TextareaField;
