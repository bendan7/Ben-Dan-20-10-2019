import React, { Component } from 'react'
import './LandingPage.css';
import AutoCompleteSearch from'./AutoCompleteSearch.js'
import Card from'./Card.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class LandingPage extends Component {
    constructor(){
        super()
        this.state  = {currentCityName:"",Forecasts:[], CurrentConditions:{}, isFav:0 }
    }

    componentDidMount(){
        //defualt values of tel aviv
        this.updateCurrCityName('Tel Aviv')
        this.getForcastFromAPI('215854')
        this.getCurrentConditionsFromAPI('215854')
    }

    updateCurrCityName =(name)=>{
        this.setState({currentCityName:name})
        
    }

    getForcastFromAPI = (cityId)=> {
        //const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+cityId+"?apikey=mvekqG183jXpVvLVIokbeX6IqkqLSIZr&metric=true"
        const url="https://jsonplaceholder.typicode.com/todos/1"
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            result=  require('./demoforcats.json');
            this.setState(
                {
                    Forecasts : result.DailyForecasts
                }
            )
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log('ERROR: opsss something happen with the getForcastFromAPI request')
          }
        )
        
      }

    getCurrentConditionsFromAPI = (cityId)=> {
        //const url ="http://dataservice.accuweather.com/currentconditions/v1/"+cityId+"?apikey=mvekqG183jXpVvLVIokbeX6IqkqLSIZr"
        const url="https://jsonplaceholder.typicode.com/todos/1"
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            result=  require('./democurrentweather.json');
            this.setState(
                {
                    CurrentConditions : result[0]
                }
            )
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log('ERROR: opsss something happen with the getForcastFromAPI request')
          }
        )
       
    }

    enableAddToFavBut (){
        this.addToFavBut=
        <button className="btn btn-primary btn-sm "
        onClick={this.addToFav} >
            Add to Favorites!
            <span className="icon">
                <FontAwesomeIcon icon={faHeart} size="2x" color="red"/>
            </span> 
        </button>
    }
    
    addToFav = ()=>{
        const ans =this.props.addToFav({
            name:this.state.currentCityName ,
            temp:this.state.CurrentConditions.Temperature.Metric.Value,
            text:this.state.CurrentConditions.WeatherText,
            weatherIconId:this.state.CurrentConditions.WeatherIcon})
        // ans = 0 => already in the fav
        this.setState ({isFav:ans})
        }

    remFromFav = ()=>{
        const ans =this.props.remFromFav({
            name:this.state.currentCityName })
        if(ans){
            this.setState({isFav:0})
        }
    }
        
    addOrRemovBut = ()=>{
        //ans=1 not in the fav
        if(this.props.isInFav({name:this.state.currentCityName})==0){
            return(
                <button className="btn btn-primary btn-sm  "
                onClick={this.addToFav} >
                Add to Favorites
                <span className="icon">
                <FontAwesomeIcon icon={faHeart} size="2x" color="red"/>
                </span> 
                </button>
            )
        }
        return (
            <button className="btn btn-primary btn-sm  "
            onClick={this.remFromFav} >
            Remove
            <span className="icon">
            <FontAwesomeIcon icon={faHeart} size="2x" color="red"/>
            </span> 
            </button>
        )
    }

    render(){
        
        const days_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let temp = ""
        let currentweatherIcon = ""
        if(typeof this.state.CurrentConditions.Temperature !== "undefined"){
            temp = this.state.CurrentConditions.Temperature.Metric.Value +'°c'
            currentweatherIcon = <img className="WeatherIcon" src={"/AccuWeatherIcons/"+this.state.CurrentConditions.WeatherIcon+".png"} alt="weatherIcon" />
        }


        return(
            <div className="d-flex-col">         
                    <div className="d-flex-col w-100 " >  

                        {/* search bar */}                    
                        <div className=" d-flex justify-content-center mx-sm-5 mt-sm-5 mx-2 mt-2 "> 
                            <AutoCompleteSearch updateCityName={this.updateCurrCityName} getForcastFromAPI= {this.getForcastFromAPI} getCurrentConditionsFromAPI={this.getCurrentConditionsFromAPI} />
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
                                        <h5>{this.state.currentCityName}</h5> 
                                        <h5>{temp}</h5>
                                    </div>
                                    
                                </div>


                            {/* add to favorites block */}   
                                <div className="d-flex align-self-sm-start align-self-end ">
                                    {this.addOrRemovBut()}
                                </div>
                            </div>
                        </div> 

                        
                            {/* current city Weather block */}
                            <div className="d-flex justify-content-center pb-2">
                                    <h1>{this.state.CurrentConditions.WeatherText}</h1>
                                </div>

                        {/* 5 days forcast section*/}
                        <div className="d-flex flex-sm-row flex-column justify-content-center mb-2 ">
                            {this.state.Forecasts.map((day,i) =>{
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
export default LandingPage;