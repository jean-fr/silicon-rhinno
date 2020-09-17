import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/interfaces/interfaces';
import { Util } from 'src/app/models/Util';
import { EventsService } from 'src/app/services/events/events.service';
import * as L from 'leaflet';
import * as _ from 'underscore';
@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: [ './event.component.scss' ]
})
export class EventComponent implements OnInit {
	constructor(private _eventsService: EventsService, private route: ActivatedRoute) {}
	event: IEvent;
	imageUrl: string;
	eventDate: string;
	zoom = 12;
	private map: any;
	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			try {
				this._eventsService.Get(parseInt(params.get('id'))).subscribe((ev) => {
					this.event = ev;
					this.imageUrl = Util.GetEventImage(ev.type);
					this.eventDate = this.FormatDate(ev.time);
					if (ev.location) {
						_.delay(() => {
							this.InitMap(ev.location.latitude, ev.location.longitude);
						}, 500);
					}
				});
			} catch (error) {
				console.log(error);
			}
		});
	}

	FormatDate(date: string): string {
		if (Util.StringNullOrEmpty(date)) return '';
		return formatDate(date, 'short', 'en-GB');
	}

	private InitMap(lat: number, lon: number): void {
		this.map = L.map('map', {
			center: [ lat, lon ],
			zoom: 3
		});

		const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});

		tiles.addTo(this.map);

		const iconRetinaUrl = 'assets/images/marker-icon-2x.png';
		const iconUrl = 'assets/images/marker-icon.png';
		const shadowUrl = 'assets/images/marker-shadow.png';
		const iconDefault = L.icon({
			iconRetinaUrl,
			iconUrl,
			shadowUrl,
			iconSize: [ 25, 41 ],
			iconAnchor: [ 12, 41 ],
			popupAnchor: [ 1, -34 ],
			tooltipAnchor: [ 16, -28 ],
			shadowSize: [ 41, 41 ]
		});
		L.Marker.prototype.options.icon = iconDefault;
		const marker = L.marker([ lat, lon ]).addTo(this.map);
	}
}
