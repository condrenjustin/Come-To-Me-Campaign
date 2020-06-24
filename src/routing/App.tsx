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
          <Route path="/aboutUs" exact component={HomeContainer} />
          <Route path="/communityPartners" exact component={HomeContainer} />
          <Route path="/gallery" exact component={HomeContainer} />
          <Route path="/interactiveResourceGuide" exact component={HomeContainer} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;