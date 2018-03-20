
import React 	from 'react';
import ListName	from './ListName';
import Todo 	from './Todo';


class List extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			'todos': [
			]
		}
	}

	renderAddTodoBtn() {
		return(
			<div className="card-footer">
				<button type="button" className="btn btn-outline-dark font-weight-bold" onClick={ this.addTodo }>...</button>
			</div>
		)
	}
	
	renderTodos(todo) {
		return (
			<Todo key={ todo.id } id={ todo.id }>{ todo.text }</Todo>
		)
	}

	render(){
		return (
			<div className="col">
				<div className="card">
					<div className="card-header">
						<ListName id={ this.props.id } name={ this.props.name } onSave={ this.props.onSave } />
					</div>

					<div className="list-group">
						{ this.state.todos.map( this.renderTodos, this ) }
					</div>
				
					{ (this.props.name !== '...') ? this.renderAddTodoBtn() : '' }
				</div>
			</div>
		)
	}
}

export default List;
