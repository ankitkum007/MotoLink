import React, { useState } from "react";
import Mylisting from "./Mylisting.jsx";

function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full  mx-auto">
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => handleTabClick("tab1")}
          className={`px-4 py-2 transition${
            activeTab === "tab1"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          My Listing
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={`px-4 py-2 transition ${
            activeTab === "tab2"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Inbox
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={`px-4 py-2 transition${
            activeTab === "tab3"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Profile
        </button>
      </div>

      <div className="mt-10 p-4 border rounded">
        {activeTab === "tab1" && <div><Mylisting/></div>}
        {activeTab === "tab2" && <div>Inddex Tab</div>}
        {activeTab === "tab3" && <div>Profile</div>}
      </div>
    </div>
  );
}

export default Tab;
