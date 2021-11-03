import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from '../../Context/AuthProvider';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import AddItem from '../Pages/AddItem/AddItem';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import ManageOrder from '../Pages/ManageOrder/ManageOrder';
import MyOrder from '../Pages/MyOrder/MyOrder';
import Order from '../Pages/Order/Order';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './Header.css';

const Header = () => {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <HeaderMenu></HeaderMenu>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/home'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>
                        <Route exact path='/add-item'>
                            <AddItem></AddItem>
                        </Route>
                        <Route exact path='/order'>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route exact path='/manage-order'>
                            <ManageOrder></ManageOrder>
                        </Route>

                        <PrivateRoute path='/foods/:id'>
                            <Order></Order>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default Header;