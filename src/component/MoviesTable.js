import React,{Component} from 'react'
import Table from './Table'
import {Link} from 'react-router-dom'
import Like from '../common/Like'

class MoviesTable extends Component{
 columns=[
   {path:'title',label:'Title',content:movie=>(<Link to={`movies/${movie._id}`}>{movie.title}</Link>)},
   {path:'genre.name',label:'Genre'},
   {path:'numberInStock',label:'Stock'},
   {path:'dailyRentalRate',label:'Rate'},
   {key:'like',
   content:movie=>(
     <Like isLiked={movie.liked} onClick={()=>this.props.onLike(movie)} />
    ) },
   {key:'delete',
    content:movie=>(<button type="button" onClick={()=>this.props.onDelete(movie)} class="btn btn-danger btn-sm">Delete</button>)}
 ]
  render(){
    const {movies,onLike,onDelete,onSort,sortedColumn}=this.props;
    return(
      <Table columns={this.columns}
             data={movies}
             onLike={onLike}
             onDelete={onDelete}
             onSort={onSort}
             sortedColumn={sortedColumn} />
    )
  }
}


export default MoviesTable;