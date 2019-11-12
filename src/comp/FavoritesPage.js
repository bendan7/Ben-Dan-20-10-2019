import React, { Component } from 'react'
import CardFav from './CardFav.js'

class FavoritesPage extends Component {

    constructor(props){
        super()
        this.state = {data:[]}
    }

    componentDidMount(){
        this.getFavCitys()
    }

    getFavCitys = ()=>{
        this.setState({
            data:this.props.getFavCitys()
        })
    }

    remFromFav = (id)=>{
        this.props.remFromFav(id)
        this.getFavCitys()
    }
         
    render(){   
        return(
            <div>
                <h4 className="mt-5">Favorites</h4>
                <div className="d-flex flex-sm-row flex-column justify-content-center mt-2 mt-sm-5 ">
                    {this.state.data.map((city,i) =>{
                        return(
                            <CardFav
                            key={i}
                            id={city.id}
                            temp={city.temp}
                            name={city.name} 
                            day = {city.text}
                            weatherIconId={city.weatherIconId}
                            remFromFav={this.remFromFav}
                            />
                        )
                    })}
                </div>
            </div>
        )   
    }
}
export default FavoritesPage;