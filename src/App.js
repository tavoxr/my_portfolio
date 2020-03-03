import React from 'react';
import {BrowserRouter,Route,Switch,Link}from 'react-router-dom';



import './css/main.css';
import Layout from './components/General/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>  
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path= '/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
