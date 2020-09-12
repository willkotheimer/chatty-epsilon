import DragonFlies from '../helpers/data/messageData';

const deleteDragon = (id) => {
  console.warn(id);
  $(`.card-${id}`).remove();
};

const printMessages = (array) => {
  let messages = '<div id="messages" class="float-right">';
  array.forEach((fly, index) => {
    messages += `
    <div class='card-${fly.dragonflyId}'>
      <div id='outerMessage-${index}'>
      <div class='nameAndButton'>
        <div id='name' class='alert alert-secondary' role='alert'>${DragonFlies.findDragon(fly.dragonflyId).Name}</div> <button type="button" id='${fly.dragonflyId}' class="delete btn btn-danger">Delete</button>
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
