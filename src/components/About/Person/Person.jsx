import React from "react"
import './Person.scss'
import aboutData from "./aboutData"


class Person extends React.Component {
    render() {
        return (
            <div className='personContainer'>
            {aboutData.map((item) => (
                    <div className="aboutPerson">
                        <img className='aboutImg' src={item.image} alt='' />
                        <div>
                            <h4 className='name'>{item.name}</h4>
                            <p className='position'>{item.position}</p>
                            <p className="info">{item.info}</p>
                            <div className="page">
                                <a href="/" >
                                   {item.page}
                                </a>
                                <a href="/" >
                                   {item.page2}
                                </a>
                                <a href="/" >
                                   {item.page3}
                                </a>
                                <a href="/" >
                                   {item.page4}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Person