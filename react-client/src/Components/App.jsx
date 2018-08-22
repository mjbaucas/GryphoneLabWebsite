import React, { Component } from 'react';
import { HashRouter, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

import Navigation from './Navigation';

import HomePage from './HomePage';
import About from './About';
import Experiments from './Experiments';
import Contacts from './Contacts';
import Sponsors from './Sponsors';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" path='/about' component={About} />
          <Route name="experiments" path='/experiments' component={Experiments} />
          {/*<Route name="contacts" path='/contacts' component={Contacts} />
          <Route name="sponsors" path='/sponsors' component={Sponsors} />*/}
        </div>
      </HashRouter>
    )
  }
}
export default App;