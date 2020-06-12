import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import NavBar from './components/organism/navbar';
import { Routes, IRoutes } from './routes';
import './index.css';
import NavBarHeader from "./components/molecule/navbar-header";

const App: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <BrowserRouter>
        <NavBarHeader onClick={handleOpenMenu} openMenu={openMenu}/>
        <NavBar openMenu={openMenu}/>
      {Routes.map(({ path, Component }: IRoutes) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={400}
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