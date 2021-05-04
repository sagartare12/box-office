import React from 'react'
import {Switch , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          Hi this is first page
        </Route>
        <Route exact path="/starred">
          This is second page
        </Route>
        <Route>
          Error 404 page not found
        </Route>
    </Switch>
    </div>
  );
}

export default App;
