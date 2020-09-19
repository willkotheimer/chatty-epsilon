const changeTheme = () => {
  $('#colorFields').submit((event) => {
    event.preventDefault();
    const background = $('#enterBodyColor').val();
    const text = $('#enterFontColor').val();
    $('body').css({ backgroundColor: `${background}`, color: `${text}` });
  });
};

export default { changeTheme };
