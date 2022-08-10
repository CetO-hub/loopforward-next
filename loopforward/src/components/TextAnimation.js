import React from "react";

const TextAnimation = () => {
  const isCharArray = ["K", "R", "I", "E", "R", "E"];
  return (
    <span className="text-fuchsia-500 text-5xl md:text-7xl -">
      {isCharArray}
    </span>
  );
};

export default TextAnimation;
