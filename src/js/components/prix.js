//refer to variables managed by external css
const textGreen  = {
	color: 'var(--price-green)',
};
const textRed  = {
	color: 'var(--price-red)',
};
const textWhite  = {
	color: 'var(--price-white)',
};

class Prix extends React.Component {
constructor (props){
	super (props);
	this.state = {evolution : 0, prix: 0};
	//1 : augmentation, -1: diminution, 0: statique

}
getColorFromEvolution(evolution){
	if(evolution == 0)
		return (textWhite);
	if(evolution == -1)
		return (textRed);
	else
		return (textGreen);
}

render(){
	return(
		<div className="article"><span className="articleName">{this.props.nom} : </span><span className="articlePrice" style={this.getColorFromEvolution(this.state.evolution)}>{this.props.prix}</span></div>);
}



static getDerivedStateFromProps(nextProps, prevState){
	if (nextProps.prix > prevState.prix){
		return({evolution: 1, prix: nextProps.prix} );
	}
	else if (nextProps.prix < prevState.prix) {
		return( {evolution: -1, prix: nextProps.prix} );
	}
	else {
		return( {evolution: 0} );
	}
}

shouldComponentUpdate(nextProps, nextState) {
return(this.state.evolution !== nextState.evolution || this.props.prix !== nextProps.prix);
}

}

export {Prix};
