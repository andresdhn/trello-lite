
import React 	from 'react';

class List extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos: [
				{'id': 1, 'name': 'Primer todo'}
			]
		}
	}

	renderTodo(todo){
		return (
			<div key={ todo.id } id={ todo.id }>
				{ todo.name }
			</div>
		)
	}

	render(){
		return (
			<div className="col-md-4">
				<div className="card">
					<div class="card-header">
						{this.props.name}
					</div>
					<div className="card-body">
						{ this.state.todos.map( this.renderTodo )}
					</div>	
				</div>
			</div>
		)
	}
}

export default List;
