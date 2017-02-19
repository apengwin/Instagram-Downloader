/*
 * Content Script.
 */
var render = function() {
  console.log("hi");
  $(function(){
    var a = $("img").filter(":onScreen _icyx7");
    console.log("oh");
    console.log(a[0]);
    window.open(link, "_blank");
  });
}
console.log("JSDJF:KLDS");

chrome.runtime.onMessage.addListener(
  function(message, sender, callback) {
    if (message.note === "go") {
      render();
    } else {
      console.log("Unexpected message");
    }   
});

