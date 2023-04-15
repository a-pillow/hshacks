import { animated, useSpring } from '@react-spring/web'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Cat({text}) {

    const [source, setSource] = useState("gray-pixil-frame-0.png");

    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1},
        config: {
            duration: 1000
        }
    })
    useEffect(() => {
        const interval = setInterval(() => {
            if(source == "gray-pixil-frame-0.png") {
                setSource("gray-pixil-frame-1.png");
            } else {
                setSource("gray-pixil-frame-0.png");
            }
        }, 250);
        setTimeout(() => {  
            setSource("gray-pixil-frame-2.png")
            clearInterval(interval);
        }, 1000);
        return () => clearInterval(interval);
       
    }, [source]);
    
    return (
        <animated.div style={{...springs}} className="w-full flex flex-col justify-center items-center">
            <img key={source} src={`cats/${source}`} />
            <h1 className="text-black -translate-y-8">
                ^
            </h1>
            <animated.div className="border-black border-2 -translate-y-8 text-black rounded-full py-2 px-4">
                <TypeAnimation sequence={[1000, text]} cursor={false} />
            </animated.div>
        </animated.div>
    )
}


