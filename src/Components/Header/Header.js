import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Home from '../Pages/Home/Home';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Router>
                <HeaderMenu></HeaderMenu>
                <Switch>
                    <Route to='/'>
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Header;