import React, { Component } from 'react';
import './App.css'
import { Router, Route, IndexRoute, hashHistory, Link, IndexLink } from 'react-router';

const PageNotFound = () => <h1>404 not found</h1>;

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/hello/:name' component={Hello} />
                    <Route path='*' component={PageNotFound} />
                </Route>
            </Router>
        )
    }
}

const Home = () => <h1>Siemka tu Home</h1>
const Contact = () => <h1>Tu Contact</h1>

const Navigation = props => (
    <div>
        <ul>
            <li><Link to='/' activeClassName='active' onlyActiveOnIndex>Home</Link></li>
            <li><IndexLink to='/contact' activeClassName='active'>Contact</IndexLink></li>
        </ul>
        {props.children}
    </div>
);

const Hello = (props) => <h1>Witaj, {props.params.name}</h1>
export default App;

