import React from "react";
import './Header.scss'
import imgHeader from 'C:/Users/Lenovo/Desktop/react-template/src/img/simple-house-01.jpg';
import imgLogo from 'C:/Users/Lenovo/Desktop/react-template/src/img/simple-house-logo.png';
import { NavLink } from "react-router-dom";

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
                    
                        <ul className="headerLink">
                            <li className="homeLink">
                                <NavLink>Home</NavLink>
                            </li>
                            <li className="listLink">
                               <NavLink>About</NavLink>
                            </li>
                            <li className="listLink">
                                <NavLink>Contact</NavLink>
                            </li>
                        </ul>
                   
                </div>
            </div>
            
        </header>

    }
}

export default Header