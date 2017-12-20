import React, {Component} from 'react';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import ParentListElements from './ParentListElements';
import {Loader} from '../Common/Loader';
import NoList from '../Common/NoList';
class ParentListing extends Component {
	constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            parentList: [],
            paging:{},
            errorList: '',
            isLoadingList: false,
            dropdownToggle: 0
        };
    }
    componentDidMount() {
        this.list();
    }
    list() {
        this.setState({isLoadingList: true});
        const {user} = this.props;
        Http.get(`get_parent?_id=${user._id}&page=1`)
        .then(({data, paging}) => this.setState({parentList: data, paging, isLoadingList: false}))
        .catch(({errors}) => this.setState({errorList: errors.message, isLoadingList: false}));    
    }
    toggle(e) {
        
        let index = e.target.dataset.index;
        this.setState({ dropdownToggle: this.state.dropdownToggle === Number(index) ? 0 : Number(index) });
    }
    componentWillReceiveProps(newProps) {
        if( newProps.refresh ) {
            console.log('List refresh');
            this.list();
        }
    }
	render() {
		const {toggle, open, refreshList} = this.props;
		const { parentList, dropdownToggle, isLoadingList } = this.state;
		return (
			<div className="left-group">
                <div className="left-group-content">
                    {isLoadingList 
                        ? <Loader/>
                        :(parentList.length > 0 
                            ? (
                                <div className="p-3 p-lg-3">
                                    <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around teachers-row">
                                        { parentList.map((value, index) => {
                                            return (<ParentListElements refreshList={refreshList} parent={value} key={index} dataIndex={index + 1} dropdownToggle={dropdownToggle === (index + 1)} toggle={this.toggle}/>)
                                        })}
                                    </div>
                                </div>    
                            ) 
                            : (<NoList open={open} toggle={toggle} text="Add Parent" />)
                        )
                    }
                </div>
            </div>
		)
	}
}



const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(ParentListing);