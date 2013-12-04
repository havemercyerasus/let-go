chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'loading') {
		var blacklist = localStorage["letgo_blacklist"].replace(/ /g, '').split(',');

		for (var i = 0; i < blacklist.length; i++) {
			if (tab.url.indexOf(blacklist[i]) !== -1) {
				chrome.tabs.executeScript(tabId, {code: 'var status = "loading"; var delay = ' + localStorage["letgo_wait"] + ';'}, function() {chrome.tabs.executeScript(tabId, {file: 'the_wall.js'})});
			}
		}		
	} else if (changeInfo.status == 'complete') {
		setTimeout(function(){
			var blacklist = localStorage["letgo_blacklist"].replace(/ /g, '').split(',');

			for (var i = 0; i < blacklist.length; i++) {
				if (tab.url.indexOf(blacklist[i]) !== -1) {
					chrome.tabs.executeScript(tabId, {code: 'var status = "complete"; var delay = ' + localStorage["letgo_wait"] + ';'}, function() {chrome.tabs.executeScript(tabId, {file: 'the_wall.js'})});
				}
			}
		}, 250);
	}
});