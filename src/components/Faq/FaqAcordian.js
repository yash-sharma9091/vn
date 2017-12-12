import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import DownArrow from '../../assets/images/svg/down-arrow.svg';
import Question from '../../assets/images/svg/question.svg';
import './Faq.css';
import {Http} from '../../lib/Http';
import {Loader} from '../Common/Loader';

class FaqAcordian extends Component {
	constructor(props) {
      	super(props);
      	this.toggle = this.toggle.bind(this);
      	this.state = { 
      		collapse: 0, 
      		faqs: [],
      		isLoading: false,
      		errorMsg:''
      	};
    }
    componentDidMount() {
    	this.setState({isLoading: true});
    	Http.get('getfaq')
    	.then(({data}) => this.setState({faqs: data, isLoading: false}))
    	.catch(({errors}) => this.setState({isLoading: false, errorMsg: errors.message}));
    }
    toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }
  	render() {
  		const {faqs, collapse, isLoading, errorMsg} = this.state;
    	return (
     		<div className="light-sm-bg">
				<div className="d-flex flex-row justify-content-center">
					<div className="col-8 col-md-8 col-lg-5 col-xl-5">
						<h3 className="gradient-color text-center">Frequently Asked Questions</h3>
						<p className="text-center light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
						<div className="accordian-list">
							{isLoading 
								? <Loader/>
								:( faqs.length > 0 
								? faqs.map((val, index) => {
									return (
										<Card key={index + 1}>
											<CardHeader className={`acordian-header gradient-color ${collapse === (index + 1) ? 'active':''}`}
												onClick={this.toggle} data-event={index + 1}>
												{val.question}
												<img className="downArrow" src={DownArrow} alt="" />
											</CardHeader>
											<Collapse isOpen={collapse === (index + 1)}>
												<CardBody> {val.answer} </CardBody>
											</Collapse>
										</Card>
									)
								})
								: (<div className="text-center no-faqs">
									<img src={Question} alt="Question"/>
									<h5>No Questions available yet! {errorMsg ? ` due to ${errorMsg}`: ''}</h5>
									</div>))
							} 
						</div>
						<div className="d-flex flex-row justify-content-center p-2">
							<button type="button" className="btn btn-link forgot-link pointer">Don’t See A Question</button>
						</div>
					</div>
    			</div> 
			</div>
		);
	}
}

export default FaqAcordian;


