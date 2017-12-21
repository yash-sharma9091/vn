import React, {Component} from 'react';
import NoList from '../Common/NoList';
import ThreeDots from '../../assets/images/svg/menugray.svg';
import './AddClass.css';

class ClassListing extends Component {
	render() {
		return (
			<div className="left-group">
			    <div className="left-group-content">
					{/* <NoList text="Add Teacher" /> */}
					<div className="p-3 p-lg-3">
						<div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around classes-code-main">
							<div>
								<div className="code-box ml-3 mr-3 mb-3">
									<div class="d-flex justify-content-between">
										<div><h3>Marking Periods</h3></div>
										<div><button type="button" class="btn btn-link add-link pointer" href="/join">+Add </button></div>
									</div>
									<ul class="list-group mt-2">
										<li class="list-group-item relative">
											<h4>Marking Period 1</h4>
											<span>12 Oct, 2017 to 15 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>Marking Period 2</h4>
											<span>12 Oct, 2017 to 15 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>Marking Period 3</h4>
											<span>12 Oct, 2017 to 15 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>Marking Period 4</h4>
											<span>12 Oct, 2017 to 15 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>Marking Period 5</h4>
											<span>12 Oct, 2017 to 15 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
									</ul>
								</div>
							</div>
							
							<div>
								<div className="code-box ml-3 mr-3 mb-3">
									<div class="d-flex justify-content-between">
										<div><h3>Classes</h3></div>
										<div><button type="button" class="btn btn-link add-link pointer" href="/join">+Add </button></div>
									</div>
									<ul class="list-group mt-2">
										<li class="list-group-item relative">
											<h4>K</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>1</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>2</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>3</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>4</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
									</ul>
								</div>
							</div>

							<div>
								<div className="code-box ml-3 mr-3 mb-3">
									<div class="d-flex justify-content-between">
										<div><h3>Sections</h3></div>
										<div><button type="button" class="btn btn-link add-link pointer" href="/join">+Add </button></div>
									</div>
									<ul class="list-group mt-2">
										<li class="list-group-item relative">
											<h4>KA</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>101</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>102</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>103</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
									</ul>
								</div>
							</div>

							<div>
								<div className="code-box ml-3 mr-3 mb-3">
									<div class="d-flex justify-content-between">
										<div><h3>Subject Code</h3></div>
										<div><button type="button" class="btn btn-link add-link pointer" href="/join">+Add </button></div>
									</div>
									<ul class="list-group mt-2">
										<li class="list-group-item relative">
											<h4>KAeng</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>101mathematics</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>102music</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
										<li class="list-group-item relative">
											<h4>102art</h4>
											<span>Created on : 12 Oct, 2017</span>
											<a className="drop-open"><img src={ThreeDots} alt="" /></a>
										</li>
									</ul>
								</div>
							</div>

						</div>
					</div>
			    </div>
			</div>
		)
	}
}

export default ClassListing;