import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Routes, IRoutes } from './routes';
import './index.css';
import NavBarMenu from './components/molecule/navbar-menu';
import NavBarHeader from './components/molecule/navbar-header';

const App: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleItemClick = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <BrowserRouter>
      <header>
        <NavBarHeader onClick={handleOpenMenu} openMenu={openMenu} />
        <NavBarMenu handleItemClick={handleItemClick} openMenu={openMenu} />
      </header>
      {Routes.map(({ path, Component }: IRoutes) => (
        <Route exact key={path} path={path}>
          {({ match }) => (
            <CSSTransition
              unmountOnExit
              classNames="page"
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
    </BrowserRouter>
  );
};

export default App;
