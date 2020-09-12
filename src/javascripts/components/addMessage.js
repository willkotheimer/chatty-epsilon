import moment from 'moment';
import printMessages from './printMessages';

const addMessage = (messages) => {
  $('#messageInput').on('keypress', (e) => {
    if (e.which === 13) {
      messages.unshift({
        dragonflyId: 1,
        Message: $('#messageInput').val(),
        timestamp: moment().format('MMMM Do YYYY, h:mm a'),
      });
      $('#messageInput').val('');
      printMessages.printMessages(messages);
    }
  });
};

export default { addMessage };
