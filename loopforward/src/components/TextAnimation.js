import React, { useEffect } from "react";
import { useState } from "react";

const TextAnimation = () => {
  const createArray = "create".split("");
  const reactArray = "react".split("");
  const [array, setArray] = useState(reactArray);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        setArray(createArray);
        setCount(1);
      } else {
        setArray(reactArray);
        setCount(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [array]);

  return (
    <>
      <span className="fade">
        {array.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </span>
    </>
  );
};

export default TextAnimation;
