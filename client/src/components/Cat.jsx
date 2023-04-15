import { animated, useSpring } from '@react-spring/web'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Cat({text}) {

    const [source, setSource] = useState("gray-pixil-frame-2.png");

    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1},
        config: {
            duration: 500       
        },
    })
    useEffect(() => {
        const interval = setInterval(() => {
            setSource(cur => {
                if (cur === "gray-pixil-frame-2.png" || cur === "gray-pixil-frame-1.png") {
                    return "gray-pixil-frame-0.png"
                } else {
                    return "gray-pixil-frame-1.png";
                }
            })
        }, 250);    
        setTimeout(() => {
            clearInterval(interval)
            setSource("gray-pixil-frame-2.png");    
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [])
    
    return (

        <animated.div style={{...springs}} className="w-full h-[100px] flex flex-col justify-center items-center">
            <img key={source} src={`cats/${source}`} />
            <h1 className="text-black -translate-y-8">
                ^
            </h1>
            <animated.div className="border-black border-2 text-black rounded-full py-2 px-4">
                <TypeAnimation sequence={[1000, text]} cursor={false} />
            </animated.div>
        </animated.div>
    )
}


