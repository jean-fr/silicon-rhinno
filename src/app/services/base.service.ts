import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	private _baseUrl: string = environment.apiBaseUrl;

	constructor(httpClient: HttpClient, _injector: Injector) {}

	protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[] } } {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Accept: `application/json, text/plain, */*`,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET'
		});

		return { headers: headers };
	}

	protected get BaseUrl(): string {
		return this._baseUrl;
	}
}
