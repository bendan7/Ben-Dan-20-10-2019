/* eslint-disable react/prop-types */
import React from 'react'
import './Card.css';


function Card(props) {
    return(
        <div className="card mx-0 mx-md-3" >
            <div className="card-body d-flex flex-sm-column justify-content-between align-content-center flex-wrap m-0 p-0 ">
                <div className="d-flex-col ">                                              
                    <div className="d-flex justify-content-center m-0 p-0">
                        <img src={"/AccuWeatherIcons/"+props.weatherIconId+".png"} alt="weatherIcon" />
                    </div>
                    
                    <p className="d-flex justify-content-center m-0 p-0">{props.temp+'°c'}</p>

                </div>
                <div >
                    <p className="d-flex justify-content-center m-0 p-0" >{props.day}</p>
                    <p className="d-flex justify-content-center m-0 p-0" >{props.date}</p>
                </div>
            </div>
        </div>
    )
    
}


export default Card;