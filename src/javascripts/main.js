import navbar from './components/navbar';
import Printmessages from './components/printMessages';
import clearMessages from './components/clearButton';
import font from './components/fontSize';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavbar();
  Printmessages.addmessages();
  $('#clear-btn').click(clearMessages);
  font.fontSizeToggle();
};

init();
