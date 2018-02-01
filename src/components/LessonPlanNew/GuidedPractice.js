/* global _ */
import React, {Component} from 'react';
import './LessonPlanNew.css';
import donow1 from '../../assets/images/donow-1.png';
import donow2 from '../../assets/images/donow-2.png';
import donow3 from '../../assets/images/donow-3.png';
import donow4 from '../../assets/images/donow-4.png';
import donow5 from '../../assets/images/donow-5.png';
import donow6 from '../../assets/images/donow-6.png';
import donow7 from '../../assets/images/donow-7.png';
import donow8 from '../../assets/images/donow-8.png';
import donow9 from '../../assets/images/donow-9.png';
import donow10 from '../../assets/images/donow-10.png';
import donow11 from '../../assets/images/donow-11.png';
import donow12 from '../../assets/images/donow-12.png';
import menuLine from '../../assets/images/svg/menu-line.svg';
import addPlus from '../../assets/images/svg/add-plus-button.svg';
import picture from '../../assets/images/svg/picture.svg';
import cancel from '../../assets/images/svg/cancel-music.svg';

class GuidedPractice extends Component {
	render() {
		return (
            <div className="p-5">
                <div className="d-flex justify-content-center">
                    <div class="d-flex flex-row questions-box col-sm-7 pl-0 pr-0">
                        <div class="p-3 col-sm-4">
                            <div className="question-head">Add Content:</div>
                            <ul className="questions-list-up">
                                <li><a><img src={donow1} alt="" />Embed</a></li>
                            </ul>
                        </div>
                        <div class="p-3 col-sm-8">
                            <div className="question-head">Add Question:</div>
                            <ul className="questions-list">
                                <li><a><img src={donow5} alt="" />Multiple Choice</a></li>
                                <li><a><img src={donow9} alt="" />True and False</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center p-3">
                    <a className="cross-btn">X</a>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">1</div>
                            <div><input type="text" class="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" class="form-control" placeholder="-- : -- : --  --" /></div>
                            <a className="differentiation-link">Select Differentiation</a>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <textarea class="form-control" rows="3" placeholder="Paste an embed code here . (hint, it usually starts with <iFrame...)"></textarea>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">2</div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div><button type="button" className="btn btn-primary choose-file-btn"><img className="picture-icon" src={picture} alt="" /> Choose File</button></div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">3</div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder="Paste a YouTube video url, something like... https://www.youtube.com/watch?v=dQw49WgXcQ" />
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">4</div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder="Type your text" />
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">1</div>
                            <div>
                                <select class="form-control">
                                    <option>Multiple Choice</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                            </div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Write your question here..." />
                    <div className="select-window p-3">
                        <div class="form-check relative">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">A</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div class="form-check relative">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" />
                            <label class="form-check-label" for="exampleRadios2">B</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div class="form-check relative">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" />
                            <label class="form-check-label" for="exampleRadios3">C</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div> 
                        <div class="form-check relative">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option1" />
                            <label class="form-check-label" for="exampleRadios4">D</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div className="relative">
                            <input type="text" class="form-control" placeholder="" />
                            <div class="form-check in-input">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option1" />
                                <label class="form-check-label" for="exampleRadios5">Add another option here</label>
                            </div>
                            <a className="cancel-icon in-input"><img src={cancel} alt="" /></a>
                        </div>
                        <a className="add-another-link">+ Add Another Option</a>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">2</div>
                            <div>
                                <select class="form-control">
                                    <option>Multiple Selection</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                            </div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Write your question here..." />
                    <div className="select-window p-3">
                        <div class="form-check relative">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">A</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div class="form-check relative">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">B</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div class="form-check relative">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                            <label class="form-check-label" for="defaultCheck3">C</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div class="form-check relative">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                            <label class="form-check-label" for="defaultCheck4">D</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div className="relative">
                            <input type="text" class="form-control" placeholder="" />
                            <div class="form-check in-input">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                                <label class="form-check-label" for="defaultCheck5">Add another here</label>
                            </div>
                            <a className="cancel-icon in-input"><img src={cancel} alt="" /></a>
                        </div>
                        <a className="add-another-link">+ Add Another Option</a>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">3</div>
                            <div>
                                <select class="form-control">
                                    <option>Short Answer</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                            </div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Write your question here..." />
                    <div className="select-window p-3">
                        <div className="relative">
                            <input type="text" class="form-control" placeholder="Add another here" />
                            <a className="cancel-icon in-input"><img src={cancel} alt="" /></a>
                        </div>
                        <a className="add-another-link">+ Add Another Option</a>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">4</div>
                            <div>
                                <select class="form-control">
                                    <option>Blank Space</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                            </div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="edit-board">
                        <div><button type="button" className="btn btn-primary">Edit Board</button></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">5</div>
                            <div>
                                <select class="form-control">
                                    <option>True or False</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                            </div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Write your question here..." />
                    <div className="select-window p-3">
                        <div class="form-check relative">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label">True</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                        <div class="form-check relative">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label class="form-check-label">False</label>
                            <a className="cancel-icon"><img src={cancel} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                
                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">6</div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div><button type="button" className="btn btn-primary choose-file-btn"><img className="picture-icon" src={picture} alt="" /> Choose File</button></div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                
                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">7</div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div><button type="button" className="btn btn-primary choose-file-btn"><img className="picture-icon" src={picture} alt="" /> Choose File</button></div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

                
                {/*points-box*/}
                <div className="points-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="points-list">
                            <div className="menu-icon"><img src={menuLine} alt="" /></div>
                            <div className="list-number">8</div>
                            <div><input type="text" className="form-control" placeholder="Enter points" /></div>
                            <div><input type="text" className="form-control" placeholder="-- : -- : --  --" /></div>
                        </div>
                        <div>
                            <ul className="remove-list">
                                <li><a>Duplicate</a></li>
                                <li><a>Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div><button type="button" className="btn btn-primary choose-file-btn"><img className="picture-icon" src={picture} alt="" /> Choose File</button></div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div><a className="plus-icon"><img src={addPlus} alt="" /></a></div>
                </div>

        </div>
		) 
	}
}

export default GuidedPractice;