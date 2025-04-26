// import React from "react";

// function CheckBox({ item, handleFeaturesChange,featuresData}) {

//   return (
//     <div>
//       <input
//         className="text-2xl"
//         type="checkbox"
//         name=""
//         onClick={(e) => handleFeaturesChange(item.name, e.target.value)}
//         checked={featuresData?.[item?.name]}
//         onChange={(e) => {
//           const isChecked = e.target.checked;
//           handleFeaturesChange(item.name, isChecked);
//         }}
//       />
//     </div>
//   );
// }

// export default CheckBox;

import React from "react";

function CheckBox({ item, handleFeaturesChange, featuresData }) {
  return (
    <div>
      <input
        className="text-2xl"
        type="checkbox"
        checked={!!featuresData?.[item?.name]} // there it will controlled input
        onChange={(e) => {
          const isChecked = e.target.checked;
          handleFeaturesChange(item.name, isChecked);
        }}
      />
    </div>
  );
}

export default CheckBox;

