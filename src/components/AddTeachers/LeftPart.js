import React, {Component} from 'react';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './AddTeachers.css';

class LeftPart extends Component {
      constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
	render() {
		return (
            <div>
               <div class="row row-eq-height">
                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mb-3">
                            <div className="light-white-bg teacher-box p-3 relative">
                                <div className="box-settings pointer">
                                    <img src={ThreeDots} alt="" />
                                </div>
                                <div className="teacher-group-box relative">
                                    <div className="teacher-picture">
                                        <img src={TeacherPic} alt="" />
                                    </div>
                                    <div className="te-head">Michael Dueri...</div>
                                    <div className="te-gen mb-1">Male</div>
                                    <div className="te-sub">Subject &amp; Class</div>
                                    <div className="te-code">E 401, M 201, S 501...</div>
                                </div>
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" class="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                    <button type="button" class="btn btn-link view-btn pointer">View Detail</button>
                                </div>
                            </div>
                        </div>
                        

               </div>
            </div>
		) 
	}
}

export default LeftPart;