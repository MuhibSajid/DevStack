import React from "react";

const YourStack = () => {
  return (
    <div>
      <div className="border border-gray-100 shadow-sm rounded-2xl p-6 max-w-xs">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <p className="text-sm text-gray-400 mt-1 mb-4">
          No technologies selected yet.
        </p>

        <div className="border border-dashed border-gray-200 rounded-xl text-center text-sm text-gray-300 py-10 px-4">
          Your stack is empty.
        </div>
      </div>
    </div>
  );
};

export default YourStack;
