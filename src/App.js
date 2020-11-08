import Home from './components/pages/Home';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/common/Services';
import Contact from './components/pages/Contact';
import Portfolio from './components/common/Portfolio';
import Team from './components/common/Team';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact path="/">
          <Redirect to="/home" 
            component={Home}
          />
          
        </Route>

        <Route
          exact={true}
          path='/home'
          component={Home}
        />

        <Route
          exact={true}
          path='/about'
          component={About}
        />

        <Route
          exact={true}
          path='/portfolio'
          component={Portfolio}
        />

        <Route
          exact={true}
          path='/team'
          component={Team}
        />

        <Route
          exact={true}
          path='/contact'
          component={Contact}
        />

        <Route
          exact={true}
          path='/services'
          component={Services}
        />
      </PageWrapper>
    </Router>
  );
}

export default App;
