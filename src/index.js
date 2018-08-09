import 'basscss/css/basscss.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.jsx'
import './styles.css'
//import App from './Suhas/App.jsx';
import App from './containers/App';

ReactDOM.render(
 /* <Router>
      <Routes/>
  </Router>,
document.getElementById('app'),
*/

<App title='Relevant Persons'/>, document.getElementById('root')


)


