(function () {
    var names = [
      "Rishabh",
      "John",
      "jen",
      "Jason",
      "Shubham",
      "Bahu",
      "Divyesh",
      "Prajwal",
      "Priyesh",
      "jim"
    ];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === "j") {
        byeSpeaker(names[i]);
        function byeSpeaker(names) {
          console.log("Good Bye " + names);
        }
      } else {
        helloSpeaker(names[i]);
        function helloSpeaker(names) {
          console.log("Hello " + names);
        }
      }
    }
  })();
  