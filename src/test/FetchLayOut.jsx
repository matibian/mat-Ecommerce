import React, { useState, useEffect} from 'react'

export default function FetchLayOut({activity}) {

  return (
    <div>
      {activity.key? (
      <div>
        <p>{activity.activity}</p>
        {/* <p>{activity.activity}</p> */}
      </div>
    ):(
      <p>Loading...</p>
    )}
    </div>
  )
}
