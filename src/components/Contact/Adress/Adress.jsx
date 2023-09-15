import React from "react";
import './Adress.scss';
import AddressInfo from "./AddressInfo/AddressInfo";




class Adress extends React.Component {
    
    render() {
        return (
            <div className="adressContainer">
                <form className="mailInfo">
                    <input type="text" className="loginName" placeholder="Name" required/>
                    <input type="email" className="loginName" placeholder="Email" required />
                    <textarea className="loginName" rows={5} placeholder="Message" required />
                    <button type="submit" className="send" >Send</button>
                </form>
                <AddressInfo />
            
               
            </div>
        )
    }
}

export default Adress