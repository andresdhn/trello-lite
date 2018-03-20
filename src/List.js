
import React 	from 'react';
import Todo 	from './Todo';

class List extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			'editing': false,
			'named' : false,
			'todos': [
			]
		}

		this.edit = this.edit.bind(this)
		this.change = this.change.bind(this)		
	}

	edit() {
		this.setState({ 'editing': true })
	}

	change() {
		if (this.refs.listname.value !== this.props.name ){
			this.props.save( this.refs.listname.value, this.props.id )
			this.setState({ 'named': true })
		}
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
				<div className="card">
					<div className="card-header">
						<button type="button" 
							className="btn btn-light font-weight-bold"
							onClick={ this.edit } >
							{ this.props.name }
						</button>
					</div>
					
					<div className="list-group">
						{ this.state.todos.map( this.renderTodos, this ) }
					</div>
				
					{ (this.state.named) ? this.renderButton() : '' }
					
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
							defaultValue={ this.props.name || "..." }
							onBlur={ this.change } />
					</div>
  				</div>
  			</div>
		)
	}

	renderButton() {
		return(
			<div className="card-footer">
				<button type="button" className="btn btn-outline-dark font-weight-bold" onClick={ this.addTodo }>...</button>
			</div>
		)
	}
	renderTodos(todo) {
		return (
			<Todo key={ todo.id } id={ todo.id }> { todo.text }</Todo>
		)
	}

	render(){
		return (
			(this.state.editing) ? this.renderForm() : this.renderDisplay() 	
		)
	}
}

export default List;
