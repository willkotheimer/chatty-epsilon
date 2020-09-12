const buildNavbar = () => {
  $('#app').append(`
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">
          <img src="../documentation/logo.jpg" class="border border-dark rounded" width="50" height="50" alt="Logo">
        </a>
        <div class="w-50">
          <div class="form-group"
            <label for="messageInput">Message</label>
            <input type="text" class="form-control" id="messageInput" placeholder="message" required>
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
