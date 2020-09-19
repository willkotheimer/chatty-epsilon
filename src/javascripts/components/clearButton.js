import data from '../helpers/data/messageData';

const clearMessages = () => {
  $('#messages').empty();
  data.getDragonData().length = 0;
};

export default clearMessages;
