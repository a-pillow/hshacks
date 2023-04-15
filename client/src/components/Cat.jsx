import { animated, useSpring } from '@react-spring/web'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Cat({text}) {

    const [source, setSource] = useState("gray-frame0.png");

    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1},
        config: {
            duration: 500
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if(source == "gray-frame0.png") {
                setSource("gray-frame1.png");
            } else {
                setSource("gray-frame0.png");
            }
        }, 250);

        return () => clearInterval(interval);
    }, [source])

    return (
        <animated.div style={{...springs}} className="w-full flex flex-col justify-center items-center">
            <img key={source} src={source} />
            <h1>
                ^
            </h1>
            <animated.div className="border-brand-primary border-2 rounded-full py-2 px-4">
                <TypeAnimation sequence={[1000, text]} cursor={false} />
            </animated.div>
        </animated.div>
    )
}