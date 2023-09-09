import './SimpleSection.scss';

import React from "react";
class SimpleSection extends React.Component {
    render() {
        return <div className='simple'>
                    <div className='firstSection'>
                        <img className='imgSimple' src={this.props.image} alt='' />
                    </div>
                    <div className='secondSection'>
                        <h3 className='simpleHeader'>{this.props.title}</h3>
                        <p className='simpleText'>{this.props.text} <a href={this.props.link}>{this.props.text2}</a> {this.props.text3}</p>
                        <a className='readMore' href='/' >{this.props.textBtn}</a>
                    </div>
         </div>


    }
}

export default SimpleSection;