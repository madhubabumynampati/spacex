import { Injectable } from '@angular/core';
import { map, catchError, tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SpacexService {
    BASE_URL: string = "https://api.spacexdata.com/v3/launches";
    constructor(public http: HttpClient) { }

    getAll(limit): Observable<any> {
        let params = new HttpParams().set('limit', limit);

        return this.http.get(`${this.BASE_URL}`, { params: params }).pipe(map(res => {
            return res;
        }), catchError(this.error))
    }
    getFilterLaunches(parameters): Observable<any> {
        let params = new HttpParams()
        Object.keys(parameters).forEach(function (key) {
            params = params.append(key, parameters[key]);
       });
       

        return this.http.get(`${this.BASE_URL}`, { params: params }).pipe(map(res => {
            return res;
        }), catchError(this.error))
    }
    // Handle Errors 
    error(error: HttpErrorResponse) {
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = { code: error.status, message: error.error.message };
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
