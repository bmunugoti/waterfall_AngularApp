import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable()
export class AdminSampleService {
    constructor(private http: HttpClient) { }

    getSampleAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/AdminSample`);
    }

    getSampleById(id: number) {
        return this.http.get(`${environment.apiUrl}/AdminSample` + id);
    }

    registerSample(user: any) {
        return this.http.post(`${environment.apiUrl}/AdminSample`, user);
    }

    updateSample(user: any) {
        return this.http.put(`${environment.apiUrl}/AdminSample` , user);
    }

    deleteSample(id: number) {
        return this.http.delete(`${environment.apiUrl}/AdminSample?Id=`+ id);
    }
}