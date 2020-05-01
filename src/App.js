import React, { Component } from 'react';
import Movies from './component/Movies'
import {Route,Redirect,Switch} from 'react-router-dom';
import Navbar from './component/Navbar'
import NotFound from './component/NotFound'
import MoviesDetail from './component/MoviesDetail'
import Customers from './component/Customers'
import Login from './component/Login'
import {getMovies} from './services/fakeMovieService'
import {getGenres} from './services/fakeGenreService'
import './App.css';
import Rentals from './component/Rentals'

class App extends Component {
   state={
    movies: [],
    genres:[],
   
  }
   componentDidMount(){
    const genre=[{_id:'',name:"All Genres"},...getGenres()]
    this.setState({
      movies:getMovies(),
      genres:genre
    })
  }
  handleState=(newList)=>{
    console.log('handleState called')
    this.setState({
      movies:newList
    })
  }
  

  render() {
    return (
      <div className="App">
         <main className="container">
            <Navbar handleSubmit={this.handleSubmit}
                    movies={this.state.movies}
                    handleState={this.handleState}/>
          <Switch>
            <Route path='/movies' component={()=><Movies movies={this.state.movies}/>}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/rentals' component={Rentals}/>
            <Route path='/movies/:id' component={MoviesDetail}/>
            <Route path='/login' component={Login}/>
            <Route path='/not-found' component={NotFound}/>
            <Redirect from='/' exact to='/movies'/>
            <Redirect to='/not-found' />
          </Switch>
           
         
           
            
         </main>
      </div>
    );
  }
}

export default App;
