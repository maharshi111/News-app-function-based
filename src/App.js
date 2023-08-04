
import './App.css';

import React, { Component } from 'react'
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
export default class App extends Component {
  pNo = 15 // can't use const or let inside a class , so here we are using this keyword as a reference
  
  state = {
    progress: 0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return ( 
      
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}  
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress}  key='general' pageSize= {this.pNo} country='us' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress}  key='business' pageSize={this.pNo} country='us' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' pageSize={this.pNo} country='us' category='entertainment' />}></Route>
            <Route exact path='/general' element={<News setProgress={this.setProgress}  key='general' pageSize={this.pNo} country='us' category='general' />}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress}  key='health' pageSize={this.pNo} country='us' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress}  key='science' pageSize={this.pNo} country='us' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress}  key='sports' pageSize={this.pNo} country='us' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress}  key='technology' pageSize={this.pNo} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
 
    )
  }
}

