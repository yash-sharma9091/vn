import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import './Faq.css';
    
class FaqAcordian extends Component {
	constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: 0, cards: [1, 2, 3, 4, 5] };
    }

    toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }
  	render() {
  		const {cards, collapse} = this.state;
    	return (
     		<div className="light-sm-bg">
				  <div className="d-flex flex-row justify-content-center">
					 <div className="col-4">
						<h3 className="gradient-color text-center">Frequently Asked Questions</h3>
						<p className="text-center light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                     </div>
                     
				 </div>
				 {cards.map(index => {
                       return (
                         <Card style={{ marginBottom: '1rem' }} key={index}>
                           <CardHeader onClick={this.toggle} data-event={index}>Header</CardHeader>
                           <Collapse isOpen={collapse === index}>
                           <CardBody>
                           Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                           </CardBody>
                           </Collapse>
                         </Card>
                       )
                     })} 
			</div>
		);
	  }
}

export default FaqAcordian;


