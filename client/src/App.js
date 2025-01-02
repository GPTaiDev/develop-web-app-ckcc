import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HabitPage from './components/HabitPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/habit/:id' component={HabitPage} />
      </Switch>
    </Router>
  );
}

export default App;