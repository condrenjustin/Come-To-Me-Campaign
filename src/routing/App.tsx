import React from 'react';
import HeaderContainer from '../component/header/headerContainer';
import HomeContainer from '../component/home/homeContainer';
import AboutContainer from '../component/about/aboutContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppFooter from '../component/footer/AppFooter';

class App extends React.Component{

  render() {
    return (
      <Router>
        <div>
        <HeaderContainer/>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/aboutUs" exact component={AboutContainer} />
          <Route path="/communityPartners" exact component={HomeContainer} />
          <Route path="/gallery" exact component={HomeContainer} />
          <Route path="/interactiveResourceGuide" exact component={HomeContainer} />
        </Switch>
        {/* <AppFooter/> */}
        </div>
      </Router>
    );
  }
}

export default App;