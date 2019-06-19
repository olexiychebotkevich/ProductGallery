import React from 'react';
import {Switch, Route  } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './components/Home';
import GalleryWidget from './components/gallery';
import ProductWidget from './components/product';


function App() {
  return (
    <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={GalleryWidget} />
          <Route exact path='/product' component={ProductWidget} />
        </Switch>
    </Layout>


  );
}

export default App;
