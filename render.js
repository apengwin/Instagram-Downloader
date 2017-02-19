/*
 * Content Script.
 */
var render = function() {
  console.log("hi");
  $(function(){
    var tag = $("img").filter(":onScreen._icyx7");
    console.log(tag);
    link = tag.attr("src");
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

