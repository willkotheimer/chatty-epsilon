import navbar from './components/navbar';
import Printmessages from './components/printMessages';

import '../styles/main.scss';

const init = () => {
  navbar.buildNavbar();
  Printmessages.addmessages();
};

init();
