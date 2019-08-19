import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Products from './pages/products';
import Deliverys from './pages/deliverys';
import Panel from './pages/panel';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Sidebar />
      <Route path="/" exact={true} component={Products} />
      <Route path="/deliverys" exact={true} component={Deliverys} />
      <Route path="/panel" exact={true} component={Panel} />
    </BrowserRouter>
  );
}

export default App;
