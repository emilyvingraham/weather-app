import React from 'react';
import './App.css';

export default function HeaderLinks() {
    return (
        <table className="Header ms-3 my-3">
            <thead>
                <tr>
                    <td>
                        <a
                            href="https://weather.com/weather/tenday/l/London+England+United+Kingdom?canonicalCityId=805c6df1c2518951d4dffa28cf6e483358644c3131109dff6c9a8a2c265fbc67"
                            target="_blank"
                            rel="noreferrer"
                            className="Cities"
                        >
                            London
                        </a>
                    </td>
                    <td>
                        <a
                            href="https://weather.com/weather/tenday/l/Minato+ku+Tokyo+Prefecture+Japan?canonicalCityId=88531c440be4859e58ca9bee96a8fef95643429857e3c626542368c9cb3c4815"
                            target="_blank"
                            rel="noreferrer"
                            className="Cities"
                        >
                            Tokyo
                        </a>
                    </td>
                    <td>
                        <a
                            href="https://weather.com/weather/tenday/l/San+Diego+CA?canonicalCityId=cb5c473781cc06501376639dce8f0823a99187dcb42c79471a4303c076d66452"
                            target="_blank"
                            rel="noreferrer"
                            className="Cities"
                        >
                            San Diego
                        </a>
                    </td>
                    <td>
                        <a
                            href="https://weather.com/weather/tenday/l/98ef17e6662508c0af6d8bd04adacecde842fb533434fcd2c046730675fba371?par=samsung_widget"
                            target="_blank"
                            rel="noreferrer"
                            className="Cities"
                        >
                            Sydney
                        </a>
                    </td>
                </tr>
            </thead>
        </table>
    );
}
