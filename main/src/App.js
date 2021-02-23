import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.input = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.done        = this.done.bind(this);
    }

    render(){
        let cards = [];
        for(let item of Object.entries(this.state)){
          if(item[1] != undefined){
            let info_arr = [item[0],item[1][0]];
            cards.push(<Job key={item[1][1]} info={info_arr} done={this.done}/>);
          }
        }
        return(
            <div className="container">
              <div className="input-section">
                <input 
                type="text" 
                placeholder="New todo..."
                ref={this.input}
                />
                <span onClick={this.handleClick}>+</span>
              </div>
     
              <div className="to-do-list">
                {cards}
              </div>
            </div>
         );
    }
    
}

const Job = props => {
    return(
    <div class="card">
      <h1>{props.info[0]}</h1>
      <button 
      id={props.info[0]}
      onClick={props.done}
      >
        Done
      </button>
    </div>
    );
  }
  

export default App