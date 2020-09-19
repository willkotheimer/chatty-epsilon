import * as emojis from 'emojis';
import moment from 'moment';
import printMessages from './printMessages';

const addMessage = (messages) => {
  $('#messageInput').on('keypress', (e) => {
    if (e.which === 13) {
      const index = messages.length + 1;
      console.warn(index);
      messages.push({
        messageId: index + 1,
        dragonflyId: parseInt($('#inputMessager option:selected').attr('name'), 10),
        Message: emojis.unicode($('#messageInput').val()),
        prettytimestamp: moment().format('MMMM Do YYYY, h:mm a'),
        timestamp: moment().toDate().getTime()
      });
      $('#messageInput').val('');
      printMessages.printMessages(messages);
    }
  });
};

export default { addMessage };
