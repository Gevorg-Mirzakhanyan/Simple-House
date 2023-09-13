import React from "react";
import './ReadMore.scss';
import { FaPepperHot } from 'react-icons/fa';
import { FaSeedling } from 'react-icons/fa';
import { FaCocktail } from 'react-icons/fa';

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

class ReadMore extends React.Component{
    render() {
        return (
            <div className="readMoreWrapper">
                    <div className="readMorePart">
                        <FaPepperHot className="readMoreIcon" />
                        <p className="readMoreText">Donec sed orci fermentum, convallis lacus id, tempus elit. 
                            Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.
                        </p>
                        <NavLink className='readMoreBtn btnFirst' to={'/Home'}>Read More</NavLink>
                    </div>
                    <div className="readMorePart">
                        <FaSeedling className="readMoreIcon" />
                        <p className="readMoreText">
                            Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. 
                            Morbi in dolor finibus, consequat nisl eget.
                        </p>
                        <NavLink className='readMoreBtn btnSecond' to={'/Home'}>Read More</NavLink>
                    </div>
                    <div className="readMorePart">
                        <FaCocktail className="readMoreIcon" />
                        <p className="readMoreText">Morbi in dolor finibus, consequat nisl eget, pretium nunc. 
                            Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.
                        </p>
                        <NavLink className='readMoreBtn btnThird' to={'/Home'}>Read More</NavLink>
                    </div>
            </div>
        )
    }
}

export default ReadMore;