console.log("extension is running!")


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(request.message);
      var color = request.message;
      $("body").css("background-color", color,)
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(request.message2);
      var color2 = request.message2;
      $("body").css("background-color", color2,)

  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(request.message3);
      var color3 = request.message3;
      $("body").css("background-color", color3,)
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(request.message4);
      var color4 = request.message4;
      $("body").css("background-color", color4,)
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(request.message5);
      var color5 = request.message5;
      $("body").css("background-color", color5,)
  }
);






