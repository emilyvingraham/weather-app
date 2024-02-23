import React from 'react';
import './App.css';

export default function Details() {
    return (
        <div className="Details grid-2-columns container my-3">
            <div className="grid-2-columns-background">
                <p>Fri. 11:30, snowy clouds</p>
                <p>United States of America</p>
                <p>Lat: 39.74°, Long: -104.98°</p>
            </div>
            <div className="grid-2-columns-background">
                <p>
                    Feels like: <strong>1°C</strong>
                </p>
                <p>
                    Humidity: <strong>71%</strong>
                </p>
                <p>
                    Wind: <strong>1km/h</strong>
                </p>
            </div>
        </div>
    );
}
