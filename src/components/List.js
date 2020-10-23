import React, {Component} from 'react';
import ListItem from './ListItem'
import movies from '../data/movies.json';
import Form from './Form'

class List extends Component{
  constructor(){
    super()
    
    this.state = {
      movies: movies
    }

  }
  render(){
    let moviesMap = this.state.movies.map(movie => {return <ListItem key={movie.id}/>})
    // console.log(movies:,this.state.movies)
    return(
      <div className='List'>
        <Form/>
        {moviesMap}
        </div>
    )
  }

}

export default List