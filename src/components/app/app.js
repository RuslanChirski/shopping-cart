import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import {CartPage, MainPage} from "../pages";
import Header from "../header";

const App = () => {
  return (
    <main role='main' className='container'>
      <Header total={126}/>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/cart'>
          <CartPage />
        </Route>
        <Route path='*'>
          <h1>This page is not found</h1>
        </Route>
      </Switch>
  </main>
  )
}

export default (App);