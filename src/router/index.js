import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../page/home';
import ResentSearch from '../page/resentSearch';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/resentSearch' component={ResentSearch} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
