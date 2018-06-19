import { Route } from 'react-router-dom'

import React from 'react'

import Sample from './Sample.jsx'
import Sample1 from './Suhas/Sample.jsx'


  const Routes = () => {
    return( 
      <div>
      <Route exact path='/' component={Sample} />
      <Route exact path='/' component={Sample1} />
    </div>
  )
 }
export default Routes
