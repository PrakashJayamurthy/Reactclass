import React from 'react'

import { Scrollbars } from 'rc-scrollbars';


const Search = (props) => {
	console.log(props)
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.country_name}
    </li>
  ))
  return  <Scrollbars style={{ width: 500, height: 300 }}> <ul>{options}</ul> </Scrollbars>
}

export default Search