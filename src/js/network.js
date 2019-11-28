const request = new Request('http://wallstreet.crichard.fr/api/beers');
const refreshDelay = 30; //seconds
function networkRoutine(callback) {
	fetch(request)
	.then((response) => {
		//parse the JSON and pass the JS object to the caller
		response.json().then((data) => {callback(data);})
		//wait and do it again
		setTimeout(function(){
			networkRoutine(callback);
		}, refreshDelay*1000);
	});
}

export {networkRoutine};
