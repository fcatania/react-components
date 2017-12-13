var App = () => (
  <div>	
	  <h3>My Groceries List</h3>
	  <GroceriesList itemList={['ravioles', 'merengue', 'mas merengue', 'quiero maaaas maurooooo']}/>
  </div>
);

class GroceriesList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <ul>
		  	{this.props.itemList.map(item => <GroceryListItem name={item}/>)}
		  </ul>
		);
	}
}



class GroceryListItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			done: false,
			bold: false
		};
	}

	onMouseEnter() {
		this.setState({
			bold: true
		});
	}

	onMouseLeave() {
		this.setState({
			bold: false
		});
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {
			textDecoration: this.state.done ? 'line-through' : 'none',
			fontWeight: this.state.bold ? 'bold' : 'normal'
		};
		return (<li style={style} 
								onClick={this.onListItemClick.bind(this)}
								onMouseEnter={this.onMouseEnter.bind(this)}
								onMouseLeave={this.onMouseLeave.bind(this)} >{this.props.name}</li>);
	}
};


ReactDOM.render(<App />, document.getElementById("app"));
