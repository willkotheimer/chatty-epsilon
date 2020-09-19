const fontSizeToggle = () => {
  $('#enlarge-text').on('click', () => {
    if ($('#enlarge-text').is(':checked')) {
      $('body').css('font-size', '1.5em');
    } else {
      $('body').css('font-size', '1em');
    }
  });
};

export default { fontSizeToggle };
