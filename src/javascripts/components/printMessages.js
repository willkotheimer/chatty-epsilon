import DragonFlies from '../helpers/data/messageData';

const printMessages = (array) => {
  $('#messages').remove();
  let messages = '<div id="messages" class="float-right">';
  array.forEach((fly, index) => {
    messages += `
    <div class='card ${(index % 2 === 1) ? 'float-right' : 'float-left'}'>
    <div id='outerMessage-${index}'>
      <div id='name' class='alert alert-secondary' role='alert'>${DragonFlies.findDragon(fly.dragonflyId).Name}</div>
      <div id='messageBlock'>
        <div id='message' class='alert alert-secondary' role='alert'>${fly.Message}</div>
        <div id='message' class='alert alert-secondary' role='alert'>${fly.timestamp}</div>
      </div>
      <button type="button" id='delete-${fly.dragonflyId}' class="btn btn-danger">Delete</button>
      </div>
    </div>
    `;
  });
  messages += '</div>';
  $('#app').append(messages);
};

export default { printMessages };
