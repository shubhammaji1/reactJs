import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(<div>
          <h1>Custom React!</h1>
              </div>)
    
  
}

const ReactElement = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'click to visit'
)
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
    // anotherElement
    // ReactElement


  
)
