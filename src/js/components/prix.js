class Prix extends React.Component {
constructor (props){
	super (props);
	this.state = {evolution : 0, prix: 0};
	//1 : augmentation, -1: diminution, 0: statique
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

shouldComponentUpdate(nextProps, nextState) {
return(this.state.evolution !== nextState.evolution || this.props.prix !== nextProps.prix);
}

}