import React from 'react';
import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from './components/Weather';

const API_KEY = "201e6c09092a2eb1a62feba964a44fec"; 

class App extends React.Component {

	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		discription: undefined,
		error: undefined
	}


	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		
		const country = e.target.elements.country.value;

		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}
			&units=metric`);
		const data = await api_call.json();
		
		if (city&&country&&data.cod === 200) {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				discription: data.weather[0].description,
				error: undefined
			});
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				discription: undefined,
				error: "Please enter the correct city and country"
			});
		}
		
	}
	render () {
		return (
			<div>
				<div  className = "wrapper">
					<div className = "main">
						<div className = "container-fuild"> 
							<div className = "row"> 
								<div className = "col-xs-5 title-container"> 
									<Titles />
								</div>
								<div className = "col-xs-7 form-container"> 
									<Form getWeather={this.getWeather}/>
									<Weather 
										temperature={this.state.temperature}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										discription={this.state.discription}
										error={this.state.error}
									/>

								</div>
								
									
							</div>
						</div>
					</div> 
				</div> 

			</div>
		);
	}
}

export default App;


				