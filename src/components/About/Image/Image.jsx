import React from "react";
import './Image.scss';
import aboutMidlleImg from 'C:/Users/Lenovo/Desktop/react-template/src/img/about-05.jpg';

class Image extends React.Component {
    render() {
        return(
            <div className="aboutMidlleImg">
                <img className="myImg miban" data-parallax='scroll' src={aboutMidlleImg} alt="" />
            </div>
        )
    }
}

export default Image