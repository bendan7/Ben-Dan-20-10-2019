/* eslint-disable react/prop-types */
import React from 'react'
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


function CardFav(props) {
    return(
        <div className="card mx-0 mx-md-3 p-md-3" >
            <div className="card-body d-flex flex-sm-column align-content-center flex-wrap m-0 p-0 ">
                <div className="d-flex flex-sm-column align-items-center justify-items-center small-screen">                                              
                    
                    <div className="d-flex flex-sm-column align-items-center justify-items-center">
                        <img  className="fixweathericon" src={"AccuWeatherIcons/"+props.weatherIconId+".png"} alt="weatherIcon" style={{width:'12vw', minWidth:'100px'}} />
                        <div>{props.temp+'°c'}</div>
                    </div>
                    <div >
                        <div className="d-flex justify-content-center" >{props.day}</div>
                        <div className="d-flex justify-content-center" >{props.name}</div>
                        
                    </div>
                    <div className="d-flex justify-content-center mt-sm-3" onClick={()=>{props.remFromFav(props.id)}} ><FontAwesomeIcon icon={faTimesCircle} size="2x" color="white"/></div>
                                       
                </div>
            </div>
        </div>
    )
    
}


export default CardFav;