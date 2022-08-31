import React, { useState, useEffect} from 'react'
import FetchLayOut from './FetchLayOut';

export default function FetchContainer() {
  const [activity, setActivity] = useState({})
  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
      .then((res) => res.json())
      .then((json) => setActivity(json))
      .catch((e) => console.log(e))
      .finally(() => console.log('lo ultimo que hago'));
  },[])
  return (
    <div>
      <FetchLayOut activity={activity} />
    </div>
  )
}
