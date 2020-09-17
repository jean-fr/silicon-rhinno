import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EventsService } from 'src/app/services/events/events.service';
import * as _ from 'underscore';
import { EventListItem } from '../../models/EventListItem';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: [ './events.component.scss' ]
})
export class EventsComponent implements OnInit {
	constructor(private _eventsService: EventsService) {}
	pageSize: number = 10;
	pageNumber: 1;
	filterValue: string = '';
	dataSource: EventListItem[] = [];
	ngOnInit(): void {
		this.OnFilter();

		const clicks = fromEvent(document, 'keyup');
		const result = clicks.pipe(debounceTime(500));
		result.subscribe((x) => {
			this.filterValue = (x.target as HTMLInputElement).value;
			this.filterValue = this.filterValue.trim().toLowerCase();
			this.OnFilter();
		});
	}

	private OnFilter() {
		this._eventsService.Find(this.pageSize, this.pageNumber, this.filterValue).subscribe((data) => {
			this.dataSource = _.map(data, (e) => {
				return new EventListItem(e);
			});
		});
	}
}
