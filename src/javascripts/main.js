import navbar from './components/navbar';
import Printmessages from './components/printMessages';
import font from './components/fontSize';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavbar();
  Printmessages.addmessages();
  font.fontSizeToggle();
};

init();
