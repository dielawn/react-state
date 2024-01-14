import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Form } from './Form.jsx'
import { FeedbackForm } from './FeedbackForm.jsx'
import { Person } from './Person.jsx'
import { CustomInput } from './CustomInput.jsx'
import { MovingDot } from './MovingDot.jsx'
import { ResponseMsg } from './StateMsg.jsx'
import Menu from './Menu.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Menu />
    <ResponseMsg />
    <App />
    <br></br>
    <App />
    <Form />
    <FeedbackForm />
    <Person /><br></br>
    <CustomInput />
    <MovingDot />
  </React.StrictMode>,
)
