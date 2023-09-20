import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
        <div
      className="animate-spin inline-block w-12 h-12 border-[6px] border-current
      border-t-transparent text-white rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
    </div>
  );
};

export default Spinner;
