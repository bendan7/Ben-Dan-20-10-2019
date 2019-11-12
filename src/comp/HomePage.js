import React, { Component } from 'react'
import './HomePage.css';
import AutoCompleteSearch from'./AutoCompleteSearch.js'
import Card from'./Card.js'
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
            this.setState({FavoritesAddOrRemove: "Favorites"})
        }
    }

    clickHandler = ()=>{
        if (this.props.isInFav()){
            this.props.remFromFav()
            this.setState({FavoritesAddOrRemove: "Favorites"})
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
            <div className="body d-flex-col">         
                    <div className="d-flex-col w-100 m-0 p-0" >  
                    
                        {/* search bar */}                    
                        <div className=" d-flex justify-content-center mx-sm-5 mt-sm-5 mx-2 mt-2 animated slower bounceInLeft "> 
                            <AutoCompleteSearch
                                apiKey={this.props.apiKey}
                                cityName = {this.props.cityName}
                                cityId = {this.props.cityId}
                                updateSelectCityName={this.props.updateSelectCityName}
                                getForcastFromAPI= {this.props.getForcastFromAPI}
                                getCurrentConditionsFromAPI={this.props.getCurrentConditionsFromAPI}
                            />
                            <button className="btn btn-outline-light btn-sm "
                                onClick={this.clickHandler} >
                                {this.state.FavoritesAddOrRemove}
                            </button>
                        </div> 

                        <div className="d-flex justify-content-center px-2 px-sm-5 pt-2 pt-sm-5"  >
                            
                            <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center " style={{ width:'100%', maxWidth:'700px'}}>
                                
                                {/* current city block */}
                                <div className="currentCity d-flex-col ">
                                    <div >
                                        {currentweatherIcon}
                                    </div>
                                    <div>
                                        <h5>{temp}</h5>
                                        <h5>{this.props.cityName}</h5> 
                                    </div>
                                </div>

                            </div>
                        </div> 

                        
                            {/* current city Weather block */}
                            <div className="d-flex justify-content-center mb-4">
                                    <h2 className="myh1">{this.props.selectedCityConditions.WeatherText}</h2>
                            </div>

                        {/* 5 days forcast section*/}
                        <div className="d-flex flex-sm-row flex-column justify-content-center  ">
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