// Keybindings for links and resume sections
Mousetrap.bind(['g', 'G'], function () {
  location.href = 'https://github.com/fishdev';
});
Mousetrap.bind(['l', 'L'], function () {
  location.href = 'https://www.linkedin.com/in/ashwin-srinivasan-65188517a/';
});
Mousetrap.bind(['m', 'M'], function () {
  location.href = 'mailto:ashwins@andrew.cmu.edu';
});
Mousetrap.bind(['r', 'R'], function () {
  location.href = "resume.pdf";
});
Mousetrap.bind(['e', 'E'], function () {
  jump('education');
});
Mousetrap.bind(['s', 'S'], function () {
  jump('skills');
});
Mousetrap.bind(['p', 'P'], function () {
  jump('projects');
});
Mousetrap.bind(['x', 'X'], function () {
  jump('experience');
});
Mousetrap.bind(['a', 'A'], function () {
  jump('activities');
});
Mousetrap.bind(['/', '?'], function () {
  shortcuts();
});

// Jump to anchor
function jump(h) {
  var url = location.href;
  location.href = '#' + h;
  history.replaceState(null, null, url);
}

// Toggle shortcuts modal
function shortcuts() {
  document.getElementById('shortcuts').classList.toggle('is-active');
}
