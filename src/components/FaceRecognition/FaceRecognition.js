import React from 'react';

class FaceRecognition extends React.Component {
    render() {
        const { imageUrl } = this.props;
        return (
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img alt='' src={imageUrl} width='500px' height='auto'/>
                </div>
            </div>
        )
    }
}

export default FaceRecognition;