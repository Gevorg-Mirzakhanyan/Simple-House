import './Message.scss';
import React from "react";
import { FaCaretLeft, FaCaretDown } from 'react-icons/fa';



class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showText: false,
          showText2: false,
          showText3: false,
          showText4: false,
          isCaretDown: false,
          isCaretDown2: false,
          isCaretDown3: false,
          isCaretDown4: false,
        };
      }

     
    render() {
        
        let toggleText = () => {
            this.setState((prevState) => ({
              showText: !prevState.showText,
              isCaretDown: !prevState.isCaretDown,
            }));
          };
          let toggleText2 = () => {
            this.setState((prevState) => ({
              showText2: !prevState.showText2,
              isCaretDown2: !prevState.isCaretDown2,
            }));
          };
          let toggleText3 = () => {
            this.setState((prevState) => ({
              showText3: !prevState.showText3,
              isCaretDown3: !prevState.isCaretDown3,
            }));
          };
          let toggleText4 = () => {
            this.setState((prevState) => ({
              showText4: !prevState.showText4,
              isCaretDown4: !prevState.isCaretDown4,
            }));
          };
       
        return (
            <div className="messageContainer">
                <button  onClick={toggleText}  className='messageBtn'>
                    <span className='messageText'>1.Fusce eu lorem  et dui #09C maximus varius?</span>
                    {this.state.isCaretDown ? <FaCaretDown className='messageIcon' /> : <FaCaretLeft className='messageIcon' />}
                    
                </button>
                {this.state.showText && 
                <p className='mesDescription'>
                    #666 Duis blandit purus vel nenenatis rutrum. 
                    Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. 
                    Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.
                </p>}
                <button  onClick={toggleText2} className='messageBtn'>
                    <span className='messageText'>2.Vestibulum #999 ante ipsum primis in faucibus orci?</span>
                    {this.state.isCaretDown2 ? <FaCaretDown className='messageIcon' /> : <FaCaretLeft className='messageIcon' />}
                </button>
                {this.state.showText2 && 
                <p className='mesDescription'>
                    Mauris euismod odio at commodo rhoncus. 
                    Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, 
                    a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat.
                    Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.
                </p>}
                <button  onClick={toggleText3} className='messageBtn'>
                    <span className='messageText'>3.Can I redistrubute this template as a ZIP file?</span>
                    {this.state.isCaretDown3 ? <FaCaretDown className='messageIcon' /> : <FaCaretLeft className='messageIcon' />}
                </button>
                {this.state.showText3 && 
                <p className='mesDescription'>
                    Redistributing this template as a downloadable 
                    ZIP file on any template collection site is strictly prohibited. 
                    You will need to <a href='https://templatemo.com/contact' target='_'>contact TemplateMo</a> for additional permissions about our templates. Thank you.
                </p>}
                <button  onClick={toggleText4} className='messageBtn'>
                    <span className='messageText'>4.Ut ac erat sit amet neque efficitur faucibus et in lectus?</span>
                    {this.state.isCaretDown4 ? <FaCaretDown className='messageIcon' /> : <FaCaretLeft className='messageIcon' />}
                </button>
                {this.state.showText4 && 
                <p className='mesDescription'>
                    Vivamus viverra pretium ultricies. 
                     Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, 
                    vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.
                </p>}
            </div>
        )
    }
}

export default Message