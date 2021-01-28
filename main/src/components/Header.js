import React from 'react'

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <h1>To Do List App</h1>
        <p>Write down the things that you're gonna do during the day</p>
        <p>Creat By <a href="www.github.com/amirMohammadTaati">Amir Mohammad</a> with react.js</p>
      </div>
    );
  }
}

export default Header
