
import React from 'react'; 
import List from './List';

class Board extends React.Component {
	constructor (props) {
		super(props);

		this.state = { 
			lists: [
				{'id': 1, 'name': 'Lista 1'}
			] 
		}
	}

	renderList(list) {
		return (
			<List key={list.id} id={list.id}>
				{ list.props } 
			</List>
		)
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					{ this.state.lists.map( this.renderList )}
				</div>
			</div>
		)
	}
}

export default Board; 