import React from 'react';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import StarRateIcon from '@material-ui/icons/StarRate';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const NumberCard = (props) => {
	// const { emptyCard = false } = props;
	return (
		<div className="cls_numCardWrapper">
			{props.phoneNum.map((phone) => {
				return (
					<div className="cls_numCardCont">
						{phone.number === '' ? (
							<div
								className="cls_emptyText"
								onClick={() => props.togglePopup(true)}
							>
								+ Add a New Number
							</div>
						) : (
							<div className="cls_numCard">
								<div className="cls_numCardHead">
									<span className="cls_phoneIcon">
										<PhoneOutlinedIcon />
									</span>
									<div className="cls_phoneNum"> {phone.number} </div>
									<span className="cls_starIcon">
										<StarRateIcon />
									</span>
								</div>
								<div className="cls_numCardBottom">
									<div className="cls_numCardDesc">Own Number</div>
									<span
										className="cls_delIcon"
										onClick={() => props.delPhoneNum(phone.number)}
									>
										<DeleteOutlineIcon />
									</span>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default NumberCard;
