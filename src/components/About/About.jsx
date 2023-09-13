import React from "react"
import Info from "../Home/Info/Info";
import SimpleSection from "../Home/SimpleSection/SimpleSection";
import aboutImg from 'C:/Users/Lenovo/Desktop/react-template/src/img/about-06.jpg'
import Person from "./Person/Person";
import Image from "./Image/Image";
import ReadMore from "./AboutReadMore/ReadMore";




class About extends React.Component {
    render() {
        return <div>
          
            <Info 
                title="About Simple House" 
                description="This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."
            />

            <Person />
            <Image />
            <ReadMore />
            <SimpleSection 
                image={aboutImg}
                title="History of our restaurant"
                text="Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.
                    Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to"
                link="https://templatemo.com/contact"
                text2="contact TemplateMo "
                text3="for additional permissions about our templates. Thank you."
            />
            
     
        </div>
    }
}

export default About;