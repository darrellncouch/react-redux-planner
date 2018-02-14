import React, { Component } from 'react';


//actions

//Components
import Heading from '../components/Heading';
import List from '../components/List'

class Planner extends Component {

  state={
    toDate: true,
    completed: false,
    test: "success"
  }

  changeSelected = (e, index)=>{
    e.preventDefault()
    index === 1
    ? this.setState({
        toDate: true,
        completed: false
      })
    : this.setState({
        toDate: false,
        completed: true
      })

  }

  render () {
    return (
      <div>
        <Heading
          appState={this.state}
          changeSelected={this.changeSelected}
        />
        <List/>
      </div>
    )
  }
}
export default Planner
