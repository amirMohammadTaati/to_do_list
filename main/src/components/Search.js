import React from 'react'

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      changEevent : props.event,
    }
  }
  render(){
    return(
      <div className="search-bar">
        <label id="search">Add : </label>
        <input onChange={this.state.changEevent} id="search" type="search" />
        <button style={{marginLeft:"10px"}} type="button">Add</button>
      </div>
    )
  }
}

export default Search
