import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import 'react-phone-number-input/style.css';

const Popup = (props) => {
	const [value, setValue] = useState();
	return (
		<div className="cls_popupWrapper">
			<div className="cls_popupCont">
				<div className="cls_popupTitle">Add Your Number</div>
				<div className="cls_closeIcon" onClick={() => props.togglePopup(false)}>
					<CloseIcon />
				</div>

				<div className="cls_subtitle">Enter Your Phone Number</div>
				<input
					className="cls_phoneInput"
					type="number"
					inputmode="numeric"
					value={value}
					maxLength={12}
					onChange={(e) => {
						setValue(e.target.value.slice(0, e.target.maxLength));
					}}
				/>
				<div className="cls_description">
					<span className="cls_infoIcon">
						<InfoOutlinedIcon />
					</span>
					<i>We'll call you to enter a verification code</i>
				</div>
				<div className="cls_buttonWrapper">
					<div className="backBtn" onClick={() => props.togglePopup(false)}>
						Back
					</div>
					<div className="cls_addBtn" onClick={() => props.addPhoneNum(value)}>
						Call Me
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
