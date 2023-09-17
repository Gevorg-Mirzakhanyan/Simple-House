import './AsideSection.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import React from "react";
class AsideSection extends React.Component {
    render() {
        return (
        <div className='aside'>
            <div className='firstSection'>
                <img className='imgAside' src={this.props.image} alt='' />
            </div>
            <div className='secondSection'>
                <h3 className='asideHeader'>{this.props.title}</h3>
                <p className='asideText'>{this.props.text} <a href={this.props.link} target='blank'>{this.props.text2}</a> {this.props.text3}</p>
                <Link className={this.props.readMore} to='/About' >{this.props.textBtn}</Link>
            </div>
         </div>
        )
    }
}

export default AsideSection;