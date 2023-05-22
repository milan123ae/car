import React from 'react'

import { returnPaginationRange } from './PaginationForm'

function Pagination(props) {
  let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);
  return (
    <ul className='pagination pagination-md justify-content-end'>
        <li className='page-item'><span className='page-link'>&laquo</span></li>
        <li className='page-item'><span className='page-link'>&lsaquo</span></li>
        {array.map(value => ( 
            <li key={value} className='page-item'><span className='page-link'>{value}</span></li>
            ))}
        <li className='page-item'><span className='page-link'>&rsaquo</span></li>
        <li className='page-item'><span className='page-link'>&raquo</span></li>
    </ul>
  )
}

export default Pagination