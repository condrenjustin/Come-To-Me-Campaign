import React from 'react';
import HeaderContainer from '../component/header/headerContainer';
import HomeContainer from '../component/home/homeContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component{

  render() {
    return (
      <Router>
        <div>
        <HeaderContainer/>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/Community-Partners" exact component={HomeContainer} />
          <Route path="/Gallery" exact component={HomeContainer} />
          <Route path="/Interactive-Resource-Guide" exact component={HomeContainer} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;