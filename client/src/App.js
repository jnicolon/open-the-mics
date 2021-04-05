import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import Home from "./pages/Home";
import Navbar from "./components/nav/Navbar";
import CreateMicPage from "./pages/CreateMicPage";
import MicHostPage from "./pages/MicHostPage";
import MicPage from "./pages/MicPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createamic" component={CreateMicPage} />
            <Route exact path="/hosts/:hosturl" component={MicHostPage} />
            <Route exact path="/mics/:micid" component={MicPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </ApolloProvider>
  );
}

export default App;
