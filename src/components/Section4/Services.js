import React from 'react';
import "./Services.css";
import {GiAbstract061, GiDiagram, GiSpiderWeb} from "react-icons/gi"

function Services() {
    const serviceList = [
      {
        icon: <GiSpiderWeb />,
        title: "Web Development",
      },
    
      {
        icon: <GiAbstract061 />,
        title: "Product Design ",
      },
      {
        icon: <GiDiagram />,
        title: "Content Creation ",
      },
      {
        icon: <GiDiagram />,
        title: "Graphic Design",
      },
      {
        icon: <GiDiagram />,
        title: "Video Marketing",
      },
    ];

  return (
    <div className='service-container' id='service'>
        <h2>Our Services </h2>
        <div className='service-cards-container'>
            {serviceList.map(({icon, title}) => (
                <div className='service-card'>
                    <div className='service-card-icon'>
                        {icon}
                    </div>
                    <h3>
                        {title}
                    </h3>
                </div>
            ))}
        </div>
     </div>
  )
}

export default Services