
import React 	from 'react';

class List extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			'editing': false
		}

		this.edit = this.edit.bind(this)
		this.update = this.update.bind(this)
	}

	edit() {
		this.setState({ 'editing': true })
	}

	update() {
		this.props.onSave( this.refs.listname.value, this.props.id )
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
			<div className="col-3">
				<div className="card bg-light">
					<div className="card-body">
						<button type="button" 
							className="btn btn-light font-weight-bold"
							onClick={ this.edit } >
							{ this.props.name }
						</button>
					</div>
				</div>
			</div>
		)
	}

	renderForm() {
		return (
			<div className="col-3">
				<div className="card bg-light">
					<div className="card-body">
						<input type="text" 
							className="form-control" 
							ref="listname" 
							defaultValue="..." 
							onBlur={ this.update } />
					</div>
  				</div>
  			</div>
		)
	}

	render(){
		return (
			(this.state.editing) ? this.renderForm() : this.renderDisplay()
		)
	}
}

export default List;
