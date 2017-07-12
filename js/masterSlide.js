
function createHeadersAndFooters(headerLeft, headerRight, footerLeft) {
  append(headerLeft, headerRight, footerLeft);
  show();
}

function append(headerLeft, headerRight, footerLeft) {

  var outerDiv   = document.createElement('div');
  outerDiv.id    = 'hidden';
  outerDiv.style = 'display:none;';

  var innerDiv   = document.createElement('div');
  innerDiv.id    = 'header';

  var headerLeftDiv       = document.createElement('div');
  headerLeftDiv.id        = 'header-left';
  headerLeftDiv.innerHTML = headerLeft;
  
  var headerRightDiv       = document.createElement('div');
  headerRightDiv.id        = 'header-right';
  headerRightDiv.innerHTML = headerRight;
  
  var footerLeftDiv       = document.createElement('div');
  footerLeftDiv.id        = 'footer-left';
  footerLeftDiv.innerHTML = footerLeft;

  innerDiv.appendChild(headerLeftDiv);
  innerDiv.appendChild(headerRightDiv);
  innerDiv.appendChild(footerLeftDiv);

  outerDiv.appendChild(innerDiv);
  document.querySelector('.reveal').appendChild(outerDiv);
}

function show() {

  var header = $('#header').html();
  if ( window.location.search.match( /print-pdf/gi ) ) {
    Reveal.addEventListener( 'ready', function( event ) {
      $('.slide-background').append(header);
    });
  }
  else {
    $('div.reveal').append(header);
  }
}

function getStandardFooter(path) {
  var standardFooter = 
    "<a href='../../index.html'>"                                         +
      "<img width='32' height='32' src='" + path + "/img/home-icon.png'>" +
    "</a>";
  return standardFooter;
}

function getTeacherName() {
  return 'Prof. Raphael Gomide';
}
