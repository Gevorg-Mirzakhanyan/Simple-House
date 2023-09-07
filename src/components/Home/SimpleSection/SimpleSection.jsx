import './SimpleSection.scss';
import imgSimple from  'C:/Users/Lenovo/Desktop/react-template/src/img/img-01.jpg';
import React from "react";
class SimpleSection extends React.Component {
    render() {
        return <div className='simple'>
                    <div className='firstSection'>
                        <img className='imgSimple' src={imgSimple} alt='' />
                    </div>
                    <div className='secondSection'>
                        <h3 className='simpleHeader'>Maecenas nulla neque</h3>
                        <p className='simpleText'>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. 
                        You will need to <a href='https://templatemo.com/contact'>talk to us</a> for additional permissions about our templates. Thank you.
                        </p>
                        <a className='readMore' href='/' >Read More</a>
                    </div>
         </div>


    }
}

export default SimpleSection;