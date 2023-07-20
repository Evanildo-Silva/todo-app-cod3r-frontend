import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './app.css'

import React from 'react'
import Todo from '../Todo'
import Navbar from '../components/Navbar'

export default props => (
  <div className='container'>
    <Navbar />
    <Todo />
  </div>
)