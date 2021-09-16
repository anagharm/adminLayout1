import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 

// Layout Call
import AdminLayoutRoute from './adminLayout/AdminLayout';
import AuthLayoutRoute from './authLayout/AuthLayout';


//Component Call
import CommingSoon from '../../components/commingSoon/CommingSoon';
import RegisterUser from '../../components/user/RegisterUser';
import ListOfUsers from '../../components/user/ListOfUsers';
import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/auth/SignUp';

export default class RoutesList extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/signin" />
                    </Route>
                    <AdminLayoutRoute exact path="/" component={CommingSoon}/>
                    <AdminLayoutRoute exact path="/register" title="Register New User" component={RegisterUser}/>
                    <AdminLayoutRoute exact path="/userlist" title="List of Users" component={ListOfUsers}/>
                    <AuthLayoutRoute exact path="/signin" component={SignIn}/>
                    <AuthLayoutRoute exact path="/signup" component={SignUp}/>
                </Switch>
            </Router>
        )
    }
}


