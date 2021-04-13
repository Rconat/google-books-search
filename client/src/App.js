import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// importing pages
import Saved from './pages/saved'
import Search from './pages/search'

// importing components
import Nav from './components/nav'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
