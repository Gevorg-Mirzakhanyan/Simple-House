import React from "react";
import './Button.scss';
class Button extends React.Component {
    render() {
        return <div className="menuBtn">
            <button className="clickBtn pizza">Pizza</button>
            <button className="clickBtn">Salad</button>
            <button className="clickBtn">Noodle</button>
        </div>
    }
}

export default Button;