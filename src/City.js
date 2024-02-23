import React from 'react';
import './App.css';

export default function City() {
    return (
        <div className="City grid-2-columns container mt-3">
            <h1>Denver</h1>
            <h1>
                3<span className="degree">°C </span>❄️
            </h1>
        </div>
    );
}
