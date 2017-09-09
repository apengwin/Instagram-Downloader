/*
 * Content Script.
 */
var render = function() {
  $(function(){
    var tag = $("img, video").filter(":onScreen._2di5p, :onScreen._l6uaz");
    if (tag.length % 3 == 0 || tag == 2) {
      return;
    }
    if (tag.length == 1) {
      link = tag.attr("src");
    } else {
      seen = [];
      tag.each(function (){
        link = $(this).attr("src");
        if (seen.includes(link)) {
          return false;
        }
        seen.push(link);
      });
    }
    window.open(link, "_blank");
  });
};

chrome.runtime.onMessage.addListener(
  function(message, sender, callback) {
    if (message.note === "go") {
      render();
    } else {
      console.log("Unexpected message");
    }
});

