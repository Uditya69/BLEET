import React from "react";
import "./Loader.css"; // Import the CSS file where loader styles are defined

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
