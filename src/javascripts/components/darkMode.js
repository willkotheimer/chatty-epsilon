const darkModeToggle = () => {
  $('#dark-mode').on('click', () => {
    if ($('#dark-mode').is(':checked')) {
      $('body').css('background-color', 'black');
      $('body').css('color', 'white');
    } else {
      $('body').css('background-color', 'antiquewhite');
      $('body').css('color', 'brown');
    }
  });
};

export default { darkModeToggle };
