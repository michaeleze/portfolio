import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Project }  from './pages';

const App: React.FC = () => {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/project" component={Project} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
