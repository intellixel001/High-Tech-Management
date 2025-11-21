"use client";
import { useSpring, animated, easings } from "@react-spring/web";
import { useEffect, useState } from "react";

const SplitText = ({
  text = "",
  className = "",
  delay = 200,
  animationFrom = { opacity: 0, transform: "translate3d(0,30px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = easings.easeOutCubic,
  textAlign = "center",
  heighlightsword = [], // 1-based index
  heighlightclass = "",
}) => {
  const [visible, setVisible] = useState(false);

  const spring = useSpring({
    from: animationFrom,
    to: visible ? animationTo : animationFrom,
    delay,
    config: { easing },
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const words = text.split(" ");

  return (
    <animated.p
      style={{
        ...spring,
        textAlign,
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => {
        const isHighlighted = heighlightsword.includes(index + 1);
        return (
          <span
            key={index}
            className={isHighlighted ? heighlightclass : ""}
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </span>
        );
      })}
    </animated.p>
  );
};

export default SplitText;
