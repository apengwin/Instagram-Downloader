/* Content Script. */
var render = function() {
  console.log("hi");
  $(function() {
    var a = $("img").filter(":onScreen");
    console.log(a);
  });
}

chrome.runtime.onMessage.addListener(
  function(message, sender, callback) {
    if (message.note === "go") {
      render();
    } else {
      console.log("what");
    }   
});
