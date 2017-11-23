import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import DownArrow from '../../assets/images/svg/down-arrow.svg';
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
					 <div className="col-5">
						<h3 className="gradient-color text-center">Frequently Asked Questions</h3>
						<p className="text-center light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

         <div className="accordian-list">
				 {cards.map(index => {
              return (
                <Card key={index}>
                  <CardHeader className="acordian-header gradient-color" 
                      onClick={this.toggle} data-event={index}>
                      What lorem ipsum dolor sit amet, consectetur adipiscing.
                      <img className="down-arrow" src={DownArrow} alt="" />
                  </CardHeader>
                  <Collapse isOpen={collapse === index}>
                    <CardBody>
                        Proin non metus feugiat, volutpat purus nec, mollis ligula. Maecenas nec molestie tortor. Phasellus commodo rutrum sapien in tincidunt. Nam eu mi mi. Morbi convallis, tortor et blandit tempor, nulla erat ornare lectus, sit amet imperdiet odio nunc et augue.
                    </CardBody>
                  </Collapse>
                </Card>
              )
            })} 
        </div>
			</div>
                </div>
                     
				 </div>
		);
	  }
}

export default FaqAcordian;


