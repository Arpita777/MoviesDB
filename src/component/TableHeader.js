import React,{Component} from 'react'
class TableHeader extends Component{
   raiseSort=path=>{
       const sortedColumn={...this.props.sortedColumn};
    if(sortedColumn.path===path){
      sortedColumn.order=sortedColumn.order==='asc'?'desc':'asc';
    }
    else{
      sortedColumn.path=path;
      sortedColumn.order='asc';
    }
    this.props.onSort(sortedColumn);
  };
  renderSortIcon=(column)=>{
    const{sortedColumn}=this.props;
    if(column.path!==sortedColumn.path) return null;
    if(sortedColumn.order==='asc') return <i className="fa fa-sort-asc"></i>
    return  <i className="fa fa-sort-desc"></i>
  }
  render(){
    const {column}=this.props;
    return(
      <thead>
        <tr>
          {column.map(column=>(
            <th className="clickable"
            key={column.path ||column.key}
            onClick={()=>this.raiseSort(column.path)}
          >
          {column.label}{this.renderSortIcon(column)}
          </th>
          ))} 
        </tr>
       
      </thead>
     

    );
  }
}
export default TableHeader