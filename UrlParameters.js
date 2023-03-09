// Construct URLSearchParams object instance from current URL querystring.
var queryParams = new URLSearchParams(window.location.search);
 
// Set new or modify existing parameter value. 
//queryParams.set("myParam", "myValue");
queryParams.set("rows", "10");
 
// Replace current querystring with the new one.
history.replaceState(null, null, "?"+queryParams.toString());
