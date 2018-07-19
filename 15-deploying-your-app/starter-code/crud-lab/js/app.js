// FIREBASE Reference

//
// Set up your DB:
//
// You need to put the name of your endpoint (ie. what kind of data are you storing?)
// as an argument to the ref function.
// For example, if we were storing cats, we would write:
// const service = firebase.database().ref("cats");

//
// Create:
//
// const cat = {
//   name: "Milano",
//   age: 7,
//   favoriteFoods: ["tuna", "squid", "chicken"]
// };
// service.push(cat);

//
// Read:
//
// let cats = {};
// service.on("value", function(snapshot) {
//   cats = snapshot.val();
//   // Do DOM manipulation with cats variable here.
//   // NOTE: cats is an object with a key (generated by Firebase)
//   // for each cat you added, set to the value of each cat
//   // that you added

//   // Based on our example, the cats variable would look something like:
//   // {
//   //   "-LHaKIAIZ8-W0feX_Dz5": {
//   //     name: "Milano",
//   //     age: 7,
//   //     favoriteFoods: ["tuna", "squid", "chicken"]
//   //   }
//   // }
// });

//
// Update:
//
// You need to pull the key out from the DOM.
// const key = $(this)
//   .parent()
//   .data("key");
// service.child(key).update({
//   age: 8
// });

//
// Delete:
//
// You need to pull the key out from the DOM.
// const key = $(this)
//   .parent()
//   .data("key");
// service.child(key).remove();

//
//
// YOUR CODE HERE
//