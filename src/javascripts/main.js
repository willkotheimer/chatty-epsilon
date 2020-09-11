import navbar from './components/navbar';
import font from './components/fontSize';

import '../styles/main.scss';

const init = () => {
  navbar.buildNavbar();
  font.fontSizeToggle();
};

init();
