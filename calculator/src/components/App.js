import React from 'react';
import './index.css'


//Functional component for arithmetic buttons
function Button(props) {
  return (
    <button className='signs'>
      {props.value}
    </button>
  )
}

//Functional component for number button
function Number(props) {
  return (
    <button className='numbers'>
      {props.value}
    </button>
  )
}

function App() {
  return (
    <div className='main-container'>
      <div className='display'> 0 </div>
      <div className='controls-container'>
        <div className='numbers-container'>
          <button className='clear'>clear</button>
          <div >
            <Number value='1'/>
            <Number value='2'/>
            <Number value='3'/>
            <Number value='4'/>
            <Number value='5'/>
            <Number value='6'/>
            <Number value='7'/>
            <Number value='8'/>
            <Number value='9'/>  
          </div>
        </div>
        <div className='symbols'>
          <Button value='÷' />
          <Button value='-' />
          <Button value='+' />
          <Button value='=' />
          <Button value= '0' />

        </div>
      </div>

    </div>
  )

}

export default App;