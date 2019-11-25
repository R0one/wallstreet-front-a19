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
	const element = <h1>Hello, world</h1>;
	return <div style={styleBleu}>BLEU</div>;
}
else {
	let style = Object.assign({}, styleBleu);
	style.backgroundColor = genRandomColor();
	return <div style={style}>PAS BLEU</div>;
}

}

}

const mainDiv = document.querySelector('#main-div');
const element = <MainScreen />;
ReactDOM.render(element, mainDiv);


