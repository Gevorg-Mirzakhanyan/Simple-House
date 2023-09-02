import React from "react";
import './Header.scss'
import imgHeader from 'C:/Users/Lenovo/Desktop/react-template/src/img/simple-house-01.jpg';
import imgLogo from 'C:/Users/Lenovo/Desktop/react-template/src/img/simple-house-logo.png';

class Header extends React.Component {
imageStyle = {
        backgroundImage: `url(${imgHeader})`,
        width: '100%',
        height: '450px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        
    }
    render() {
        return <header>
            <div className="headerContainer" style={this.imageStyle}>
                <div className="headerLogo">
                    <img src={imgLogo} alt="/" />
                    <div>
                        <h1>Simple House</h1>
                        <p>new restaurant template</p>
                    </div>
                </div>
                <div className="headerLink">
                    <a className="headerLink" href="/" >
                        <ul className="headerLink">
                            <li className="homeLink">Home</li>
                            <li className="listLink">About</li>
                            <li className="listLink">Contact</li>
                        </ul>
                    </a>
                </div>
            </div>
            
        </header>

    }
}

export default Header