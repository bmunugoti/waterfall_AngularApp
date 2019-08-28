import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable()
export class WaterScheduleService {
    constructor(private http: HttpClient) { }

    getScheduleAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/WaterModelSchedule`);
    }

    getScheduleById(id: number) {
        return this.http.get(`${environment.apiUrl}/WaterModelSchedule` + id);
    }

    registerSchedule(user: any) {
        return this.http.post(`${environment.apiUrl}/WaterModelSchedule`, user);
    }

    updateSchedule(user: any) {
        return this.http.put(`${environment.apiUrl}/WaterModelSchedule`, user);
    }

    deleteSchedule(id: number) {
        return this.http.delete(`${environment.apiUrl}/WaterModelSchedule?Id=` + id);
    }
}