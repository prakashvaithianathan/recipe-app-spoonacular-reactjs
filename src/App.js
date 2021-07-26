import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Products from './Pages/Products/Products'
import {Provider} from 'react-redux'
import {createStore } from 'redux'
import reducer from './Store/Reducer/Index'
import Information from './Pages/Products/Information/Information'
// import EnvFile from './webpack.config'

// import dotenv from 'dotenv'
// dotenv.config({path:'./.env'})

console.log(process.env.API_NAME);
const store = createStore(reducer)

const App = () => {

  const [state, setState] = useState([])


console.log(process.env.API);




  return (
   
   

    <div>
      
     <Provider store={store} >
     <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/products/information' exact component={Information}></Route>
        </Switch>
      </Router>
     </Provider>
      
    
    </div>
  )
}

export default App
