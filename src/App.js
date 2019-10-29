import React, { Component } from 'react'
import './App.css';
import LandingPage from './comp/LandingPage.js'
import FavoritesPage from './comp/FavoritesPage.js'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";


const API_KEY = 'oHflRrFAtMd4mLGwIcIAdjr0XKC3PZwm'

class App extends Component {

  constructor(){
    super();
    this.state ={favoritesCitys:[]}
       

  }

  addToFav = (obj)=> {
    // this section prevent form adding the same city obj into the array
    if (this.isInFav(obj)){
      return 0
    }
    this.state.favoritesCitys.push(obj)
    return 1
    }

  isInFav = (obj)=>{
    let i;
    for (i = 0; i < this.state.favoritesCitys.length; i++) {
      if(this.state.favoritesCitys[i].name === obj.name){
        return 1
      }
    }
    return 0
  }

  remFromFav =(obj)=>{
    let i;
    for (i = 0; i < this.state.favoritesCitys.length; i++) {
      if(this.state.favoritesCitys[i].name === obj.name){
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
          <div className="nav d-flex justify-content-between p-1 p-sm-5">
            <h2>Herolo Task</h2>
              <div >
                <Link to="/">
                  <button style={{marginRight:'1vw',}} type="button" className="btn btn-primary" >Home</button>
                </Link>
                <Link to="/favoritesPage">
                  <button style={{marginLeft:'1vw'}} type="button" className="btn btn-primary" >favoritesPage</button>
                </Link>
              </div>
          </div>

          <Switch>
            <Route path="/favoritesPage">
              <FavoritesPage getFavCitys={this.getFavCitys} />
            </Route>
            <Route path="/">
              <LandingPage apiKey={API_KEY} addToFav={this.addToFav} isInFav={this.isInFav} remFromFav={this.remFromFav} />
            </Route>
          </Switch>
          
          
      </div>
    );
  } 
}

export default App;

