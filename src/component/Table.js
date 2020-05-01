import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = (props)=> {
  const {columns,data,sortedColumn,onSort} = props;
   return(
        <table className="table">
                   <TableHeader column={columns}
                                sortedColumn={sortedColumn}
                                onSort={onSort}
                    />
                    <TableBody data={data}
                               column={columns}
                    />
                                
                 
          </table>
   )
}
export default Table