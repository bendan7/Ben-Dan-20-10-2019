(window.webpackJsonpherolo=window.webpackJsonpherolo||[]).push([[0],{24:function(e,t,a){},31:function(e,t,a){e.exports=a(50)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),c=a.n(i),r=(a(36),a(4)),o=a(5),l=a(6),m=a(7),d=a(8),u=(a(37),a(38),a(30)),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this))).handleChange=function(e){a.setState({selectedOption:e}),a.props.updateSelectCityName(e.label),a.props.getCurrentConditionsFromAPI(e.key),a.props.getForcastFromAPI(e.key)},a.requestOptions=function(e,t){var n=t.action;if("input-blur"!==n&&"menu-close"!==n){var s="https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+a.props.apiKey+"&q="+e,i=a.getSuggestionsFromAPI(s);a.setState({options:i})}},a.state={selectedOption:null,options:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.handleChange({key:this.props.cityId,label:this.props.cityName,value:this.props.cityName})}},{key:"getSuggestionsFromAPI",value:function(e){var t=this,a=[];fetch(e).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){a.push({value:e.LocalizedName+", "+e.Country.ID,label:e.LocalizedName+", "+e.Country.ID,key:e.Key})})),t.setState({options:a})}),(function(e){}))}},{key:"render",value:function(){var e=this.state.selectedOption;return s.a.createElement("div",{style:{maxWidth:"600px",width:"100%",marginRight:"10px"}},s.a.createElement(u.a,{value:e,onChange:this.handleChange,onInputChange:this.requestOptions,options:this.state.options,placeholder:"Search"}))}}]),t}(n.Component);a(24);var p=function(e){return s.a.createElement("div",{className:"card mx-0 mx-md-3 p-md-3"},s.a.createElement("div",{className:"card-body d-flex flex-sm-column align-content-center flex-wrap m-0 p-0 "},s.a.createElement("div",{className:"d-flex flex-sm-column align-items-center justify-items-center small-screen"},s.a.createElement("div",{className:"d-flex flex-sm-column align-items-center justify-items-center"},s.a.createElement("img",{className:"fixweathericon",src:"/AccuWeatherIcons/"+e.weatherIconId+".png",alt:"weatherIcon",style:{width:"10vw",minWidth:"100px"}}),s.a.createElement("div",{className:"d-flex justify-content-center"},e.temp+"\xb0c")),s.a.createElement("div",null,e.day," ",e.date))))},v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).clickHandler=function(){e.props.isInFav()?(e.props.remFromFav(),e.setState({FavoritesAddOrRemove:"Favorites"})):(e.props.addToFav(),e.setState({FavoritesAddOrRemove:"Remove"}))},e.state={},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.isInFav()?this.setState({FavoritesAddOrRemove:"Remove"}):this.setState({FavoritesAddOrRemove:"Favorites"})}},{key:"render",value:function(){var e="",t="";return"undefined"!==typeof this.props.selectedCityConditions.Temperature&&(e=this.props.selectedCityConditions.Temperature.Metric.Value+"\xb0c",t=s.a.createElement("img",{className:"WeatherIcon",src:"/AccuWeatherIcons/"+this.props.selectedCityConditions.WeatherIcon+".png",alt:"weatherIcon"})),s.a.createElement("div",{className:"body d-flex-col"},s.a.createElement("div",{className:"d-flex-col w-100 m-0 p-0"},s.a.createElement("div",{className:" d-flex justify-content-center mx-sm-5 mt-sm-5 mx-2 mt-2 animated slower bounceInLeft "},s.a.createElement(h,{apiKey:this.props.apiKey,cityName:this.props.cityName,cityId:this.props.cityId,updateSelectCityName:this.props.updateSelectCityName,getForcastFromAPI:this.props.getForcastFromAPI,getCurrentConditionsFromAPI:this.props.getCurrentConditionsFromAPI}),s.a.createElement("button",{className:"btn btn-outline-light btn-sm ",onClick:this.clickHandler},this.state.FavoritesAddOrRemove)),s.a.createElement("div",{className:"d-flex justify-content-center px-2 px-sm-5 pt-2 pt-sm-5"},s.a.createElement("div",{className:"d-flex flex-sm-row flex-column justify-content-center align-items-center ",style:{width:"100%",maxWidth:"700px"}},s.a.createElement("div",{className:"currentCity d-flex-col "},s.a.createElement("div",null,t),s.a.createElement("div",null,s.a.createElement("h5",null,e),s.a.createElement("h5",null,this.props.cityName))))),s.a.createElement("div",{className:"d-flex justify-content-center mb-4"},s.a.createElement("h2",{className:"myh1"},this.props.selectedCityConditions.WeatherText)),s.a.createElement("div",{className:"d-flex flex-sm-row flex-column justify-content-center  "},this.props.selectedCityForecasts.map((function(e,t){return s.a.createElement(p,{key:t,temp:e.Temperature.Maximum.Value,date:e.Date.slice(5,e.Date.search("T")).replace("-","/"),day:v[new Date(e.Date.slice(0,e.Date.search("T")).replace("-","/")).getDay()],weatherIconId:e.Day.Icon})})))))}}]),t}(n.Component),y=a(26),C=a(27);var F=function(e){return s.a.createElement("div",{className:"card mx-0 mx-md-3 p-md-3"},s.a.createElement("div",{className:"card-body d-flex flex-sm-column align-content-center flex-wrap m-0 p-0 "},s.a.createElement("div",{className:"d-flex flex-sm-column align-items-center justify-items-center small-screen"},s.a.createElement("div",{className:"d-flex flex-sm-column align-items-center justify-items-center"},s.a.createElement("img",{className:"fixweathericon",src:"/AccuWeatherIcons/"+e.weatherIconId+".png",alt:"weatherIcon",style:{width:"12vw",minWidth:"100px"}}),s.a.createElement("div",null,e.temp+"\xb0c")),s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex justify-content-center"},e.day),s.a.createElement("div",{className:"d-flex justify-content-center"},e.name)),s.a.createElement("div",{className:"d-flex justify-content-center mt-sm-3",onClick:function(){e.remFromFav(e.id)}},s.a.createElement(y.a,{icon:C.a,size:"2x",color:"white"})))))},g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this))).getFavCitys=function(){a.setState({data:a.props.getFavCitys()})},a.remFromFav=function(e){a.props.remFromFav(e),a.getFavCitys()},a.state={data:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getFavCitys()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h4",{className:"mt-5"},"Favorites"),s.a.createElement("div",{className:"d-flex flex-sm-row flex-column justify-content-center mt-2 mt-sm-5 "},this.state.data.map((function(t,a){return s.a.createElement(F,{key:a,id:t.id,temp:t.temp,name:t.name,day:t.text,weatherIconId:t.weatherIconId,remFromFav:e.remFromFav})}))))}}]),t}(n.Component),E=a(16);var I=function(e){return s.a.createElement("div",{className:"nav d-flex justify-content-between p-1 p-sm-5 "},s.a.createElement("h2",null,"Herolo Task"),s.a.createElement("div",null,s.a.createElement(E.b,{to:"/"},s.a.createElement("button",{style:{marginRight:"1vw"},type:"button",className:"btn btn-outline-light  "},"Home")),s.a.createElement(E.b,{to:"/favoritesPage"},s.a.createElement("button",{style:{marginLeft:"1vw"},type:"button",className:"btn btn-outline-light "},"Favorites"))))},x=a(14),N="5n75gEJJtytWih2erkcIxf9UHG63J9fQ",w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).updateSelectCityName=function(t){e.setState({selectedCityName:t})},e.getCurrentConditionsFromAPI=function(t){fetch("https://dataservice.accuweather.com/currentconditions/v1/"+t+"?apikey="+N).then((function(e){return e.json()})).then((function(a){e.setState({selectedCityConditions:a[0],selectedCityId:t}),e.render()}),(function(e){console.log("ERROR: opsss something happen with the getForcastFromAPI request")}))},e.getForcastFromAPI=function(t){fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+t+"?apikey="+N+"&metric=true").then((function(e){return e.json()})).then((function(t){e.setState({selectedCityForecasts:t.DailyForecasts})}),(function(e){console.log("ERROR: opsss something happen with the getForcastFromAPI request")}))},e.addToFav=function(){return e.isInFav(e.state.selectedCityId)?(console.log("allready in fav"),0):(e.state.favoritesCitys.push({id:e.state.selectedCityId,name:e.state.selectedCityName,temp:e.state.selectedCityConditions.Temperature.Metric.Value,text:e.state.selectedCityConditions.WeatherText,weatherIconId:e.state.selectedCityConditions.WeatherIcon}),1)},e.isInFav=function(t){void 0===t&&(t=e.state.selectedCityId);for(var a=0;a<e.state.favoritesCitys.length;a++)if(e.state.favoritesCitys[a].id===t)return 1;return 0},e.remFromFav=function(t){void 0===t&&(t=e.state.selectedCityId);for(var a=0;a<e.state.favoritesCitys.length;a++)if(e.state.favoritesCitys[a].id===t)return e.state.favoritesCitys.splice(a,1),1;return 0},e.getFavCitys=function(){return e.state.favoritesCitys},e.state={favoritesCitys:[],selectedCityId:"215854",selectedCityName:"Tel Aviv, IL",selectedCityConditions:{},selectedCityForecasts:[],selectedCityisFav:0,initFlag:!0},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(I,null),s.a.createElement(x.c,null,s.a.createElement(x.a,{path:"/favoritesPage"},s.a.createElement(g,{getFavCitys:this.getFavCitys,remFromFav:this.remFromFav})),s.a.createElement(x.a,{path:"/"},s.a.createElement(f,{apiKey:N,updateSelectCityName:this.updateSelectCityName,getCurrentConditionsFromAPI:this.getCurrentConditionsFromAPI,getForcastFromAPI:this.getForcastFromAPI,addToFav:this.addToFav,isInFav:this.isInFav,remFromFav:this.remFromFav,cityName:this.state.selectedCityName,cityId:this.state.selectedCityId,selectedCityConditions:this.state.selectedCityConditions,selectedCityForecasts:this.state.selectedCityForecasts}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46),a(47),a(48),a(49);c.a.render(s.a.createElement(E.a,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.747c3959.chunk.js.map