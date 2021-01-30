import React from 'react';
import Header from './components/Header'
import Search from './components/Search'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        value : '',
    }
  }

  handleChange = event => {
    this.setState({
      value : event.target.value,
    });
  }
  render(){
    console.log(this.state.value);
    return(
      <div className = "header">
        <Header />
        <hr />
        <Search event={this.handleChange}/>

      </div>
    )
  }
}
export default App
