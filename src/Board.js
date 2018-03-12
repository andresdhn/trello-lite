
import React 	from 'react';
import List 	from './List';

class Board extends React.Component {
	constructor(props){
		super(props); 

		this.state = {
			lists: [
				{'id': 1, 'name': 'Lista 1'}
			]
		}
	}

	renderList(list){
		return(
			<List key={ list.id } id={ list.id } name={ list.name }></List>
		)
	}

	render(){
		return (
			<div className="board">
				<div className="container">
					<div className="row">
						{ this.state.lists.map( this.renderList )}
					</div>
				</div>
			</div>
		)
	}
}

export default Board;