// user role: user includes user, guest
// user role: master includes master, user, guest
const userRole="guest";
let array=["guest","user","master","admin"];
return array = array.slice(0, array.indexOf(userRole)+1);
