import React, { useState, useEffect } from 'react';

export const CatMenu = ({ setSelectedCat }) => {
  const catSkins = [
    ['gray-pixil-frame-1.png', 'gray-pixil-frame-0.png', 'gray-pixil-frame-2.png'],
    ['bengal-pixil-frame-1.png', 'bengal-pixil-frame-0.png', 'bengal-pixil-frame-2.png'],
    ['orange-pixil-frame-1.png', 'orange-pixil-frame-0.png', 'orange-pixil-frame-2.png'],
    ['siamese-pixil-frame-1.png', 'siamese-pixil-frame-0.png', 'siamese-pixil-frame-2.png'],
    ['scottish-pixil-frame-1.png', 'scottish-pixil-frame-0.png', 'scottish-pixil-frame-2.png'],
    ['ragdoll-pixil-frame-1.png', 'ragdoll-pixil-frame-0.png', 'ragdoll-pixil-frame-2.png'],
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [firstRender, setCounter] = useState(0)

  const handleCatSelect = (frames) => {
    setSelectedCat(frames)
    setDropdownVisible(false);
  };

  const handleDropdownVisible = () => {
    setDropdownVisible(!dropdownVisible)
    setCounter(firstRender + 1)
  }
  return (
      <div className="relative">
        <button
          onClick={() => handleDropdownVisible()}
          className="hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
          style={{marginLeft:'10px'}}
          
        >
          <img
            src={'cats/Menu.png'}
            className="w-full h-20 object-scale-down"
          />
        </button>
          {(firstRender > 0) && (<div 
          className={dropdownVisible ? ("absolute top-[50px] left-0 bg-[#d8e2dc]  rounded-md mt-2 animate-openmenu"): 
          ("animate-closemenu absolute top-[50px] left-[-350px] bg-[#d8e2dc] rounded-md mt-2")} 
          >
            {catSkins.map((frames, index) => (
              <button
                key={index}
                onClick={() => handleCatSelect(frames)}
                className="w-full p-1 text-center items-center justify-center hover:bg-[#bdc7c1] transition ease-out" 
               >
                <img
                  src={`cats/${frames[2]}`}
                  className="h-[50px] w-full object-scale-down"
                />
              </button>
            ))}
          </div>)}
      </div>
  );
};

export default CatMenu;
