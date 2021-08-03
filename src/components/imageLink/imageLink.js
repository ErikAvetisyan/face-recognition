import React from 'react';
import './imageLink.css';


const ImageLink = ({onInputChange,onButtonSubmit}) => {
    return (
        <div>
            <p class className style={{color:'gold', display: 'flex', justifyContent: 'center'}}>{'This Slowpoke can detect the faces in your pictures.'}</p>
            <div className='center'>
                <div className='center pa4 br3 form'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button 
                    className='w-30 pa2 grow f4 link ph3 pv2 bg-orange'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLink;