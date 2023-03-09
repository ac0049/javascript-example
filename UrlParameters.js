// First way to do that
var text = 'http://localhost/mysite/includes/phpThumb.php?src=http://media2.jupix.co.uk/v3/clients/4/properties/795/IMG_795_1_large.jpg&w=592&aoe=1&q=100';
var newSrc = 'www.google.com';
var newText = text.replace(/(src=).*?(&)/,'$1' + newSrc + '$2');



// Second
// Construct URLSearchParams object instance from current URL querystring.
var queryParams = new URLSearchParams(window.location.search);
 
// Set new or modify existing parameter value. 
//queryParams.set("myParam", "myValue");
queryParams.set("rows", "10");
 
// Replace current querystring with the new one.
history.replaceState(null, null, "?"+queryParams.toString());
