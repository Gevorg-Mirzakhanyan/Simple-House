
import React from "react";
import Info from "../Home/components/Info/Info";
import Adress from "../Contact/components/Adress/Adress";
import Message from "../Contact/components/Message/Message";
import './contact.scss';


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
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d195168.08508053457!2d44.4885671!3d40.1533904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1694884739434!5m2!1sen!2sam" width="800" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
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