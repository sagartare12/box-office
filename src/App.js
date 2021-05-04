import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Navs from './components/Navs'
import Home from './Pages/Home'
import Starred from './Pages/Starred'
function App() {
  return (
    <div className="App">
      <Navs />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>
          Error 404 page not found
        </Route>
    </Switch>
    </div>
  );
}

export default App;
