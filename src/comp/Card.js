/* eslint-disable react/prop-types */
import React from 'react'
import './Card.css';


function Card(props) {
    return(
        <div className="card mx-0 mx-md-3 p-md-3" >
            <div className="card-body d-flex flex-sm-column align-content-center flex-wrap m-0 p-0 ">
                <div className="d-flex flex-sm-column align-items-center justify-items-center small-screen">
                    <div className="d-flex-col align-items-center justify-items-center">                                                                  
                        <img src={"/AccuWeatherIcons/"+props.weatherIconId+".png"} alt="weatherIcon" />
                        <div className="d-flex justify-content-center">{props.temp+'°c'}</div>
                    </div>
                    <div >{props.day} {props.date}</div>                     
                </div>
            </div>
        </div>
    )
    
}


export default Card;