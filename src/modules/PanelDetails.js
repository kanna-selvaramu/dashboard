import React, { useState } from 'react';
import Title from './components/Title';
import NumberCard from './components/NumberCard';
import Popup from './components/Popup';
import CreditsCard from './components/CreditsCard';

const PanelDetails = () => {
	const phoneNumInitial = [
		{
			number: '',
		},
	];
	const [phoneNum, setPhoneNum] = useState(phoneNumInitial);
	const [popupOpen, togglePopup] = useState(false);
	const updatePopupState = (val) => {
		togglePopup(val);
		console.log('popupOpen', popupOpen);
	};
	const addPhoneNum = (val) => {
		setPhoneNum([
			...phoneNum,
			{
				number: val,
			},
		]);
		togglePopup(false);
	};
	const delPhoneNum = (val) => {
		setPhoneNum(phoneNum.filter((data) => data.number !== val));
	};
	return (
		<div className="cls_panelWrapper">
			<Title title="My Phone Numbers" />
			<NumberCard
				phoneNum={phoneNum}
				togglePopup={updatePopupState}
				delPhoneNum={delPhoneNum}
			/>
			<Title title="Phone Call Alerts" />
			<CreditsCard balance="$100.00" />
			{popupOpen === true && (
				<Popup togglePopup={updatePopupState} addPhoneNum={addPhoneNum} />
			)}
		</div>
	);
};

export default PanelDetails;
