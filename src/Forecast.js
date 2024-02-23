import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import './App.css';

export default function Forecast() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2 mb-3">
                    <h6 className="Day">Monday</h6>
                    <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        color="black"
                        size={50}
                        animate={true}
                    />
                    <div className="ForecastDegrees">
                        <span>6°C</span>
                        <span> </span>
                        <span>|</span>
                        <span> </span>
                        <span>10°C</span>
                    </div>
                </div>
                <div className="col-lg-2 mb-3">
                    <h6 className="Day">Tuesday</h6>
                    <ReactAnimatedWeather
                        icon="FOG"
                        color="black"
                        size={50}
                        animate={true}
                    />
                    <div className="ForecastDegrees">
                        <span>8°C</span>
                        <span> </span>
                        <span>|</span>
                        <span> </span>
                        <span>12°C</span>
                    </div>
                </div>
                <div className="col-lg-2 mb-3">
                    <h6 className="Day">Wednesday</h6>
                    <ReactAnimatedWeather
                        icon="PARTLY_CLOUDY_DAY"
                        color="black"
                        size={50}
                        animate={true}
                    />
                    <div className="ForecastDegrees">
                        <span>4°C</span>
                        <span> </span>
                        <span>|</span>
                        <span> </span>
                        <span>8°C</span>
                    </div>
                </div>
                <div className="col-lg-2 mb-3">
                    <h6 className="Day">Thursday</h6>
                    <ReactAnimatedWeather
                        icon="CLOUDY"
                        color="black"
                        size={50}
                        animate={true}
                    />
                    <div className="ForecastDegrees">
                        <span>6°C</span>
                        <span> </span>
                        <span>|</span>
                        <span> </span>
                        <span>8°C</span>
                    </div>
                </div>
                <div className="col-lg-2 mb-3">
                    <h6 className="Day">Friday</h6>
                    <ReactAnimatedWeather
                        icon="RAIN"
                        color="black"
                        size={50}
                        animate={true}
                    />
                    <div className="ForecastDegrees">
                        <span>8°C</span>
                        <span> </span>
                        <span>|</span>
                        <span> </span>
                        <span>14°C</span>
                    </div>
                </div>
                <div className="col-lg-2 mb-3">
                    <h6 className="Day">Saturday</h6>
                    <ReactAnimatedWeather
                        icon="SNOW"
                        color="black"
                        size={50}
                        animate={true}
                    />
                    <div className="ForecastDegrees">
                        <span>2°C</span>
                        <span> </span>
                        <span>|</span>
                        <span> </span>
                        <span>4°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
