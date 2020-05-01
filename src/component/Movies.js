import React,{Component} from 'react'
import {getMovies} from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import MoviesTable from './MoviesTable'
import Pagination from '../common/pagination'
import ListGroup from '../common/ListGroup'
import paginate from '../utils/paginate'
import _ from "lodash"


class Movies extends Component{
  state={
    movies: [],
    genres:[],
    currentPage:1,
    selectedGenre:'',
    sortedColumn:{path:'title',order:'asc'},
    pageSize:4
  }
  componentDidMount(){
    const genre=[{_id:'',name:"All Genres"},...getGenres()]
    this.setState({
      movies:this.props.movies,
      genres:genre
    })
  }
  handleGenres = genre =>{
    this.setState({
      selectedGenre:genre,
      currentPage:1
    })
  }
  handleMovies=(movie)=>{
    const movies=this.state.movies.filter((m)=> m._id!==movie._id);
    this.setState({movies})
  }
  handleLike=(movie)=>{
     const movies=[...this.state.movies];
     const index=movies.indexOf(movie);
     movies[index]={...movies[index]};
     movies[index].liked=!movies[index].liked;
    this.setState({movies})
	
  }
  handleSort=(sortedColumn)=>{
    
    this.setState({sortedColumn});
  }
  onPageChange =(page)=>{
    this.setState({
      currentPage:page
    })
  }
  render(){
     if(this.state.movies.length===0){
       return <p>There are no movies in the database</p>
     }
     else{
       const filtered=this.state.selectedGenre && this.state.selectedGenre._id ? this.state.movies.filter(m=>m.genre._id===this.state.selectedGenre._id):this.state.movies;
       const sorted=_.orderBy(filtered,[this.state.sortedColumn.path],[this.state.sortedColumn.order])
       const movies=paginate(sorted,this.state.currentPage,this.state.pageSize);
    return(
      <>
      
       <div className="row">
           <div className="col-3">
               <ListGroup items={this.state.genres}
                          selectedItem={this.state.selectedGenre}
                          onSelectedItem={this.handleGenres}
                          />
           </div>
           <div className="col">
                <p>Showing {filtered.length} movies in the database</p>
                <MoviesTable movies={movies}
                             onLike={this.handleLike}
                             onDelete={this.handleMovies}
                             onSort={this.handleSort}
                             sortedColumn={this.state.sortedColumn}/>
               
              <Pagination itemCount={filtered.length}
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  onPageChange={this.onPageChange}
              />
          </div>
           
      </div>
      </>
       
     
     
    
     
    
    
    )
     }
  }
}
export default Movies