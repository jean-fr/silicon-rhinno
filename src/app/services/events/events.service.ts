import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/interfaces/interfaces';
import { EventsEndpointService } from './events-endpoint.service';

@Injectable({
	providedIn: 'root'
})
export class EventsService {
	constructor(private _eventsEndpoint: EventsEndpointService) {}

	public Find(pageSize: number, pageNumber: number, searchTerm: string): Observable<IEvent[]> {
		return this._eventsEndpoint.Find(pageSize, pageNumber, searchTerm);
	}

	public Get(id: number): Observable<IEvent> {
		return this._eventsEndpoint.Get(id);
	}
}
