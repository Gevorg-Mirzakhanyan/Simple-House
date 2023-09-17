
import React from "react";

import Info from './components/Info/Info';
import Button from './components/Button/Button';
import Menu from './components/Menu/Menu';
import AsideSection from "./components/AsideSection/AsideSection";
import data from './components/Menu/data';
import imgSimple from  '../../../src/assets/img/img-01.jpg';
import './Home.scss'


class Homes extends React.Component {

    componentDidMount () {
        window.scrollTo(0, 0)
    }
    render() {
        return (
        
               
                  <div className="App">
                    
                    <Info 
                        title="Welcome to Simple House" 
                        description="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, 
                                  edit and use this TemplateMo layout for your commercial or non-commercial websites."
                    />
                    <Button />
                    
                    <Menu data={data}/>
                    <AsideSection
                        image={imgSimple}
                        title="Maecenas nulla neque"
                        text="Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to"
                        link="https://templatemo.com/contact"
                        text2="talk to us"  
                        text3="for additional permissions about our templates. Thank you."
                        readMore='readMore'
                        textBtn="Read More"
                    />
                  </div>
                
              );

    }
}

export default Homes;