import React from 'react'

export default function Footer() {

    let year = new Date().getFullYear();

    return (
        <div className='footer'>
            <span>Ⓒ Copyright {year}</span>
        </div>
    )
}
