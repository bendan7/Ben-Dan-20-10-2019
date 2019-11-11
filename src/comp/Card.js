/* eslint-disable react/prop-types */
import React from 'react'
import './Card.css';


function Card(props) {
    return(
        <div className="card mx-0 mx-md-3 p-md-3" >
            <div className="card-body d-flex flex-sm-column align-content-center flex-wrap m-0 p-0 ">
                <div className="d-flex flex-sm-column small-screen">
                    <div className="d-flex-col align-items-center justify-items-center">                                                                  
                        <img src={"/AccuWeatherIcons/"+props.weatherIconId+".png"} alt="weatherIcon" />
                        <p className="d-flex justify-content-center">{props.temp+'°c'}</p>
                    </div>
                    <div className="" >{props.day} {props.date}</div>                     
                </div>
            </div>
        </div>
    )
    
}


export default Card;