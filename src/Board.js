
import React 	from 'react';
import List 	from './List';

class Board extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			'lists': [
				{'id': 0, 'name':'...'}
			]
		}

		this.addList = this.addList.bind(this)
	}

	nextId() {
		let newId = this.state.lists.length;
        return  newId++;
	}

	addList() {
		let newList = this.state.lists; 
		newList.push( { 'id': this.nextId(), 'name':'...', 'editing': true } ); 
		this.setState ( newList );

	}

	save(newName, id) {
		// let lists = this.state.lists.map( list => (list.id !== id) ? list : { 'id': id, 'name': newName }); 
		console.log(newName);
	}

	renderList(list){
		
		return(

			<List key={ list.id } id={ list.id } name={ list.name } save={ this.save.bind(this) }></List>
		)
	}

	render(){
		return (
			<div className="board">
				<div className="container-fluid">
					<div className="row">
						{ this.state.lists.map( this.renderList , this)}

						<button type="button" className="btn btn-light" onClick={ this.addList }>Add list</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Board;