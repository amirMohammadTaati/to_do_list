import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.input = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.done        = this.done.bind(this);
      }
    
}

export default App