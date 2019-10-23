/* eslint-disable react/prop-types */
import React from 'react'
import './Card.css';


function Card(props) {
    return(
        <div className="card mx-0 mx-md-3" >
            <div className="card-body d-flex flex-sm-column justify-content-between align-content-center flex-wrap  ">
                <div className="d-flex-col">                                              
                    <div className="d-flex justify-content-center">
                        <img src={"/AccuWeatherIcons/"+props.weatherIconId+".png"} alt="weatherIcon" />
                    </div>
                    
                    <h4 className="d-flex justify-content-center">{props.temp+'°c'}</h4>

                </div>
                <div>
                    <h4 className="d-flex justify-content-center" >{props.day}</h4>
                    <h4 className="d-flex justify-content-center" >{props.name}</h4>
                </div>
            </div>
        </div>
    )
    
}


export default Card;