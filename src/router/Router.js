import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { ItemListContainer } from '../components/itemListContainer';

export const Router = ()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={ItemListContainer}/>
        </Switch>
    </BrowserRouter>
    )
}