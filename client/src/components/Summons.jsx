import { animated, useSpring } from '@react-spring/web'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { gacha } from '../backend/gambling.js';

export default function Summons(){

    var image = "Empty.png";

    function changeImage(){
        var roll = gacha();
        image = "cat" + roll + ".png";
        console.log(image);
        return <main> <img src={`Summonable Cats/${image}`}/> </main>
    }


    return (
        <main className="w-full flex flex-col justify-center items-center">
            <div>
                {changeImage()}
                <br></br>
                <button type="button" style={{"background": "#03fc84", "color" : "black"}} onClick={() => changeImage()}>Summon x1</button>
            </div>
        </main>      
    )
}