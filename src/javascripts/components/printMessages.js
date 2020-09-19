import findFunctions from '../helpers/data/findFunctions';
import messageLimit from './messageLimit';
import Dragons from '../helpers/data/messageData';

const deleteDragon = (id) => {
  const index = Dragons.getDragonData().findIndex((x) => x.timestamp === Number(id));
  Dragons.getDragonData().splice(Number(index), 1);
  $(`.card-${id}`).remove();
};

const sortByLatestDate = (dragons) => dragons.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
const printMessages = (array) => {
  const limit = messageLimit.twentyMessageLimit(array);
  const newArray = sortByLatestDate(limit);
  $('#messages').remove();
  let messages = '';
  messages = '<div id="messages" class="container">';
  newArray.forEach((fly, index) => {
    messages += `
    <div class='card-${fly.timestamp} d-flex justify-content-between ml-auto p-2'>
      <div id='outerMessage-${index}'>
      <div class='nameAndButton'>
        <div id='name' class='alert alert-secondary' role='alert'>${findFunctions.findDragon(fly.dragonflyId).Name}</div> 
        <button type="button" id='${fly.timestamp}' class="delete btn btn-danger">Delete</button>
      </div>
          <div id='messageBlock'>
            <div id='message' class='alert alert-secondary' role='alert'>${fly.Message}</div>
            <div id='message' class='alert alert-secondary' role='alert'>${fly.prettytimestamp}</div>
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
