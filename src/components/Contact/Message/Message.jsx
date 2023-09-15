import './Message.scss';
import React from "react";
import { FaCaretLeft } from 'react-icons/fa';


class Message extends React.Component {
    render() {
        return (
            <div className="messageContainer">
                <button className='messageBtn'>
                    <span className='messageText'>1.Fusce eu lorem  et dui #09C maximus varius?</span>
                    <FaCaretLeft className='messageIcon' />
                </button>
                <button className='messageBtn'>
                    <span className='messageText'>2.Vestibulum #999 ante ipsum primis in faucibus orci?</span>
                    <FaCaretLeft className='messageIcon' />
                </button>
                <button className='messageBtn'>
                    <span className='messageText'>3.Can I redistrubute this template as a ZIP file?</span>
                    <FaCaretLeft className='messageIcon' />
                </button>
                <button className='messageBtn'>
                    <span className='messageText'>4.Ut ac erat sit amet neque efficitur faucibus et in lectus?</span>
                    <FaCaretLeft className='messageIcon' />
                </button>
               
            </div>
        )
    }
}

export default Message