import React, {Component, useState} from 'react'
import './App.css';
import Navbar from './components/pages/Navbar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mobile: false
    }
  }

  checkMobile(){
    const width = window.innerWidth;
    console.log(width);
    if(width <= 790)
      this.setState({mobile: true});
    else
    this.setState({mobile: false});
  }

  componentDidMount(){
    window.addEventListener("resize", this.checkMobile.bind(this));
    this.checkMobile();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkMobile.bind(this));
}

  render(){
  return (
    <Router>
      <Navbar mobile={this.state.mobile} />
      <Switch>
        <Route path="/"/>
      </Switch>
      <Hero mobile={this.state.mobile}/>
      <About />
      <Skills />
      <Portfolio mobile={this.state.mobile}/>
      <Contact/>
    </Router>
  );
  }
}

export default App;
