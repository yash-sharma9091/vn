import React, {Component} from 'react';
import NoList from '../Common/NoList';

class ClassListing extends Component {
	render() {
		return (
			<div className="left-group">
			    <div className="left-group-content">
			        <NoList text="Add Teacher" />
			    </div>
			</div>
		)
	}
}

export default ClassListing;