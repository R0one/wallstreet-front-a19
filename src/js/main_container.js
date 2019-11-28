'use strict';
import {ArticleList} from "./components/ArticleList.js";
import {Alarm} from "./components/Alarm.js";
import {networkRoutine} from "./network.js";

/*const bieres = 	[
			{id: 2, name: "Anosteke Blonde", price: 1.65},
			{id: 3, name: "AtyPic", price: 1.40},
			{id: 4, name: "Barbar Blonde", price: 1.60},
			{id: 5, name: "Carolus Smoked", price: 	1.85},
			{id: 6, name: "Carolus Van de Keizer Blonde", price: 	1.95},
			{id: 7, name: "Castelain Pale Ale", price: 	1.65},
			{id: 8, name: "Cidre Friels", price: 	1.70},
			{id: 9, name: "Cuvée des Trolls", price: 	1.70},
			{id: 10, name: "Delirium Tremens", price: 	1.75},
			{id: 11, name: "JI.PA", price: 	1.75},
			{id: 12, name: "Kasteel Rouge", price: 	1.75},
			{id: 13, name: "Valdieu Triple", price: 	1.80}
		]
*/
const bieres = 	[{id: 2, name: "Anosteke Blonde", price: 1.65}];

const softsChelous = 	[
			{id: 1, name: "Sirop au chocolat", price: 0.82},
			{id: 2, name: "Muffin fromage", price: 2.5},
			{id: 3, name: "Flûte à bec", price: 9.9},
			{id: 4, name: "Thé liégois", price: 0.2},
			{id: 5, name: "Café irlandais", price: 300},
			{id: 6, name: "Calva coréen", price: 0.01}

		];



class MainScreen extends React.Component {
constructor(props) {
	super(props);
	this.state = { bouteilles: bieres, pressions: softsChelous, error: false, errorData: {message: "ok"}};
	networkRoutine(this.beaujolaisNouveau, this);
}
beaujolaisNouveau(error,data,component) {
	//what should I do when new data est arrivé?
	if(error) {
		console.log(data);
		var b;
		//trick for converting non-typeerror errors into typeerrors
		if(data instanceof TypeError) { b = data;} else { b = new TypeError("Unknown error : " + JSON.stringify(data)); }
		component.setState((state,props)=>{return({error:true,errorData:b});});
	return;}
	let bouteilles = data.filter( (biere) => biere.categorie_id == 10);
	let pressions = data.filter( (biere) => biere.categorie_id == 11);
	component.setState( (prevState, prevProps) => {return({bouteilles: bouteilles, pressions: pressions, error:false});});
}
getMagicalLineHeightByNumberOfArticles(i) {
	if(i == 0) {return 10;}
	//un peu de maths vaudoues (#mt12):
	//1080px - 200px pour le logo et sa marge : il reste 880px à se partager entre les i lignes. On enlève ensuite 20px pour la marge dans la ligne.
	//Et on met un seuil à 100px parce qu'après c'est juste trop gros.
	return Math.min(100,(880/i - 20));
}
//cette taille sera calculée en fonction de l'état et passée de composant en composant. C'est sale mais il n'y a pas de solution CSS. Et puis c'est bien une cascade.

render() {
	return <div id="main-div-child"> 
		<Alarm visible={this.state.error} text={this.state.errorData.message} />
		<ArticleList magicalSize={this.getMagicalLineHeightByNumberOfArticles(Math.max(this.state.bouteilles.length, this.state.pressions.length))} articles={this.state.bouteilles }  />
		<ArticleList magicalSize={this.getMagicalLineHeightByNumberOfArticles(Math.max(this.state.bouteilles.length, this.state.pressions.length))} articles={this.state.pressions }  />

		</div>;
}

}



const mainDiv = document.querySelector('#main-div');
const element = <MainScreen />;
ReactDOM.render(element, mainDiv);


