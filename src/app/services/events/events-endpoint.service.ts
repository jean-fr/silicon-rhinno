import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';

@Injectable({
	providedIn: 'root'
})
export class EventsEndpointService extends BaseService {
	constructor(private _httpClient: HttpClient, private _injector: Injector) {
		super(_httpClient, _injector);
	}

	public Find(pageSize: number, pageNumber: number, searchTerm: string): Observable<IEvent[]> {
		return this._httpClient.get<IEvent[]>(
			`${environment.apiBaseUrl}/events?page=${pageNumber}&pageSize=${pageSize}&search=${searchTerm}`
		);
	}

	public Get(id: number): Observable<IEvent> {
		return this._httpClient.get<IEvent>(`${environment.apiBaseUrl}/events/${id}`);
	}
}
