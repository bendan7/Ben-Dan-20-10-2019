import React, { Component } from 'react'
import './App.css';
import HomePage from './comp/HomePage.js'
import FavoritesPage from './comp/FavoritesPage.js'
import Header from './comp/Header.js'

import {
  Switch,
  Route
} from "react-router-dom";


const API_KEY = 'oHflRrFAtMd4mLGwIcIAdjr0XKC3PZwm'

class App extends Component {

  constructor(){
    super();
    this.state ={
      favoritesCitys:[],
      selectedCityId:"",
      selectedCityName:"",
      selectedCityConditions:{},
      selectedCityForecasts:[],
      selectedCityisFav:0,
      initFlag: true
    }
    
  }
/*
  componentDidMount() {
    //defualt values
    this.updateSelectCityName('Tel Aviv')
    this.getForcastFromAPI('215854')
    this.getCurrentConditionsFromAPI('215854')
    this.isInFav()
  }
*/
  updateSelectCityName =(name)=>{
    this.setState({selectedCityName:name})
    
  }

  getCurrentConditionsFromAPI = (cityId)=> {
    
    const url ="https://dataservice.accuweather.com/currentconditions/v1/"+cityId+"?apikey="+API_KEY
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState(
            {
              selectedCityConditions : result[0],
              selectedCityId:cityId
            }
        )
        this.render()
        
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log('ERROR: opsss something happen with the getForcastFromAPI request')
      }
    )
   
  }

  getForcastFromAPI = (cityId)=> {
    const url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+cityId+"?apikey="+API_KEY+"&metric=true"
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState(
            {
              selectedCityForecasts : result.DailyForecasts
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

  addToFav = ()=> {
    if (this.isInFav(this.state.selectedCityId)){
      console.log("allready in fav")
      return 0
    }
    this.state.favoritesCitys.push({
      id:this.state.selectedCityId,
      name:this.state.selectedCityName ,
      temp:this.state.selectedCityConditions.Temperature.Metric.Value,
      text:this.state.selectedCityConditions.WeatherText,
      weatherIconId:this.state.selectedCityConditions.WeatherIcon
    })
    return 1
  }

  isInFav = (cityId)=>{
    // if cityId is undefined it use the current city
    if (cityId === undefined){
      cityId = this.state.selectedCityId
    }
    for (let i = 0; i < this.state.favoritesCitys.length; i++) {
      if(this.state.favoritesCitys[i].id === cityId){
        return 1
      }
    }
    return 0
  }

  remFromFav =(cityId)=>{

    // if cityId is undefined it use the current city
    if (cityId === undefined){
      cityId = this.state.selectedCityId
    }

    for (let i = 0; i < this.state.favoritesCitys.length; i++) {
      if(this.state.favoritesCitys[i].id === cityId){
        this.state.favoritesCitys.splice(i, 1)
        return 1
      }
    }
    return 0
  }

  getFavCitys = ()=>{
    return this.state.favoritesCitys
  }

  
  render(){

    return (
      <div className="wrapper">
          <Header/>
          <Switch>
          <Route path="/favoritesPage">
              <FavoritesPage getFavCitys={this.getFavCitys} />
            </Route>
            <Route path="/">
              <HomePage
                apiKey={API_KEY}
                updateSelectCityName = {this.updateSelectCityName}
                getCurrentConditionsFromAPI= {this.getCurrentConditionsFromAPI}
                getForcastFromAPI = {this.getForcastFromAPI}
                addToFav={this.addToFav}
                isInFav={this.isInFav}
                remFromFav={this.remFromFav}
                cityName = {this.state.selectedCityName}
                selectedCityConditions = {this.state.selectedCityConditions}
                selectedCityForecasts = {this.state.selectedCityForecasts}
              />
            </Route>

          </Switch>         
      </div>
    );
  } 
}

export default App;

