/*
var Milk = () => (
	<li>Milk</li>
);

var Cookies = () => (
	<li>Cookies</li>
);

var GroceryListItem = (props) => (
	<ul>
		{props.items[0]}
		{props.items[1]}
	</ul>
);

var GroceryList = () => (
	<GroceryListItem items={[<Milk />, <Cookies />]} />
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
*/


//Class style
class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {onHover: false};
	}
	
	onMouseOver() {
		this.setState({onHover:!this.state.onHover});
	}

	render () {
		var style = {'font-weight': this.state.onHover ? 'bold' : 'normal'};
		return (
			
			<li style={style} onMouseOver={this.onMouseOver.bind(this)}>{this.props.item}</li>
		);
	}
}

var GroceryList = (props) => (
	<ul>
		{props.items.map(item => <GroceryListItem item={item} />)}
	</ul>
);


ReactDOM.render(<GroceryList items={['Milk', 'Cookies']}/>, document.getElementById("app"));


