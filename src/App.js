import React from 'react';
import {Switch, Route  } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './components/Home';


function App() {
  return (
    <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
    </Layout>


  );
}

export default App;
