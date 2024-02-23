import React from 'react';
import './App.css';

export default function Search() {
    return (
        <div className="Search">
            <form className="Form">
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
                <button
                    className="user-entered-current btn"
                    type="submit button"
                >
                    Current
                </button>
            </form>
        </div>
    );
}
