import { animated, useSpring } from "@react-spring/web";
import { useRef, useState, useEffect, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import React from "react"
import ReactDOM from "react-dom"
export default function Cat({ text, questions, index }) {
  const [source, setSource] = useState(0);
  const frameId = React.useRef(null);
  const prevTimer = useRef(null)
  const startTimer = useRef(null)
  const images = ['gray-pixil-frame-1.png', 'gray-pixil-frame-0.png', 'gray-pixil-frame-2.png']
  const result = images[Math.round(source)]
  //Fade in animation
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });

  const animate = useCallback(timer => {
    if(startTimer.current === null) startTimer.current = timer;
    const t = timer - startTimer.current
    if (t <= 5000) {
      if (prevTimer.current !== null && startTimer.current !== null) {
        const iteration = t - prevTimer.current;
        setSource(
          (prevCount =>
            (prevCount + iteration * 0.002) % 1)
        )
        console.log("speed")
      }
      prevTimer.current = t;
      frameId.current = requestAnimationFrame(animate);
    }
    else if (t > 5000) {
      setSource(2)
    }
  }, [])
  const startAnimation = useCallback(() =>{
    setSource(0)
    cancelAnimationFrame(frameId.current)
    prevTimer.current = null;
    startTimer.current = null;
    frameId.current = requestAnimationFrame(animate)
  },[animate])
  React.useEffect(() => {
    startAnimation();
    return() => cancelAnimationFrame(frameId.current)
  }, [startAnimation])



  return (
    <animated.div
      style={{ ...springs }}
      className="w-full h-[100px] flex flex-col justify-center items-center"
    >
      <img key={result} src={`cats/${result}`} />
      <h1 className="text-black -translate-y-8">^</h1>
      <animated.div className="border-black border-2 text-black rounded-full py-2 px-4">
        <TypeAnimation sequence={[100, text]} cursor={false} />
      </animated.div>
    </animated.div>
  );
}


  