
import './Menu.scss';
import React from "react";

class Menu extends React.Component {
    render() {

        const { data } = this.props;
        return <div className='menu'>
            {data.map((item) => (
                    <div>
                        <img className='imgMenu' src={item.image} alt='' />
                        <h3 className='menuHeader'>{item.title}</h3>
                        <p className='menuInfo'>{item.text}</p>
                        <span className='menuPrice'>{item.price}</span>
                    </div>
                ))}
            </div>
    }
}

export default Menu;