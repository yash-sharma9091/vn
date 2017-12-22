/* global _ */
import React, {Component} from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import './LessonPlan.css';
import {fullName} from '../../lib/Helper';

class ViewLessonPlan extends Component {
	render() {
        const {teacher} = this.props;
        /*const style = {
            backgroundImage: 'url(' + (IMAGE_PATH + '/' + teacher.profile_image.path) + ')'
        }*/
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="teacher-profile-boxes">
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label className="white-space-nowrap">Class</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Select Class</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="white-space-nowrap">Section</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Select Section</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>E</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-sm-12">
                                            <label className="white-space-nowrap">Select Subject</label><br />
                                            <ul className="code-list">
                                                <li>E701</li>
                                                <li>M702</li>
                                                <li>SS703</li>
                                                <li>S704</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6 form-row ml-0 mr-0">
                                            <div className="form-group col-sm-6">
                                                <label className="white-space-nowrap">Theme</label>
                                                <input type="text" className="form-control" placeholder="Enter theme" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label className="white-space-nowrap">Date</label>
                                                <input type="text" className="form-control" placeholder="MM/DD/YYYY" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 form-row ml-0 mr-0">
                                            <div className="form-group col-sm-6">
                                                <label className="white-space-nowrap">Theme</label>
                                                <input type="text" className="form-control" placeholder="Enter theme" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label className="white-space-nowrap">Date</label>
                                                <input type="text" className="form-control" placeholder="MM/DD/YYYY" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div class="form-group col-sm-6">
                                            <label className="white-space-nowrap">Essential Question</label>
                                            <textarea className="form-control" id="" rows="3" placeholder="Write your question here"></textarea>
                                        </div>
                                        <div class="form-group col-sm-6">
                                            <label className="white-space-nowrap">Text</label>
                                            <textarea className="form-control" rows="3" placeholder="Write your question here"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label className="white-space-nowrap">Standard</label>
                                            <select className="form-control">
                                                <option>Select Standard</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="white-space-nowrap">Grade Level</label>
                                            <select className="form-control">
                                                <option>Select grade</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>E</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="lesson-heading">Attributes</div>

                                    <div className="form-row">
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Do Now</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Group Practice</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Guided Practice</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Home Work</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Independent Practice</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Preview</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Warm Up</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Mini-Lesson</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <div className="attributes-box p-3">
                                                <div className="row align-items-center ml-0 mr-0">
                                                    <div class="form-check mb-0 ml-0 mr-0 pl-0 col-sm-9">
                                                        <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />  Exit Ticket</label>
                                                    </div>
                                                    <select class="form-control col-sm-3">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lesson-heading">Add Differentiation</div>

                                    <div className="form-row">
                                        <div className="col-sm-6 form-row ml-0 mr-0">
                                            <div className="form-group col-sm-6">
                                                <input type="text" className="form-control" placeholder="Enter differentiation" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <input type="text" className="form-control" placeholder="Enter differentiation" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 form-row ml-0 mr-0">
                                            <div className="form-group col-sm-6">
                                                <input type="text" className="form-control" placeholder="Enter differentiation" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <input type="text" className="form-control" placeholder="Enter differentiation" />  
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}

export default ViewLessonPlan;