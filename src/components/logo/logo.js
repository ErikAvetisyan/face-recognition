import React from 'react';
import Tilt from 'react-tilty';
import './logo.css'


const Logo = () => {
    return (
        <div class style={{display: 'flex', justifyContent: 'center'}}>
            <Tilt className="Tilt br2 shadow-1 o-90" options={{ max : 65 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                        <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" />
                    <p className="gold">{'Thinking'}</p>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;