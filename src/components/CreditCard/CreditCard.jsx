import React, { useEffect } from 'react'

import './creditCard.css'
import {eventListeners} from './creditCardCode'

const CreditCard = () => {
    useEffect(() => {
        const container = document.getElementById('creditCardContainer');
        eventListeners(container);
      }, []);

    return <main id="creditCardContainer">

        <section id="card" className="card">
            <div id="highlight"></div>
            <section className="card__front">
                <div className="card__header">
                    <div>CreditCard</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="60" id="svg895" version="1.1"
                        viewBox="-96 -98.908 832 593.448">
                        <defs id="defs879">
                            {/* <style id="style877" type="text/css">
                                .e {{
                                    fill: '#f79e1b'
                            }}
                            </style> */}
                        </defs>
                        <path id="rect887" display="inline" fill="#ff5f00" stroke-width="5.494"
                            d="M224.833 42.298h190.416v311.005H224.833z" />
                        <path id="path889"
                            d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z"
                            fill="#eb001b" stroke-width="5.494" />
                        <path id="path891"
                            d="M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z"
                            className="e" fill="#f79e1b" stroke-width="5.494" />
                        <path id="path893"
                            d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z"
                            className="e" fill="#f79e1b" stroke-width="5.494" />
                    </svg>
                </div>
                <div id="card_number" className="card__number">
                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>

                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>

                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>

                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>
                    <span>#<br /></span>
                </div>
                <div className="card__footer">
                    <div className="card__holder">
                        <div className="card__section__title">Card Holder</div>
                        <div id="card_holder">Name on card</div>
                    </div>
                    <div className="card__expires">
                        <div className="card__section__title">Expires</div>
                        <span id="card_expires_month">MM</span>/<span id="card_expires_year">YY</span>
                    </div>
                </div>
            </section>
            <section className="card__back">
                <div className="card__hide_line"></div>

                <div className="card_cvv">
                    <span>CVV</span>
                    <div id="card_cvv_field" className="card_cvv_field"></div>
                </div>
            </section>
        </section>

        <form className="form">
            <div>
                <label htmlfor="number">Card Number</label>
                <input id="number" type="number" />
            </div>
            <div>
                <label htmlfor="holder">Card Holder</label>
                <input id="holder" type="text" />
            </div>
            <div className="filed__group">
                <div>
                    <label htmlfor="expiration_month">Expiration Date</label>
                    <div className="filed__date">
                        <select id="expiration_month">
                            <option selected disabled>Month</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select id="expiration_year">
                            <option selected disabled>Year</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                            <option>2031</option>
                            <option>2032</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlfor="cvv">CVV</label>
                    <input id="cvv" type="number" />
                </div>
            </div>
        </form>
        
    </main>
}

export default CreditCard
