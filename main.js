hljs.initHighlightingOnLoad();

var i    = 0; 
var text = document.getElementById('code').innerHTML; 
var temp; 

function scroll(){
	var element = document.body;
	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		element.scrollTop = element.scrollHeight;
	}
}

function type(){
	temp  = text.slice(0, ++i); 
	temp += '<span>|</span>'; 

	document.getElementById('code').innerHTML = temp; 
	hljs.highlightBlock(document.getElementById('code'));

	var timeout = parseInt((Math.random() * 50)+  1);
	scroll();
	setTimeout(type,timeout); 
}

type(); 