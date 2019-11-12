/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Select from 'react-select';


class AutoCompleteSearch extends Component {

  constructor(props){
    super()
    this.state = {
      selectedOption: null,
      options: []
    };
  }

  
  componentDidMount() {
    //start with defualt values
    this.handleChange({key:this.props.cityId,label:this.props.cityName,value:this.props.cityName})
  }


handleChange = selectedOption => {

    this.setState(
    { selectedOption },
    () => console.log(`Option selected:`, this.state.selectedOption)
    );
    this.props.updateSelectCityName(selectedOption.label)
    this.props.getCurrentConditionsFromAPI(selectedOption.key)
    this.props.getForcastFromAPI( selectedOption.key)
};

  // Event fired when the input value is changed
requestOptions = (input, { action }) =>{
    if (action === "input-blur" || action ==='menu-close'){
      return
    } 
    const api_get_queary = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='+this.props.apiKey+'&q='+input
    const suggestions= this.getSuggestionsFromAPI(api_get_queary)
    this.setState({options:suggestions}) 
}

getSuggestionsFromAPI(url) {
    //let x = require('./demo.json');
    //this section build the suggestion array from the json
    const sugg =[]

    console.log("new api call")
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {      
        result.forEach(e => {
          sugg.push ({ value: e.LocalizedName + ', ' + e.Country.ID, label: e.LocalizedName + ', ' + e.Country.ID, key:e.Key })
        });
        this.setState({options:sugg})
        return 
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log('ERROR: opsss something happen with the autocomplete request')
        console.log(error)
      }
    )
  }
  
  render() {
    const { selectedOption } = this.state;

    return (
      <div style={{maxWidth:'600px', width:'100%', marginRight:'10px'}}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          onInputChange ={this.requestOptions}
          options={this.state.options}
          placeholder ="Search"
          
        />
      </div>
    )
  }
}

export default AutoCompleteSearch;