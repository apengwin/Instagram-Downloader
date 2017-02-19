/*
 * Background stuff.
 */
var onClick = function (info) {
  chrome.tabs.query({
    active: true,
    currentWindow: true      
  }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      "note": "go"
    });
  });
}
console.log("ASDFDSFDSFDS");
chrome.contextMenus.create(
  {"contexts": ["page"],
   "onclick": onClick,
   "title": "Open Image."
  }
);

