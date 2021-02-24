$('#Lavender').on('click', cchange);
function cchange () {
	var color = $(this).attr('id');
        chrome.tabs.query({active:    true,    currentWindow:    true},    function(tabs)    {
             chrome.tabs.sendMessage(tabs[0].id,    {message: color});
});
}


$('#LightGreen').on('click', cchange2);
function cchange2 () {
	var color2 = $(this).attr('id');
        chrome.tabs.query({active:    true,    currentWindow:    true},    function(tabs)    {
             chrome.tabs.sendMessage(tabs[0].id,    {message2: color2});
});
}

$('#LightBlue').on('click', cchange3);
function cchange3 () {
	var color3 = $(this).attr('id');
        chrome.tabs.query({active:    true,    currentWindow:    true},    function(tabs)    {
             chrome.tabs.sendMessage(tabs[0].id,    {message3: color3});
});
}

$('#LightPink').on('click', cchange4);
function cchange4 () {
	var color4 = $(this).attr('id');
        chrome.tabs.query({active:    true,    currentWindow:    true},    function(tabs)    {
             chrome.tabs.sendMessage(tabs[0].id,    {message3: color4});
});
}


$('#White').on('click', cchange5);
function cchange5 () {
	var color5 = $(this).attr('id');
        chrome.tabs.query({active:    true,    currentWindow:    true},    function(tabs)    {
             chrome.tabs.sendMessage(tabs[0].id,    {message4: color5});
});
}