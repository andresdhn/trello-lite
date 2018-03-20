
import React 	from 'react';

class ListName extends React.Component {
	constructor(props) {
		super(props)

		this.state={
			'editing': false
		}	
	}

	componentDidUpdate() {
		if (this.state.editing ) {
			this.refs.listname.focus()
			this.refs.listname.select()
		}
	}

	edit() {
		this.setState({ 'editing': true })
	}

	save() {
		if (this.refs.listname.value !== this.props.name ){
			this.props.onSave( this.refs.listname.value, this.props.id )
		}

		this.setState({ 'editing': false })
	}

	renderDisplay() {
		return(
			<button type="button" 
				className="btn btn-light font-weight-bold"
				onClick={ this.edit.bind(this) } >
				{ this.props.name }
			</button>
		)
	}

	renderControl() {
		return (
			<input type="text" 
				className="form-control" 
				ref="listname" 
				defaultValue={ this.props.name || "..." }
				onBlur={ this.save.bind(this) } />
		)
	}

	render(){
		return(
			(this.state.editing) ? this.renderControl() : this.renderDisplay()
		)
	}
}

export default ListName;