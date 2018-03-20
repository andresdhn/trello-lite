
import React 	from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props); 

		this.state ={
			'editing': false
		}
	}

	renderControl() {
		return(
			<input type="text" 
				className="form-control" 
				ref="todo" />
		)
	}

	renderDisplay() {
		return(
			<a href="#" 
				className="list-group-item list-group-item-action">
				{ this.props.children }
			</a>
		)
	}


	render(){
		return(
			(this.state.editing) ? this.renderControl() : this.renderDisplay()		
		) 
	}
}

export default Todo;