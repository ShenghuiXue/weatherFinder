import React from "react";

/*
class Weather extends React.Component {
	render () {
		return (
			<div>
				{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
				{this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
				{this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
				{this.props.discription && <p>Discription: {this.props.discription}</p>}
				{this.props.error && <p>Error: {this.props.error}</p>}
			</div>
		); 
	}
}
*/

const Weather = props =>  (
		<div className = "weather__info">
				{
					props.city && props.country && 
					<p className="weather__key">Location: 
						<span className="weather__value">{props.city}, {props.country}</span>
					</p>
				}
				{
					props.temperature && 
					<p className="weather__key">Temperature: 
						<span className="weather__value">{props.temperature} °C</span>
					</p>
				}
				{
					props.humidity && 
					<p className="weather__key">Humidity: 
						<span className="weather__value">{props.humidity} %</span>
					</p>
				}
				{
					props.discription && 
					<p className="weather__key">Discription: 
						<span className="weather__value">{props.discription}</span>
					</p>
				}
				{
					props.error && 
					<p className="weather__key">Error: 
						<span className="weather__value">{props.error}</span>
					</p>
				}
			</div>
	);



export default Weather;