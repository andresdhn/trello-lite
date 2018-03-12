
import React from 'react'; 

class List extends React.Component {
	constructor(props) {
		super(props)

		this.state = { 
			todos: [
				{'id': 1, 'name': 'something todo' }
			] 
		} 
	}

	renderTodo(todo) {
		return (
			<div key={ todo.id }
			id={ todo.id }
			className="todo">
				{ todo.name }
			</div>
		) 
	}

	render() {
		return (
			<div className="col-md-4">
				<div className="well">
					{ this.state.todos.map( this.renderTodo )}
				</div>
			</div>
		)
	}
}

export default List;