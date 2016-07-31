

//param: 
// {
// 	apiKey : '', 
// 	userName: '', 
// 	interval: '', 
//  elId    : ''
// }
var YouSubscription = function(init){
	this.apiKey  = init.apiKey; 
	this.userName = init.userName; 
	this.interval = init.interval; 
	this.elId     = init.elId; 

	this.started  = false; 

	this.urlBase = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=$userName$&fields=items/statistics/subscriberCount&key=$apiKey$';
}

YouSubscription.prototype.start = function(){
	if(this.started) return; 

	var urlRequest = this.urlBase.replace('$apiKey$', this.apiKey); 
	urlRequest     = urlRequest.replace('$userName$', encodeURIComponent(this.userName));

	var self = this; 

	setInterval(function(){
		$.get(urlRequest).
		done(function(data){
			var count = new Number(data.items[0].statistics.subscriberCount); 
			$(self.elId).text(count.toLocaleString('pt'));  
		}); 
	}, this.interval); 

	this.started = true; 
}