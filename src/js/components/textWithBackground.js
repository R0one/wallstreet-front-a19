const textWhite  = {
	color: 'white',
};



class TextWithBackground extends React.PureComponent {
	constructor(props) {
		super(props);

	}
	
	render() {
		let style = Object.assign({}, textWhite);
		style.backgroundColor = this.props.backgroundColor;
		return <div style={style}>{this.props.text}</div>;
	}
}

export { TextWithBackground };
