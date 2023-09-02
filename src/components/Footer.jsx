import './Footer.scss';
import React from "react";
import imgFooter from  'C:/Users/Lenovo/Desktop/react-template/src/img/img-01.jpg'
class Footer extends React.Component {
    render() {
        return <div className='footer'>
        <div className='footerInfo'>
            <img src={imgFooter} alt='' />
            <div>
                <h3 className='footerHeader'>Maecenas nulla neque</h3>
                <p className='footerText'>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. 
                    You will need to <a href='https://templatemo.com/contact'>talk to us</a> for additional permissions about our templates. Thank you.
                </p>
                <a className='readMore' href='/' >Read More</a>
            </div>
        </div>
        <p className='underFooter'>Copyright © 2020 Simple House | Design: <a className='footerLink' href='https://templatemo.com'>TemplateMo</a></p>
        </div>
    }
}

export default Footer;