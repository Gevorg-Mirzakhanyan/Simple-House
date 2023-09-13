import React from "react";
import cl from './Button.module.scss';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
class Button extends React.Component {
    render() {
        return (
        <div>
           <NavLink to={'/'}  className={cl.click}>{this.props.name}</NavLink>
        </div>
        )
    }
}

export default Button;