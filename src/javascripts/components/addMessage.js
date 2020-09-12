import printMessages from './printMessages';

const addMessage = (messages) => {
  $('#messageInput').on('keypress', (e) => {
    if (e.which === 13) {
      messages.unshift({
        dragonflyId: 1,
        Message: $('#messageInput').val(),
        timestamp: 'placeholder',
      });
      $('#messageInput').val('');
      printMessages.printMessages(messages);
    }
  });
};

export default { addMessage };
