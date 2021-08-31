import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/ItemListContainer/itemListContainer';
import { Checkout } from '../components/Checkout/Checkout';
import { NotFound } from '../components/NotFound/NotFound';
import { Cart } from '../components/Cart';

export const Router = ()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={ItemListContainer}/>
            <Route path="/product" component={ItemDetailContainer}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
    )
}