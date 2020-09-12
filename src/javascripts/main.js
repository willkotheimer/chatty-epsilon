import navbar from './components/navbar';
import Printmessages from './components/printMessages';
import clearMessages from './components/clearButton';
import font from './components/fontSize';
import darkMode from './components/darkMode';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavbar();
  Printmessages.addmessages();
  $('#clear-btn').click(clearMessages);
  font.fontSizeToggle();
  darkMode.darkModeToggle();
};

init();
