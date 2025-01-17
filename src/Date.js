import React from 'react'

export default function D() {

    let dateObj = new Date()
    const days = ["Sunday","Monday","Tuesday","Wednesday",
    "Thusday","Friday","Saturday"]
    const months = ["Jan","Feb","Mar","Apr","May",
        "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const day = days[dateObj.getDay()]
    const month = months[dateObj.getMonth()]
    const date = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()

    return <h2 className='date'>{day}, {month} {date}, {year}</h2>
}
