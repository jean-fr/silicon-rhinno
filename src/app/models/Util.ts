import * as _ from 'underscore';

export class Util {
	public static GetEventImage(type: string): string {
		if (this.StringNullOrEmpty(type)) return '';
		type = type.toLowerCase();
		if (type.includes('beer')) return 'assets/images/beer-icon-background.png';
		if (type.includes('cocktail')) return 'assets/images/cocktail-icon-background.png';
		if (type.includes('coffee')) return 'assets/images/coffee-icon-background.png';
		if (type.includes('milkshake')) return 'assets/images/milkshake-icon-background.png';
	}

	public static StringNullOrEmpty(str: string) {
		return _.isNull(str) || _.isUndefined(str);
	}
}
