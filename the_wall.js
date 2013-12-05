if (status == 'loading' && !document.getElementById('letgothewall')) {
	var body = document.body,
	    html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
	                       html.clientHeight, html.scrollHeight, html.offsetHeight );

	var div = document.createElement('div');
	div.id = 'letgothewall';
	div.style.display = 'block';
	div.style.position = 'fixed';
	div.style.top = '0';
	div.style.left = '0';
	div.style.zIndex = '10000001';
	div.style.width = 100%;
	div.style.height = height + 'px';
	div.style.background = 'white';

	container = document.createElement('div');
	container.style.width = '500px';
	container.style.color = '#121C1C';
	container.style.marginRight = 'auto';
	container.style.marginLeft = 'auto';
	container.style.marginTop = '20px';
	container.style.textAlign = 'center';
	container.style.fontFamily = 'arial';

	countdown = document.createElement('h1');
	countdown.id = 'letgocountdown';
	countdown.style.fontWeight = "500";
	countdown.style.fontSize = '64px';
	countdown.innerHTML = parseInt(delay);
	countdown.style.marginBottom = '20px';

	blockquote = document.createElement('blockquote');

	quote = document.createElement('p');
	quote.style.marginTop = "10px";
	quote.style.marginBottom = "10px";	
	quote.style.fontWeight = "500";
	quote.style.fontSize = '24px';
	quote.innerHTML = 'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.';

	author = document.createElement('small');
	author.style.fontWeight = "500";
	author.style.fontSize = '12px';
	author.innerHTML = 'Stephen King';

	blockquote.appendChild(quote);
	blockquote.appendChild(author);

	container.appendChild(countdown);
	container.appendChild(blockquote);

	div.appendChild(container);

	document.body.insertBefore(div, document.body.firstChild);
} else if (status == 'complete' && !intervalId) {
	var letgocount = delay;
	var divToRemove = document.getElementById('letgothewall');
	var intervalId = setInterval(function() {
			letgocount--;
			if (letgocount < 0) {
				clearInterval(intervalId);
				document.body.removeChild(divToRemove);
			}
			document.getElementById('letgocountdown').innerHTML = parseInt(letgocount);
		}, 1000);
}