import React from "react";
import styles from "./bubble.module.css";

export const Cta = () => {
  return (
    <div className="grid h-[300px] place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Bubbbbbbbble text".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

