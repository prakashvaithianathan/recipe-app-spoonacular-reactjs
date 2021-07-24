import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Products from './Pages/Products/Products'
import {Provider} from 'react-redux'
import {createStore } from 'redux'
import reducer from './Store/Reducer/Index'
import dotenv from 'dotenv'
import Information from './Pages/Products/Information/Information'




dotenv.config({path:'./config.env'})


console.log(process.env.API_KEY);
const store = createStore(reducer)

const App = () => {

  const [state, setState] = useState([])



// useEffect(()=>{
//   const getData=async()=>{
//     const {data} = await axios.get('https://api.spoonacular.com/food/search?query=mushroom&number=100&apiKey=d32ac3eac7684d5f80b0955b9e904d67')
//     setState((prevState)=>{
//       return {...prevState,
//         state:[data]
//       }
           

//     })
//   }
  
//   getData()

// },[])


// if(state.length===0){
//   return(
//     <div>Loading...</div>
//   )
// }

// state.state.map(data=>{
//    const {searchResults}=(data)
//    searchResults[0].results.map((data,index)=>{
//      console.log(data);
//    })
// })


// state.state[0].products.map((data,index)=>{
//   console.log(state);
//        console.log(data);
// })

// const {data:{recipes}}=state




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
