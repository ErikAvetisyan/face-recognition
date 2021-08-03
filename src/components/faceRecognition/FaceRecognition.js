import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center ma mt4 absolut'>
            <img alt='' src={imageUrl} width='500px' heigh='auto'/>
        </div>
    )
}

export default FaceRecognition;