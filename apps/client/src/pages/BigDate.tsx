import React from 'react'
import moment from 'moment'

const BigDate = () => {
const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
  <div>
    <h1 className="text-2xl">Big Date</h1>
    <p>{formattedDate}</p>
  </div>
  )
}

export default BigDate