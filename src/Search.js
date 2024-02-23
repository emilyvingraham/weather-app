import React from 'react';
import './App.css';

export default function Search() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <input type="text" placeholder="Enter a city..." />
                    <button type="submit" className="CitySearch">
                        Search
                    </button>
                    <button type="submit" className="CurrentSearch">
                        Current
                    </button>
                </div>
            </div>
        </div>
    );
}
