function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    console.log(prop);
    delete obj[prop];
    return true;
  } else {
    return false;
  }
}

var myObject = {
  ircEvent: "PRIVMSG",
  method: "newURI",
  regex: "^http://.*",
};
removeProperty(myObject, "method");

console.log(myObject);
