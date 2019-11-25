'use strict';
import { genRandomColor } from './utils/random_color.js';
const styleBleu = {
	color: 'white',
	backgroundColor: 'blue',
};

class MainScreen extends React.Component {
constructor(props) {
	super(props);
	this.state = { blue: false };
}



render() {
if (this.state.blue) {
	return (<div style={styleBleu}>BLEU</div>);
}
else {
	let style = Object.assign({}, styleBleu);
	style.backgroundColor = random_color();
	return (<div style={style}>PAS BLEU</div>);
}

}

}

const mainDiv = document.querySelector('#main-div');
ReactDOM.render(MainScreen, mainDiv);
