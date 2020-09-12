import DragonFlies from './helpers/data/messageData';
import navbar from './components/navbar';
import Printmessages from './components/printMessages';
import addMessage from './components/addMessage';
import clearMessages from './components/clearButton';
import font from './components/fontSize';
import darkMode from './components/darkMode';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavbar();
  Printmessages.printMessages(DragonFlies.getDragonData());
  addMessage.addMessage(DragonFlies.getDragonData());
  $('#clear-btn').click(clearMessages);
  font.fontSizeToggle();
  darkMode.darkModeToggle();
};

init();
