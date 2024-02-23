import React from 'react';
import './App.css';

export default function Search() {
    return (
        <div className="Search">
            <form className="form">
                <input
                    className="user-entered-data ps-3"
                    type="text"
                    placeholder="Enter a city..."
                />
                <button
                    className="user-entered-submit btn"
                    type="submit button"
                >
                    Search
                </button>
            </form>
        </div>
    );
}
