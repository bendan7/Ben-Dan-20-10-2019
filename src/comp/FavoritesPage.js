import React, { Component } from 'react'
import CardFav from './CardFav.js'

class FavoritesPage extends Component {

    constructor(props){
        super()
        this.state = {data:[]}
    }

    componentDidMount(){
        this.setState({
            data:this.props.getFavCitys()
        })
    }
         
    render(){   
        return(
            <div>
                <div className="d-flex flex-sm-row flex-column justify-content-center mt-2 mt-sm-5 ">
                    {this.state.data.map((city,i) =>{
                        return(
                            <CardFav
                            key={i}
                            temp={city.temp}
                            name={city.name} 
                            day = {city.text}
                            weatherIconId={city.weatherIconId} 
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default FavoritesPage;