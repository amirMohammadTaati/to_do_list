import React from 'react';
import Header from './components/Header'
import Search from './components/Search'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        name : "Amir",
    }
  }
  render(){
    return(
      <div className = "header">
        <Header />
        <hr />
        <Search />

      </div>
    )
  }
}
export default App
