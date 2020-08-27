import React from 'react';

const CreditsCard = (props) => {
	return (
		<div className="cls_creditsCardWrapper">
			<div className="cls_creditsCardCont">
				<div className="cls_creditsHeaderWrapper">
					<div className="cls_creditsTitle">Available Balance</div>
					<div className="cls_creditsScorer">{props.balance}</div>
				</div>
				<div className="cls_creditsBottomTitle">Buy More Credits</div>
			</div>
		</div>
	);
};

export default CreditsCard;
