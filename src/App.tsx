import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import NavBarMenu from './components/molecules/navbar-menu';
import NavBarHeader from './components/molecules/navbar-header';
import { routes } from './routes/routes';
import Routes from "./routes";
import {FaGithub, FaInstagram, FaLinkedin, FaXing} from "react-icons/all";

const mockSocialMediaItems = [
    {
        link: 'https://linkedin.com/in/michaeleze',
        icon: <FaLinkedin />,
    },
    {
        link: 'https://instagram.com/michaelcityboy',
        icon: <FaInstagram />,
    },
    {
        link: 'https://xing.com/michaeleze',
        icon: <FaXing />,
    },
    {
        link: 'https://github.com/michaeleze',
        icon: <FaGithub />,
    },
];

const App: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <BrowserRouter>
      <header>
        <NavBarHeader handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
        <NavBarMenu handleCloseMenu={handleCloseMenu} openMenu={openMenu} routes={routes} socialMedia={mockSocialMediaItems}/>
      </header>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
