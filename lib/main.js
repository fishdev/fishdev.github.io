// Keybindings for social links and resume sections
Mousetrap.bind('g', function () {
  location.href = "https://github.com/fishdev";
});
Mousetrap.bind('l', function () {
  location.href = "https://www.linkedin.com/in/ashwin-srinivasan-65188517a/";
});
Mousetrap.bind('m', function () {
  location.href = "mailto:ashwins@andrew.cmu.edu";
});
Mousetrap.bind('e', function () {
  jump('education');
});
Mousetrap.bind('s', function () {
  jump('skills');
});
Mousetrap.bind('p', function () {
  jump('projects');
});
Mousetrap.bind('x', function () {
  jump('experience');
});
Mousetrap.bind('a', function () {
  jump('activities');
});

// Jump to anchor
function jump(h) {
  var url = location.href;
  location.href = '#' + h;
  history.replaceState(null, null, url);
}