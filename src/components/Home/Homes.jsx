
import React from "react";

import Info from './Info/Info';
import Button from './Button/Button';
import Menu from './Menu/Menu';
import SimpleSection from './SimpleSection/SimpleSection';
import data from './Menu/data';
import imgSimple from  'C:/Users/Lenovo/Desktop/react-template/src/img/img-01.jpg';

class Homes extends React.Component {
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
                    <SimpleSection
                        image={imgSimple}
                        title="Maecenas nulla neque"
                        text="Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to"
                        link="https://templatemo.com/contact"
                        text2="talk to us"
                        text3="for additional permissions about our templates. Thank you."
                        textBtn="Read More"
                    />
                  </div>
                
              );

    }
}

export default Homes;