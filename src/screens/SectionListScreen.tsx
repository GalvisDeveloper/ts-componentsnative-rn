import React from 'react';
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { SectionList } from 'react-native';
import ItemSeparator from '../components/ItemSeparator';

interface Houses {
	house: string;
	data: string[];
}

const houses: Houses[] = [
	{
		house: 'DC Comics',
		data: [
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
		],
	},
	{
		house: 'Marvel Comics',
		data: [
			'Antman',
			'Thor',
			'Spiderman',
			'Antman',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
		],
	},
	{
		house: 'Anime',
		data: [
			'Kenshin',
			'Goku',
			'Saitama',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
			'Batman',
			'Superman',
			'Robin',
		],
	},
];

const SectionListScreen = () => {
	return (
		<View style={{ ...styles.globalMargin, flex: 1 }}>
			<SectionList
				sections={houses}
				ListHeaderComponent={() => <HeaderTitle title='Section List' color={colors.primary} />}
				ListFooterComponent={() => (
					<View style={{ marginBottom: 70 }}>
						<HeaderTitle title={'House`s number: ' + houses.length} color={colors.primary} />
					</View>
				)}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
				renderSectionHeader={({ section }) => (
					<View style={{ backgroundColor: colors.white }}>
						<HeaderTitle title={section.house} size={20} color={colors.tertiary} />
					</View>
				)}
				renderSectionFooter={({ section }) => (
					<HeaderTitle title={'Total: ' + section.data.length} size={18} color={colors.secondary} />
				)}
				stickySectionHeadersEnabled
				SectionSeparatorComponent={() => <ItemSeparator />}
				// ItemSeparatorComponent={() => <ItemSeparator />}
			/>
		</View>
	);
};

export default SectionListScreen;
