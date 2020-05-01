import React from 'react'

import {getMovies} from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'

import {NavLink} from 'react-router-dom'
class Navbar extends React.Component{
  state={
    value:''
  }
  handleChange=(event)=> {
    console.log('handleChange called')
    this.setState({value: event.target.value});
     
    if(event.target.value==""){
      console.log('inside handlechangeif')
      let newList=getMovies()
      this.props.handleState(newList)
    }
  }
 
  
  handleSubmit=(e)=>{
    e.preventDefault();
   
    console.log(this.state.value);
    console.log(e.target.value);   
    console.log('Search Box')
     let currentList = [];
     let newList = [];
     if (this.state.value !== "") {
       console.log('inside if')
       currentList = this.props.movies;
         newList = currentList.filter(item => {
                // change current item to lowercase
        const lc = item.title.toLowerCase();
        const lc2=item.genre.name.toLowerCase();
                // change search term to lowercase
        const filter = this.state.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter)||lc2.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = getMovies();
    }
        // Set the filtered state based on what our rules added to newList
    this.props.handleState(newList)
  }
     
  
  render(){
  return(
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">Vivdly</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item">
        <NavLink className="nav-link" to="/movies">Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">Customers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
      <input className="form-control mr-sm-2"
             type="search"
             placeholder="Search"
             aria-label="Search"
             value={this.state.value}
             onChange={this.handleChange} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  )}
}
export default Navbar