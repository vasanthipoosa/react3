import React, { Component } from 'react'
import './index1.css';

class Class extends Component {
  render() {
    return (
      <div className='class'>
     <h1>This is created using Class component</h1>   
     <p>This is done using External css</p>
     <p style={{color:'blue'}}>This is done using inline css</p>
      </div>
    )
  }
}
export default Class