
import './App.css';

import React, { useState} from 'react'
import NavBar from './Components/NavBar';
import News  from './Components/News';
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  //Link  //actually in app.js we are not requiring link so i am commenting out to avoid warning at the same time I am using link in navbar component so there I am importing it 
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

 //const pNo = 15 we can use const key word outside of the class and than in Route use pageSize= {pNo}
function App() {
  const pNo = 15; // can't use const or let inside a class , so here we are using this keyword as a reference
  
  // state = {
  //   progress: 0
  // }
  const[progress,setProgress] = useState(0)

  // setProgress=(progress)=>{
  //  this.setState({progress:progress})
  // }
 


    return ( 
      
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}  
          />
          <Routes>
            <Route exact path='/home' element={<News setProgress={setProgress}  key='general' pageSize= {pNo} country='us' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress}  key='business' pageSize={pNo} country='us' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress}  key='entertainment' pageSize={pNo} country='us' category='entertainment' />}></Route>
            <Route exact path='/general' element={<News setProgress={setProgress}  key='general' pageSize={pNo} country='us' category='general' />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress}  key='health' pageSize={pNo} country='us' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress}  key='science' pageSize={pNo} country='us' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress}  key='sports' pageSize={pNo} country='us' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress}  key='technology' pageSize={pNo} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
 
    )
  
}

export default App