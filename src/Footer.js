import React from 'react';
import './App.css';

export default function Footer() {
    return (
        <div className="Footer p-3">
            <p className="mt-3 mb-0">
                This project was coded by{' '}
                <a href="https://github.com/emilyvingraham" target="_blank">
                    Emily Ingraham
                </a>
                , is{' '}
                <a
                    href="https://github.com/emilyvingraham/plus-final-project-weather"
                    target="_blank"
                >
                    open-sourced on Github
                </a>{' '}
                and{' '}
                <a
                    href="https://plus-final-project-weather.netlify.app/"
                    target="_blank"
                >
                    hosted on Netlify
                </a>
            </p>
            <p>👽</p>
        </div>
    );
}
