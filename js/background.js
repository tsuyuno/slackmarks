$(function() {
    chrome.tabs.onUpdated.addListener(function(tabId){
        chrome.pageAction.show(tabId);
    });

    chrome.pageAction.onClicked.addListener(function(tab){
        var requestURL = localStorage.getItem('request_url');
        var channel    = localStorage.getItem('channel');
        var botname    = localStorage.getItem('botname');

        chrome.pageAction.setIcon({tabId: tab.id, path: 'done.png'});

        $.ajax({
            url: requestURL,
            type: 'post',
            data: 'payload=' + JSON.stringify({
                "text": '<' + tab.url + '>',
                "unfurl_links": true,
                "channel": channel,
                "username": botname,
                "icon_emoji": ":stars:"
            })
        });
    });
});
