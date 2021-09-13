import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 

// Layout Call
import AdminLayoutRoute from './adminLayout/AdminLayout';

//Component Call
import CommingSoon from '../../components/commingSoon/CommingSoon';
import RegisterUser from '../../components/user/RegisterUser';

export default class RoutesList extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/" />
                    </Route>
                    <AdminLayoutRoute exact path="/" component={CommingSoon}/>
                    <AdminLayoutRoute exact path="/register" title="Register New User" component={RegisterUser}/>
                </Switch>
            </Router>
        )
    }
}


