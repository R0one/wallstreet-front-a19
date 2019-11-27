'use strict';
import { genRandomColor } from './utils/random_color.js';
import {Prix} from './components/prix.js';

const styleBleu = {
	color: 'white',
	backgroundColor: 'blue',
};

class MainScreen extends React.Component {
constructor(props) {
	super(props);
	this.state = { 
					blue: false,
					prix: 2
				 };
}

clickMeButtonClicked() {
	console.log("test");
	this.setState((state, props) => {
		return (
			{
				blue : 1-state.blue,
				prix : -1
			}
		);
	});	
}


render() {
	return <div>
		
		<Prix nom = {"bière"} prix ={this.state.prix}  />
		<button type="button" onClick={() => {
			this.clickMeButtonClicked();
		}}>Click Me!</button>
		</div>;
}

}



const mainDiv = document.querySelector('#main-div');
const element = <MainScreen />;
ReactDOM.render(element, mainDiv);


