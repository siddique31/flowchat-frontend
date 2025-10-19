import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">FlowChat</h2>
      <ul>
        <li className="mb-2 cursor-pointer">Home</li>
        <li className="mb-2 cursor-pointer">Profile</li>
        <li className="mb-2 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
