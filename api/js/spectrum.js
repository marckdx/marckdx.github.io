
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

function getUserLanguage(){return navigator.language || navigator.userLanguage;}

function writeCookie(name, value){
    document.cookie = name + "=" + value +"; expires=Wed, 1 Jan 2070 13:47:11 UTC; path=/";
}

function readCookie(name) { 
    var nameEQ = name + "="; 
    var ca = document.cookie.split(';'); 
    for(var i=0;i < ca.length;i++) { 
        var c = ca[i]; 
        while (c.charAt(0)==' ') c = c.substring(1,c.length); 
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length); 
    } 
    return null; 
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}