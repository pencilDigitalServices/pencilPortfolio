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
        title: "Web Design",
      },
      {
        icon: <GiDiagram />,
        title: "Consultancy",
      },
      {
        icon: <GiDiagram />,
        title: "Graphics Design",
      },
      {
        icon: <GiDiagram />,
        title: "Video Marketing",
      },
    ];

  return (
    <div className='service-container'>
        <h2>Services that we provide</h2>
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