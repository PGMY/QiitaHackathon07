
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//   alert("バックグラウンドぺーじ");
//   chrome.pageAction.show(sender.tab.id);
//   sendResponse({tabid:sender.tab.id});
// });

// Called when the url of a tab changes.
function checkForValidUrl(tabIdParam, changeInfo, tab) {
   // For now everything will do.
   chrome.pageAction.show(tabIdParam);
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);


chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		parseItems = [];
		console.log(request);
		console.log(sender);
		console.log(sendResponse);
		url = request.req_url;
		surl = sender.url;

console.log(url);
console.log(surl);

		var res = "finish";
		sendResponse(res);
	}
);