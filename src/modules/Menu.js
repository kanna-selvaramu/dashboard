import React from 'react';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const Menu = (props) => {
	console.log('propss', props.setActiveTab);
	return (
		<div className="cls_MenuWrapper">
			{props.settings.map((setting) => {
				return (
					<div
						className={
							setting.selected === true
								? 'cls_MenuList cls_activeMenu'
								: 'cls_MenuList'
						}
						id={`id_${setting.title}`}
						onClick={() => props.setActiveTab(setting.title)}
					>
						<div className="cls_text">{setting.title}</div>
						{setting.selected === true && (
							<span className="cls_ArrowIcon">
								<ArrowForwardOutlinedIcon />
							</span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Menu;
