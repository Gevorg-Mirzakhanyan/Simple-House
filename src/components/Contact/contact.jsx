
import React from "react";
import Info from "../Home/Info/Info";
import Adress from "./Adress/Adress";
import Message from "./Message/Message";


class Contact extends React.Component {
    render() {
        return (
            <>

                <Info 
                    title='Contact Page'
                    description='You may use'
                    link="https://www.ltcclock.com/downloads/simple-contact-form/"
                    text='Simple Contact Form'
                    description2='to send email to your inbox. You can modify and use this template for your website. 
                        Header image has a parallax effect. Total 3 HTML pages included in this template.'
                />
                <Adress />
                <Info 
                    title='FAQs'
                    description='This section comes with Accordion tabs for different questions and answers about 
                                    Simple House HTML CSS template. Thank you. #666'
                />
                <Message />
             
            </>

        )
    }
}

export default Contact;