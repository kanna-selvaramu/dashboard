import PanelDetails from './PanelDetails';
import Title from './components/Title';

const settingsJSON = [
	{
		id: 0,
		title: 'My Profile',
		selected: false,
		component: Title,
	},
	{
		id: 1,
		title: 'Connected Inbox',
		selected: false,
		component: Title,
	},
	{
		id: 2,
		title: 'Unsubscribe',
		selected: false,
		component: Title,
	},
	{
		id: 3,
		title: 'Signature',
		selected: false,
		component: Title,
	},
	{
		id: 4,
		title: 'CRM Integration',
		selected: false,
		component: Title,
	},
	{
		id: 5,
		title: 'Dialer',
		selected: true,
		component: PanelDetails,
	},
	{
		id: 6,
		title: 'Auto Bcc',
		selected: false,
		component: Title,
	},
	{
		id: 7,
		title: 'Billing',
		selected: false,
		component: Title,
	},
];

export default settingsJSON;
