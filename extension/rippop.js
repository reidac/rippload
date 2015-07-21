

function p_start() {
  chrome.runtime.sendMessage( { restart : true } );
};

function p_resume() {
  chrome.runtime.sendMessage( { restart : false } );
};

document.addEventListener('DOMContentLoaded', function() {
  var startb = document.getElementById('start_b');
  startb.addEventListener('click', p_start);
  var resumeb = document.getElementById('resume_b');
  resumeb.addEventListener('click', p_resume); } );

