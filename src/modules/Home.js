import React, { useState } from 'react';
import './styles.css';
import LeftPanelIcons from './LeftPanelIcons';
import Header from './components/Header';
import Menu from './Menu';
import settingsJSON from './settingsJSON';

const Home = () => {
	const [mainTab, setMainTab] = useState('Settings');
	const [settings, setActiveTab] = useState(settingsJSON);
	const updateActiveTab = (title) => {
		const data = settings.map((setting) => {
			setting.title === title
				? (setting.selected = true)
				: (setting.selected = false);
			return setting;
		});
		setActiveTab(data);
	};
	let result = settings.filter((setting) => setting.selected === true);
	let PanelTemplate = result[0].component;
	let subHeader = result[0].title;
	return (
		<div className="cls_homeWrapper">
			<div className="cls_leftWrapper">
				<LeftPanelIcons />
			</div>
			<div className="cls_rightWrapper">
				<Header mainTab={mainTab} subHeader={subHeader} />
				<div className="cls_rightContentWrapper">
					<Menu settings={settings} setActiveTab={updateActiveTab} />
					<PanelTemplate />
				</div>
			</div>
		</div>
	);
};

export default Home;
