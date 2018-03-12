
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

		this.addList = this.addList.bind(this);
	}

	nextId() {
		return this.state.lists.length + 1
	}

	addList() {
		let newList = this.state.lists; 
		newList.push( { 'id': this.nextid, 'name':'' } ); 
		this.setState ( newList );

	}

	renderList(list){
		return(
			<List key={ list.id } id={ list.id } name={ list.name } ></List>
		)
	}

	render(){
		return (
			<div className="board">
				<div className="container-fluid">
					<div className="row">
						{ this.state.lists.map( this.renderList )}

						<button type="button" className="btn btn-light" onClick={ this.addList }>Add list</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Board;