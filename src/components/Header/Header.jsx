import React from "react";
import './Header.scss'
import imgHeader from 'C:/Users/Lenovo/Desktop/react-template/src/img/simple-house-01.jpg';
import imgLogo from 'C:/Users/Lenovo/Desktop/react-template/src/img/simple-house-logo.png';
import {Link} from "react-router-dom"


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
                                <Link to={'/'} className="headerLink">Home</Link>
                            </li>
                            <li className="listLink abotLink">
                               <Link to={'/About'} className="headerLink">About</Link>
                            </li>
                            <li className="listLink">
                                <Link to={'/Contact'} className="headerLink">Contact</Link>
                            </li>
                        </ul>
                </div>
            </div>
        </header>
    }
}

export default Header