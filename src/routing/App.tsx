import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'
import HeaderContainer from '../component/header/headerContainer';
import HomeContainer from '../component/home/homeContainer';
import AboutContainer from '../component/about/aboutContainer';
import PartnerContainer from '../component/partners/partnerContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppFooter from '../component/footer/AppFooter';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

class App extends React.Component{

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
        <div>
        {/* <HeaderContainer/> */}
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/aboutUs" exact component={AboutContainer} />
          <Route path="/communityPartners" exact component={PartnerContainer} />
          <Route path="/interactiveResourceGuide" exact component={HomeContainer} />
        </Switch>
        <AppFooter/>
        </div>
      </Router>
      </ThemeProvider>
    );
  }
}

export default App;