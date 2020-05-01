import React from 'react'

const MoviesDetail=(props)=>{
  return (
    <div>
    <h1>Movies:{props.match.params.id}</h1>
    <button class='btn btn-primary' onClick={()=>props.history.push('/')}>Save</button>
    </div>
    
  )
}
export default MoviesDetail