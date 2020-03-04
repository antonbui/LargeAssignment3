import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Container from './Container';
import Home from './Home';
import Bubbles from './Bubbles';
import Bundles from './Bundles';
import About from './About';
import Cart from './Cart';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/home" render={ () => <Redirect to="/"/>} />
          <Route exact path="/bubbles" component={ Bubbles } />
          {/* <Route exact path="/bubbles/:" component={ Bubbles } /> */}
          <Route exact path="/bundles" component={ Bundles } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </Container>
    </div>
    );
  }
}

export default App;
