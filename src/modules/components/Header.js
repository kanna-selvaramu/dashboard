import React from 'react';

const Header = (props) => {
	return (
		<div className="cls_HeaderWrapper">
			<div className="cls_headerText">{props.mainTab}</div>
			<div className="cls_subHeaderText">/ {props.subHeader}</div>
		</div>
	);
};

export default Header;
