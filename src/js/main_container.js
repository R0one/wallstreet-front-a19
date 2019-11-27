'use strict';
import { genRandomColor } from './utils/random_color.js';
import {ArticleList} from "./components/articleList.js";
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



render() {
	return <div id="main-div-child">
		
		<ArticleList articles={
		[
			{id: 1, name: "Coucou-Coulou", price: 0.65},
			{id: 2, name: "Girafe bleue", price: 5.83},
			{id: 3, name: "Gaufre à la vanille", price: 0.7}
		]
		}  />
		<ArticleList articles={
		[
			{id: 1, name: "Sirop au chocolat", price: 0.82},
			{id: 2, name: "Muffin fromage", price: 2.5},
			{id: 3, name: "Flûte à bec", price: 9.9},
			{id: 4, name: "Thé liégois", price: 0.2},
			{id: 5, name: "Café irlandais", price: 300},
			{id: 6, name: "Calva coréen", price: 0.01}

		]
		}  />

		</div>;
}

}



const mainDiv = document.querySelector('#main-div');
const element = <MainScreen />;
ReactDOM.render(element, mainDiv);


