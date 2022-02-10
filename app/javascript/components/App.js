import React, { Component } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ApartmentIndex from './pages/ApartmentIndex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const { logged_in, current_user, new_user_route, sign_in_route, sign_out_route } = this.props;
    return (
      <>
        <Router>
          <Header {...this.props}/>
          <h1>This is HomePage</h1>
          
        </Router>
            <Home/>
            <ApartmentIndex />
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      </>
    );
  }
}
export default App;
