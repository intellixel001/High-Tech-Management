"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplitText = ({
  text = "",
  className = "",
  delay = 200,
  animationFrom = { opacity: 0, y: 30 },
  animationTo = { opacity: 1, y: 0 },
  easing = [0.22, 1, 0.36, 1], // easeOutCubic approx
  textAlign = "center",
  heighlightsword = [], // 1-based index
  heighlightclass = "",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const words = text.split(" ");

  return (
    <motion.p
      initial={animationFrom}
      animate={visible ? animationTo : animationFrom}
      transition={{
        delay: delay / 1000,
        ease: easing,
        duration: 0.6,
      }}
      style={{
        textAlign,
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => {
        const isHighlighted = heighlightsword.includes(index + 1);

        return (
          <motion.span
            key={index}
            className={isHighlighted ? heighlightclass : ""}
            style={{ display: "inline-block", marginRight: "0.3em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: (delay + index * 40) / 1000, // stagger effect
              duration: 0.4,
              ease: easing,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default SplitText;
