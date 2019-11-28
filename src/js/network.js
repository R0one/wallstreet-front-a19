const request = new Request('http://wallstreet.crichard.fr/api/beers');
const refreshDelay = 30; //seconds
function networkRoutine(callback, component) {
	fetch(request)
	.then((response) => {
		if(!response.ok) {callback(true,"Response not ok",component);}
		else {
			//parse the JSON and pass the JS object to the caller
			response.json().then((data) => {callback(false,data,component);})
		}
	})
	.catch( (e) => {callback(true,e,component);})
	.finally( () => {
		//wait and do it again
		setTimeout(function(){
			networkRoutine(callback,component);
		}, refreshDelay*1000);
	});
}

export {networkRoutine};
