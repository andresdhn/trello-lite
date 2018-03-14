
import React 	from 'react';
import Todo 	from './Todo';

class List extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			'editing': false, 
			'todos': [
				{'id': 0, 'name': 'todo1'},
				{'id': 1, 'name': 'todo2'},
				{'id': 2, 'name': 'todo3'},
				{'id': 3, 'name': 'todo4'},
				{'id': 4, 'name': 'todo5'},
				{'id': 5, 'name': 'todo6'},
			]
		}

		this.edit = this.edit.bind(this)
		this.change = this.change.bind(this)		
	}

	edit() {
		this.setState({ 'editing': true })
	}

	change() {
		this.props.save( this.refs.listname.value, this.props.id )
		this.setState({ 'editing': false })
	}

	componentDidUpdate() {
		if (this.state.editing ) {
			this.refs.listname.focus()
			this.refs.listname.select()
		}
	}

	renderDisplay() {
		return(
			<div className="col">
				<div className="card bg-light">
					<div className="card-body">
						<button type="button" 
							className="btn btn-light font-weight-bold"
							onClick={ this.edit } >
							{ this.props.name }
						</button>
					</div>
					<div className="card-text">
						<div className="list-group">
							{ this.state.todos.map( this.renderTodos, this ) }
						</div>
					</div>
				</div>
			</div>
		)
	}

	renderForm() {
		return (
			<div className="col">
				<div className="card bg-light">
					<div className="card-body">
						<input type="text" 
							className="form-control" 
							ref="listname" 
							defaultValue="..." 
							onBlur={ this.change } />
					</div>
  				</div>
  			</div>
		)
	}

	renderTodos(todo) {
		return (
			<Todo key={ todo.id } id={ todo.id }> { todo.name }</Todo>
		)
	}

	render(){
		return (
			(this.state.editing) ? this.renderForm() : this.renderDisplay() 	
		)
	}
}

export default List;
