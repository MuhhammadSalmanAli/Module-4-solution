(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toUpperCase;
      if (firstLetter === 'J') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
  })();
  
//   (function(){
//     var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//     for (var i = 0; i < names.length; i++) {
//       var firstLetter = names[i].charAt(0).tolowercase();
//       if (firstLetter === 'j') {
//         byeSpeaker.speak(names[i]);
//       } 
//       else {
//         helloSpeaker.speak(names[i]);
//       }
//     }
    
//   })();