// Add your scripts here
// Applies the class `.background` to `<body>` when the page loads
// eslint-disable-next-line no-undef
$(document).ready(() => {
  // eslint-disable-next-line no-undef
  $('body').addClass('background');
});

// Toggles the background modifier class
// eslint-disable-next-line no-undef
$('#background-toggle').click(() => {
  // eslint-disable-next-line no-undef
  $('body').toggleClass('background--light background--dark');
});
