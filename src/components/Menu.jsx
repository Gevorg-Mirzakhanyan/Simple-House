import myImg01 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/01.jpg';
import myImg02 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/02.jpg';
import myImg03 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/03.jpg';
import myImg04 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/04.jpg';
import myImg05 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/05.jpg';
import myImg06 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/06.jpg';
import myImg07 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/07.jpg';
import myImg08 from 'C:/Users/Lenovo/Desktop/react-template/src/img/gallery/08.jpg';
import './Menu.scss';
import React from "react";

class Menu extends React.Component {
    render() {
        return <>
            <div className='menuList'>
                <div>
                    <img src={myImg01} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
                <div>
                    <img src={myImg02} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
                <div>
                    <img src={myImg03} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
                <div>
                    <img src={myImg04} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
            </div>
            <div className='menuList'>
                <div>
                    <img src={myImg05} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
                <div>
                    <img src={myImg06} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
                <div>
                    <img src={myImg07} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
                <div>
                    <img src={myImg08} alt='' />
                    <h3 className='menuHeader'>Fusce dictum finibus</h3>
                    <p className='menuInfo'>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span className='menuPrice'>$45 / $55</span>
                </div>
            </div>
        </>
    }
}

export default Menu;