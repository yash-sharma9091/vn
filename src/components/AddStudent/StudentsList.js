import React, {Component} from 'react';
import './AddStudent.css';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import StudentListElements from './StudentListElements';
import {Loader} from '../Common/Loader';
import NoList from '../Common/NoList';

class LeftPart extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            studentList: [],
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
        Http.get(`getstudent?_id=${user._id}&page=1`)
        .then(({data, paging}) => this.setState({studentList: data, paging, isLoadingList: false}))
        .catch(({errors}) => this.setState({errorList: errors.message, isLoadingList: false}));    
    }
    toggle(e) {
        let index = e.target.dataset.index;
        this.setState({ dropdownToggle: this.state.dropdownToggle === Number(index) ? 0 : Number(index) });
    }
    componentWillReceiveProps(newProps) {
        
        if( newProps.refresh ) {
            this.list();
        }
    }
	render() {
        const { studentList, dropdownToggle, isLoadingList } = this.state;
        const {refreshList, open, toggle} = this.props;
        /*console.log(studentList);
        console.log(paging);*/
		return (
            <div className="left-group">
                <div className="left-group-content">
                    
                        {isLoadingList 
                            ? <Loader/>
                            :(studentList.length > 0 
                                ? (<div className="p-3 p-lg-3">
                                    <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around teachers-row">
                                        {studentList.map((value, index) => {
                                            return (
                                                <StudentListElements 
                                                    refreshList={refreshList} 
                                                    student={value} 
                                                    key={index} 
                                                    dataIndex={index + 1} 
                                                    dropdownToggle={dropdownToggle === (index + 1)} 
                                                    toggle={this.toggle}/>
                                                )
                                        })}
                                    </div>
                                </div>) 
                                : (<NoList open={open} toggle={toggle} text="Add Student" />)   
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
export default connect(mapStateToProps)(LeftPart);