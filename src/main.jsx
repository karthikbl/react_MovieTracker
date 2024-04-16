import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StarRating from './StarRating'

const Test=()=>{
// passing data from child to parent
const[movieRating, setMovieRating]= useState(0)
  return(
    <div>
      <StarRating color='red' maxRating={5} onSetRating={setMovieRating} messages={['Terrible','Bad','Okay','Good', 'Amazing' ]}/>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible','Bad','Okay','Good', 'Amazing' ]}/>
    <StarRating maxRating={8} color="blue" size={24} className='test' defaultRating={6} />
    <Test/> */}

  </React.StrictMode>,
)
