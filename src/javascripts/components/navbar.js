const buildNavbar = () => {
  $('#app').append(`
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">
          <img src="../documentation/logo.jpg" width="50" height="50" alt="Logo">
        </a>
        <form>
          <div class="form-group"
            <label for="messageInput">Message</label>
            <input type="text" class="form-control" id="messageInput" placeholder="message">
          </div>
        </form>
        <button type="button">Clear Messages</button>
      </nav>
    `);
};

export default { buildNavbar };
