import './Message.scss';
import React from "react";
import { FaCaretLeft } from 'react-icons/fa';


class Message extends React.Component {
    render() {
        return (
            <div className="messageContainer">
                <button className='messageBtn'>1.Fusce eu lorem  et dui #09C maximus varius?
                    <FaCaretLeft className='messageIcon' />
                </button>
                <button className='messageBtn'>2.Vestibulum #999 ante ipsum primis in faucibus orci?
                    <FaCaretLeft className='messageIcon' />
                </button>
                <button className='messageBtn'>3.Can I redistrubute this template as a ZIP file?
                    <FaCaretLeft className='messageIcon' />
                </button>
                <button className='messageBtn'>4.Ut ac erat sit amet neque efficitur faucibus et in lectus?
                    <FaCaretLeft className='messageIcon' />
                </button>
               
            </div>
        )
    }
}

export default Message