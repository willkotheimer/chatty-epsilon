import DragonFlies from '../helpers/data/messageData';
import Helpers from '../helpers/data/dataHelpers';
import messageLimit from './messageLimit';

const deleteDragon = (id) => {
  Helpers.getDeleted().push(parseInt(id, 10));
  $(`.card-${id}`).remove();
};

const printMessages = (array) => {
  const limit = messageLimit.twentyMessageLimit(array);
  $('#messages').remove();
  let messages = '';
  messages = '<div id="messages" class="float-right">';
  limit.forEach((fly, index) => {
    if (Helpers.getDeleted().indexOf(index) !== -1) { return; }
    messages += `
    <div class='card-${fly.dragonflyId}'>
      <div id='outerMessage-${index}'>
      <div class='nameAndButton'>
        <div id='name' class='alert alert-secondary' role='alert'>${DragonFlies.findDragon(fly.dragonflyId).Name}</div> 
        <button type="button" id='${fly.dragonflyId}' class="delete btn btn-danger">Delete</button>
      </div>
          <div id='messageBlock'>
            <div id='message' class='alert alert-secondary' role='alert'>${fly.Message}</div>
            <div id='message' class='alert alert-secondary' role='alert'>${fly.timestamp}</div>
          </div>
         
      </div>
    </div>
    `;
  });
  messages += '</div>';
  $('#app').append(messages);
  $('.delete').on('click', (e) => deleteDragon(e.target.id));
};

export default { printMessages, deleteDragon };
