import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import { CSSTransition } from 'react-transition-group';
import { routes, IRoutes } from './routes';

const Routes: React.FC = () => {
  return (
      <>
        {routes.map(({ path, Component }: IRoutes) => (
            <Route exact key={path} path={path}>
              {({ match }) => (
                  <CSSTransition
                      unmountOnExit
                      classNames={"page"}
                      in={match != null}
                      timeout={400}
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
              )}
            </Route>
        ))}
      </>
  );
}

export default Routes;
