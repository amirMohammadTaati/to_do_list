import React from 'react'

class Search extends React.Component{
  render(){
    return(
      <div className="search-bar">
        <label id="search">Add : </label>
        <input id="search" type="search" />
        <button style={{marginLeft:"10px"}} type="button">Add</button>
      </div>
    )
  }
}

export default Search
