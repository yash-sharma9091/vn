/* global _ */
import React, {Component} from 'react';
import EditParentInformation from './EditParentInformation';
import ActivityPanel from '../Activity/ActivityPanel';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import {Link} from 'react-router-dom';
import {parentListing, parentDetail} from '../../lib/SiteLinks';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import {LinkContainer} from 'react-router-bootstrap';
import {Loader} from '../Common/Loader';

class EditParentDetail extends Component {
    constructor() {
        super();
        this.triggerSubmit = this.triggerSubmit.bind(this);
        this.state = {
            parent: {},
            errors:'',
            isLoading: false,
            submitting: false
        }
    }
    triggerSubmit() {
        this.setState({submitting: !this.state.submitting});
    }
    componentDidMount() {
        
        const {match} = this.props;
        const {id} = match.params;
        console.log(id);
        if( id ) {

            this.setState({isLoading: true});
            Http.get(`view_parent?_id=${id}`)
            .then(({data}) => this.setState({parent: data, isLoading: false}))
            .catch(({errors}) => {
                this.setState({errors: errors.message, isLoading: true});
                setTimeout(() => this.setState({errors: ''}), 5000);
            });
        }
    }
	render() {
        const {parent, errors, isLoading, submitting} = this.state;
        const {dispatch} = this.props;
        
		return (
            <div>

                {/*dashboard-part*/}
                <div className="dashboard-part">

                    <Alert alertVisible={errors} alertMsg={errors} className={errors ? "danger alert-box":"success"}/>
                    <div className="dashboard-search-part inner-sub-page">
                        {/*Search-Bar*/}
                        <div className="search-bar">

                            <div className="d-flex justify-content-between p-2 no-gutters">
                                <div className="col-5 col-md-5 col-lg-4 col-xl-4">

                                    <div className="d-flex justify-content-start">

                                        <div className="breadcrumb-list">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to={parentListing}>Parents</Link></li>
                                                <li className="breadcrumb-item text-capitalize"><Link to={`${decorateLink(parentDetail)}/${parent._id}`}>{parent.name ? limitTo(parent.name,50) : 'Loading ...'}</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Edit</li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-7 col-md-7 col-lg-8 col-xl-8">
                                    <div className="imports-button d-flex justify-content-end">
                                        <button 
                                            type="button" 
                                            disabled={submitting}
                                            onClick={() => dispatch(submit('EditParentInformationForm'))} 
                                            className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">{submitting ? 'Processing ...' : 'Update'}
                                        </button>
                                        <LinkContainer to={parentListing}>
                                            <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Cancel</button>
                                        </LinkContainer>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Dashboard-Main*/}

                    <div className="dashboard-main inner-sub-page">
                        <div className="dash-left-box">
                            { isLoading && <Loader /> }
                            {!isLoading && !_.isEmpty(parent) && <EditParentInformation _triggerSubmit={this.triggerSubmit} parent={parent} initialValues={parent}/>}
                        </div>
                        <div className="dash-right-box">
                            <ActivityPanel />
                        </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}

export default connect()(EditParentDetail);