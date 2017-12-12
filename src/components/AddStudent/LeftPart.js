import React, {Component} from 'react';
import './AddStudent.css';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import StudentListElements from './StudentListElements';
import {Loader} from '../Common/Loader';

class LeftPart extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            teacherList: [],
            paging:{},
            errorList: '',
            isLoadingList: false,
            dropdownToggle: false
        };
    }
    componentDidMount() {
        this.list();
    }
    list() {
        this.setState({isLoadingList: true});
        const {user} = this.props;
        Http.get(`getteacher?_id=${user._id}&page=1`)
        .then(({data, paging}) => this.setState({teacherList: data, paging, isLoadingList: false}))
        .catch(({errors}) => this.setState({errorList: errors.message, isLoadingList: false}));    
    }
    toggle() {
        this.setState({dropdownToggle: !this.state.dropdownToggle });
    }
    componentWillReceiveProps(newProps) {
        
        if( newProps.refresh ) {
            this.list();
        }
    }
	render() {
        const { teacherList, paging, dropdownToggle, isLoadingList } = this.state;
        /*console.log(teacherList);
        console.log(paging);*/
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        {isLoadingList 
                            ? <Loader/>
                            :(
                                <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around teachers-row">
                                    
                                        <StudentListElements dropdownToggle={dropdownToggle} toggle={this.toggle}/>
                                    
                                </div>
                            )
                        }    
                    </div>
                </div>
            </div>
		) 
	}
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(LeftPart);