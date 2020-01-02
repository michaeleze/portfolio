import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import NavBar from './components/navbar';
import { routes, IRoutes } from './routes';
import './app.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {routes.map(({ path, Component }: IRoutes) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </BrowserRouter>
  );
}

export default App;