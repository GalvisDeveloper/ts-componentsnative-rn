import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
	{
		name: 'Animation 101',
		icon: 'cube-outline',
		component: 'Animation01Screen',
	},
	{
		name: 'Animation 102',
		icon: 'bar-chart-outline',
		component: 'Animation02Screen',
	},
	{
		name: 'Switchers',
		icon: 'cloud-circle-outline',
		component: 'SwitchScreen',
	},
	{
		name: 'Alerts',
		icon: 'alert-circle-outline',
		component: 'AlertScreen',
	},
	{
		name: 'Inputs',
		icon: 'text-outline',
		component: 'TextInputScreen',
	},
	{
		name: 'PullToRefresh',
		icon: 'refresh-outline',
		component: 'PullToRefresh',
	},
	{
		name: 'Section List',
		icon: 'list-outline',
		component: 'SectionListScreen',
	},
	{
		name: 'Modal',
		icon: 'copy-outline',
		component: 'ModalScreen',
	},
	{
		name: 'InfiniteScroll',
		icon: 'download-outline',
		component: 'InfiniteScrollScreen',
	},
	{
		name: 'SlidesScreen',
		icon: 'arrow-forward-outline',
		component: 'SlidesScreen',
	},
	{
		name: 'ChangeThemeScreen',
		icon: 'color-palette-outline',
		component: 'ChangeThemeScreen',
	},
];
