
function fileExists(url) {  

  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  //console.log(url);
  //console.log(http.status);
  return (http.status != 404);
}
