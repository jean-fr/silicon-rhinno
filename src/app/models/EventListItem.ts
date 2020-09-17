import { IEvent } from '../interfaces/interfaces';
import { formatDate } from '@angular/common';
import { Util } from './Util';
export class EventListItem {
	constructor(ev?: IEvent) {
		if (ev) {
			this.id = ev.id;
			this.title = ev.title;
			this.type = ev.type;
			this.date = formatDate(ev.time, 'short', 'en-GB');
		}
	}
	public id: number;
	public title: string;
	public type: string;
	public date: string;
	public get icon(): string {
		return Util.GetEventImage(this.type);
	}
}
