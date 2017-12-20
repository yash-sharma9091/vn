import React from 'react';
import norecordImg from '../../assets/images/no-record.png';

const NoList = ({open, toggle, text}) => {
	return (
        <div className="no-records-available d-flex justify-content-center align-items-center">
            <div className="no-records-content text-center">
                <img src={norecordImg} alt="No Records" /><br />
                <span>No Record Avilable</span>
                <button type="button" onClick={open} className={`btn btn-primary ${toggle ? 'd-none':''}`}>{text}</button>
            </div>
        </div>
	)
}

export default NoList;