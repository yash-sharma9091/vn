import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Multiselect from 'react-widgets/lib/Multiselect';
let colors = ['orange', 'red', 'blue', 'purple'];
class LinkStudent extends React.Component {
  	constructor(props) {
    	super(props);
    	this.onSearch = this.onSearch.bind(this);
    	this.state = {
    		data: []
    	}
  	}
  	onSearch(val) {
  		console.log(val);
  	}
  	render() {
  		const {show, toggle} = this.props;
  		const {data} = this.state;
    	return (
	      	<div>
	        	<Modal isOpen={show} toggle={toggle} >
	          		<ModalHeader toggle={toggle}>Link children</ModalHeader>
	          		<ModalBody>
	            		<Multiselect
	            		    data={data}
							onSearch={this.onSearch}
	            		/>
	          		</ModalBody>
	          		<ModalFooter>
	            		<Button color="primary" onClick={toggle}>Do Something</Button>{' '}
	            		<Button color="secondary" onClick={toggle}>Cancel</Button>
	          		</ModalFooter>
	        	</Modal>
	      	</div>
    	);
  	}
}

export default LinkStudent;