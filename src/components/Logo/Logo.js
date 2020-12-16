import  React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Nike from './nike.png';

class Logo extends React.Component {
    render() {
        return (
            <div className='ma4 mt0'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150}} >
                    <div className="Tilt-inner pa3">
                        <img style={{paddingTop: '5px'}} src={Nike} alt='logo'/>
                    </div>
                </Tilt>
            </div>
        )
    }
}

export default Logo;