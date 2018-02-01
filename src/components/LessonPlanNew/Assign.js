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

class Assign extends Component {
	render() {
		return (
            <div className="p-5">

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
                            <div className="list-number">5</div>
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

export default Assign;