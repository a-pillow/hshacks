import { animated, useSpring } from '@react-spring/web'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { gacha } from '../backend/gambling.js';

export default function Summons(){
    const [path, setPath] = useState("Empty.png");
    var image = path;
    const handleClick = () => {
        let final = changeImage();
        setPath(final);
    }
    function changeImage(){
        var roll = gacha();
        image = "cat" + roll + ".png";
        return image;
    }


    return (
        <main className="w-full flex flex-col justify-center items-center">
            <div>
                <br></br>
                    <button type="button" style={{"background": "#03fc84", "color" : "black"}} onClick={() => handleClick()}>Summon x1</button>
            </div>
            <img src={`Summonable Cats/${path}`} />
        </main>      
    )
}