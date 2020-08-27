import React from 'react';

const Title = (props) => {
	return (
		<div className="cls_title">{props.title ? props.title : 'Template'}</div>
	);
};

export default Title;
