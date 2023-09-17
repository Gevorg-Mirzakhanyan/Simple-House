import React from "react";
import cl from './Button.module.scss';



class Button extends React.Component {

   
    render() {
        return (
        <div className={cl.homeBtn}>
            <button  className={cl.click} activeClassName={cl.active}>Pizza</button>

            <button  className={cl.click} activeClassName={cl.active}>Salad</button>
   
            <button  className={cl.click} activeClassName={cl.active}>Noodle</button>
            
        </div>
        
        )
    }
}   

export default Button;



// butenner@ lini menu mej