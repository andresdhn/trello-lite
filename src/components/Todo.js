
import React 	from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props); 

		this.state ={
			'editing': true
		}
	}

	componentDidMount() {
		this.selectText()
	}

	componentDidUpdate() {
		this.selectText()		
	}


	edit(){
		this.setState({ 'editing': true })
	}

	save(){
		this.props.onSave ( this.props.id, this.refs.todo.value )
		this.setState({ 'editing': false })
	}

	selectText() {
		if (this.state.editing) {
			this.refs.todo.focus()
			this.refs.todo.select()
		}
	}

	renderControl() {
		return(
			<input type="text" 
				className="form-control" 
				ref="todo" 
				onBlur = { this.save.bind(this) }
				defaultValue={ this.props.children }
			/>
		)
	}

	renderDisplay() {
		return(
			<a href="#" 
				className="list-group-item list-group-item-action"
				onClick={ this.edit.bind(this) }>
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