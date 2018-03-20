
import React 	from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props); 
	}

	render(){
		return(
			// (this.state.editing) ? this.renderForm() : this.renderDisplay()

			<a href="#" 
				className="list-group-item list-group-item-action">
				{ this.props.children }
			</a>
		) 
	}
}

export default Todo;