import React from 'react';

function ListItem (props){

  return (
    <div className='List-Item'>
      <img src="{props.movie.posterImg}" alt="" className="movie-poster"/>
      <div>
        <p>{props.movie.title}</p>
        <p>{props.movie.year}</p>
      </div>
    </div>
  )
  }

export default ListItem;