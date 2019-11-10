import React, { Component } from 'react'
import './LandingPage.css';
import AutoCompleteSearch from'./AutoCompleteSearch.js'
import Card from'./Card.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const days_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


class HomePage extends Component {
    constructor(){
        super()
        this.state={}
    }

    componentDidMount() {
        if (this.props.isInFav()){
            
            this.setState({FavoritesAddOrRemove: "Remove"})
        }
        else {
            this.setState({FavoritesAddOrRemove: "Add to Favorites"})
        }
    }

    clickHandler = ()=>{
        if (this.props.isInFav()){
            this.props.remFromFav()
            this.setState({FavoritesAddOrRemove: "Add to Favorites"})
        }
        else {
            this.props.addToFav()
            this.setState({FavoritesAddOrRemove: "Remove"})
        }
    }

    render(){
        
        let temp = ""
        let currentweatherIcon = ""
 
        if(typeof this.props.selectedCityConditions.Temperature !== "undefined"){
            temp = this.props.selectedCityConditions.Temperature.Metric.Value +'°c'
            currentweatherIcon = 
            <img className="WeatherIcon"
            src={"/AccuWeatherIcons/"+this.props.selectedCityConditions.WeatherIcon+".png"} 
            alt="weatherIcon" 
            />
        }


        return(
            <div className="d-flex-col">         
                    <div className="d-flex-col w-100 " >  

                        {/* search bar */}                    
                        <div className=" d-flex justify-content-center mx-sm-5 mt-sm-5 mx-2 mt-2 "> 
                            <AutoCompleteSearch
                                apiKey={this.props.apiKey}
                                updateSelectCityName={this.props.updateSelectCityName}
                                getForcastFromAPI= {this.props.getForcastFromAPI}
                                getCurrentConditionsFromAPI={this.props.getCurrentConditionsFromAPI}
                            />
                        </div> 

                        {/*second row */}
                        <div className="d-flex justify-content-center px-2 px-sm-5 pt-2 pt-sm-5"  >
                            
                            <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center" style={{ width:'100%', maxWidth:'700px'}}>
                                
                                {/* current city block */}
                                <div className="currentCity d-flex">
                                    <div>
                                        {currentweatherIcon}
                                    </div>
                                    <div>
                                        <h5>{this.props.cityName}</h5> 
                                        <h5>{temp}</h5>
                                    </div>
                                    
                                </div>


                            {/* add to favorites block */}   
                                <div className="d-flex align-self-sm-start align-self-end ">
                                <button className="btn btn-primary btn-sm  "
                                        onClick={this.clickHandler} >
                                        {this.state.FavoritesAddOrRemove}
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faHeart} size="2x" color="red"/>
                                        </span> 
                                    </button>
                                </div>
                            </div>
                        </div> 

                        
                            {/* current city Weather block */}
                            <div className="d-flex justify-content-center pb-2">
                                    <h1>{this.props.selectedCityConditions.WeatherText}</h1>
                                </div>

                        {/* 5 days forcast section*/}
                        <div className="d-flex flex-sm-row flex-column justify-content-center mb-2 ">
                            {this.props.selectedCityForecasts.map((day,i) =>{
                                return(
                                    <Card
                                    key={i}
                                    temp={day.Temperature.Maximum.Value}
                                    date={day.Date.slice(5,day.Date.search('T')).replace("-", "/")} 
                                    day = {days_arr[ new Date(day.Date.slice(0,day.Date.search('T')).replace("-", "/")).getDay()]}
                                    weatherIconId={day.Day.Icon} 
                                    />
                                )
                            })}
                        </div> 

                    </div>
            </div>
        )
    }
}
export default HomePage;