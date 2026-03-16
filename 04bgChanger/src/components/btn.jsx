import React from 'react'
 function Btn({colour = 'Default', changeColor}){
    return(
        <>
            <button 
            onClick={changeColor} className="outline-none px-4 rounded-full text-white shadow-2xl font-medium" style={{backgroundColor: colour === 'Default' ? 'pink' : colour , color: colour === 'Black' ? 'white' : 'black'}}>
                {colour}
            </button>
        </>
    )
}

export default Btn

