import Dragons from '../helpers/data/messageData';

const dropDown = () => {
  let myDropdown = '';
  const myDragons = Dragons.getDragonFlies();
  myDragons.forEach((fly) => {
    myDropdown += `
    <option name='${fly.dragonflyId}'>${fly.Name}</option>
    `;
  });
  return myDropdown;
};

const buildNavbar = () => {
  $('#app').append(`
      <nav class="navbar fixed-top navbar-custom">
      
        <a class="navbar-brand" href="#">
          <img src="../documentation/logo.jpg" class="border border-dark rounded" width="50" height="50" alt="Logo">
        </a>

        <button
        type="button"
        class="change-color btn btn-primary"
        data-toggle="modal"
        data-target="#colorChangingModal"
      >
        Change Theme
      </button>
    
        <div>
          <div class="form-group" id="navbar-fields">
              <div class="form-group d-flex justify-content-around flex-row">
              <label for="inputMessenger">Messenger </label>
              <select id="inputMessager" class="form-control">
                ${dropDown()}
              </select>
              
              <label for="messageInput">Message</label>
            <input type="text" class="form-control" id="messageInput" placeholder="message" required>
            </div>
          </div>
        </div>
      
          <div class="d-flex flex-row">
            <div class="form-check mr-5">
              <input type="checkbox" class="form-check-input" id="dark-mode">
              <label class="form-check-label" for="dark-mode">Dark Mode</label>
            </div>
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="enlarge-text">
              <label class="form-check-label" for="enlarge-text">Large Text</label>
            </div>
          </div>
        </div>
        <button type="button" id="clear-btn">Clear Messages</button>
      </nav>
    `);
};

export default { buildNavbar };
