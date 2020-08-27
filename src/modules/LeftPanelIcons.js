import React from 'react';
import LocalGroceryStoreOutlined from '@material-ui/icons/LocalGroceryStoreOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsBackupRestoreOutlinedIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';

const LeftPanelIcons = () => {
	return (
		<div className="cls_IconsWrapper">
			<div className="cls_IconContHead">
				<DashboardOutlinedIcon />
			</div>
			<div className="cls_IconTopCont">
				<div className="cls_IconCont">
					<SendOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<EventNoteOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<PermContactCalendarOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<TodayOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<PeopleAltOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<TrendingUpOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<MonetizationOnOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<div class="cls_activeIcon">
						<div class="cls_subactiveIcon">
							<SettingsApplicationsOutlinedIcon />
						</div>
					</div>
				</div>
			</div>
			<div className="cls_IconBottomCont">
				<div className="cls_IconCont">
					<PlayCircleFilledWhiteOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<HelpOutlineOutlinedIcon />
				</div>
				<div className="cls_IconCont">
					<SettingsBackupRestoreOutlinedIcon />
				</div>
			</div>
		</div>
	);
};

export default LeftPanelIcons;
