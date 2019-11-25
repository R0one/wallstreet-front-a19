'use strict';
import { genRandomColor } from './utils/random_color.js';
import {TextWithBackground} from './components/textWithBackground.js';
import {PrixArticle} from './components/texts.js';
const styleBleu = {
	color: 'white',
	backgroundColor: 'blue',
};

class MainScreen extends React.Component {
constructor(props) {
	super(props);
	this.state = { blue: false };
}

clickMeButtonClicked() {
	console.log("test");
	this.setState((state, props) => {
		return {blue : 1-state.blue};
	});	
}


render() {
	return <div>
		<TextWithBackground text={this.state.blue ? "bleu" : "pas bleu"} backgroundColor={this.state.blue ? "blue" : genRandomColor()} />
		<button type="button" onClick={() => {
			this.clickMeButtonClicked();
		}}>Click Me!</button>
		<PrixArticle prix={5} />
		</div>;
}

}



const mainDiv = document.querySelector('#main-div');
const element = <MainScreen />;
ReactDOM.render(element, mainDiv);


