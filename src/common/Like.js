import React,{Component} from 'react'
class Like extends Component{
  
  render(){
    var classes = "fa fa-heart";
    if(!this.props.isLiked){
      classes += "-o"
    }
    return(
      <span>
<i onClick={this.props.onClick} style={{cursor:'pointer'}} className={classes} aria-hidden="true"></i></span>
      
      
    )
  }
}
export default Like