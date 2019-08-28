import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable()
export class AdminIncubatorService {
    constructor(private http: HttpClient) { }

    getIncubatorAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/AdminIncubator`);
    }

    getIncubatorById(id: number) {
        return this.http.get(`${environment.apiUrl}/AdminIncubator` + id);
    }

    registerIncubator(user: any) {
        return this.http.post(`${environment.apiUrl}/AdminIncubator`, user);
    }

    updateIncubator(user: any) {
        return this.http.put(`${environment.apiUrl}/AdminIncubator` , user);
    }

    deleteIncubator(id: number) {
        return this.http.delete(`${environment.apiUrl}/AdminIncubator?Id=` + id);
    }
}